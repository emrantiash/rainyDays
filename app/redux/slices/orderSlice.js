import cookieCutter from 'cookie-cutter';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Endpoint from '../../utils/path/Path';
import { customget, post } from '@/app/utils/query/Query';


export const getOrdersFromDash = createAsyncThunk('order', async (data) => {

  try {
    const response = await customget(Endpoint.ordersfromDash, data)
    return response.data
  }
  catch (error) {
    return error.response.data
  }

}

)

const initialStateValues = {
  login: false,
  success: false,
  isLoading: false,
  data: [],
  number :0,
  name : ""
  
}

export const orderSlice = createSlice({
  name: 'order',
  initialState: initialStateValues,
  reducers: {
    orderNumber : (state, action) => {
        state.number  = action.payload[0],
        state.name = action.payload[1]
      }
  },
  extraReducers: (builder) => {
    builder.addCase(getOrdersFromDash.pending, (state, action) => {
      state.isLoading = true
    });

    builder.addCase(getOrdersFromDash.fulfilled, (state, action) => {
      state.isLoading = false,
      state.data = action.payload.data
  });

  builder.addCase(getOrdersFromDash.rejected, (state, action) => {
    state.isLoading = false
  });

  }
})

// Action creators are generated for each case reducer function
// export const { setlogin } = loginSlice.actions

export const { orderNumber } = orderSlice.actions

export default orderSlice.reducer