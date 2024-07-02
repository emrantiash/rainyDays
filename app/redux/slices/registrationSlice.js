import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import Network from '../../utils/network/Network';
import Endpoint from '../../utils/path/Path';
import axios from 'axios';

export const cusRegistration = createAsyncThunk('reg', async (data) => {

    try {
        console.log(Network.network + Endpoint.registration, data)
        const response = await axios.post(Network.network + Endpoint.registration, data)
        console.log(response.data)
        return response.data
    }
    catch (error) {
        console.error("The Error is =====", error);
    }

}

)

const registrationSlice = createSlice({
    name: "registration",
    initialState: {
        isLoading: false,
        isError: false,
        success : false ,
        data: []
    },
    extraReducers: (builder) => {
        builder.addCase(cusRegistration.pending, (state, action) => {
            state.isLoading = true
        });

        builder.addCase(cusRegistration.fulfilled, (state, action) => {
            state.isLoading = false,
            state.success =  true ,
            state.data = action.payload

        });

        builder.addCase(cusRegistration.rejected, (state, action) => {
            state.isError = true
            console.log("Error=", action)
        });

    }
})


export default registrationSlice.reducer;


