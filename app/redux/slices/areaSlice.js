import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import Network from '../../utils/network/Network';
import Endpoint from '../../utils/path/Path';
import { get } from "@/app/utils/query/Query";

export const fetchArea = createAsyncThunk('fetcharea',
    async () => {
        const response = await get( Endpoint.area);
        return response.data
    }

)


export const weighrRanges = createAsyncThunk('waight-ranges', async () => {
    try {
        const response = await get(Endpoint.weighrRanges)
        return response.data
      }
      catch (error) {
        return error
      }
    }
)

const areaSlice = createSlice({
    name: "area",
    initialState: {
        isLoading: false,
        isError: false,
        data: []
    },
    extraReducers: (builder) => {
        builder.addCase(fetchArea.pending, (state, action) => {
            state.isLoading = true
        });

        builder.addCase(fetchArea.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload.data
        });

        builder.addCase(fetchArea.rejected, (state, action) => {
            state.isError = true
            console.log("Erroe", action.payload)
        });

    }
})


export default areaSlice.reducer;


