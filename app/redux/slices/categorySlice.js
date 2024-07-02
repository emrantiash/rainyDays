import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Endpoint from '../../utils/path/Path';
import { post,get } from "@/app/utils/query/Query";

export const fetchCategory = createAsyncThunk('catagory', async () => {
    try {
        const response = await get(Endpoint.categories)
        return response.data
      }
      catch (error) {
        return error
      }
    }

)


const categorySlice = createSlice({
    name: "category",
    initialState: {
        isLoading: false,
        isError: false,
        data: []
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCategory.pending, (state, action) => {
            state.isLoading = true
        });

        builder.addCase(fetchCategory.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload.data
        });

        builder.addCase(fetchCategory.rejected, (state, action) => {
            state.isError = true
            console.log("Erroe", action.payload)
        });

    }
})


export default categorySlice.reducer;


