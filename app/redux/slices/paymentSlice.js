
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Endpoint from '../../utils/path/Path';
import { get,post,put } from "@/app/utils/query/Query";

export const getMobileBankingList = createAsyncThunk('mobile_banking', async () => {
  try {
    const response = await get(Endpoint.mobileBankingList)
    return response.data
  }
  catch (error) {
    return error
  }

})

export const addThePaymentMethod = createAsyncThunk('payment-method', async (data) => {
    try {
      const response = await post(Endpoint.addPaymentMethod,data)
      return response.data
    }
    catch (error) {
      return error
    }
  
  })

  export const paymentHistory = createAsyncThunk('payment-method', async (data) => {
    try {
      const response = await get(Endpoint.paymentHistort,data)
      return response.data
    }
    catch (error) {
      return error
    }
  
  })

const initialStateValues = {
  data : ""
  
}

export const paymentSlice = createSlice({
  name: 'payment',
  initialState: initialStateValues,
//   reducers: {
//     proStore : (state,action) => {
//       state.data = action 
//     }
//   }
})

// Action creators are generated for each case reducer function
// export const { setlogin } = loginSlice.actions

// export const { profileStore } = paymentSlice.actions

export default paymentSlice.reducer