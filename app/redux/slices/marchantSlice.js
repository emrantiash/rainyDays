import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Endpoint from '../../utils/path/Path';
import { get,post,put } from "@/app/utils/query/Query";


export const getMarchantDashboard = createAsyncThunk('marchant-dashboard', async () => {
  try {
    const response = await get(Endpoint.dashBoard)
    return response.data
  }
  catch (error) {
    return error
  }

})





// switch to order slice
export const createBulkOrder = createAsyncThunk('bulk-order', async (data) => {
  try {  
   
    const response = await post(Endpoint.postBulkOrder, data)
    console.log(response.data)
    return response.data
  }
  catch (error) {
    return error 
  }

})


// switch to order slice
export const createOrder = createAsyncThunk('order', async (data) => {
  try {  
   
    const response = await post(Endpoint.postOrder, data)
    console.log(response)
    return response.data
  }
  catch (error) {
    return error 
  }

})

export const getMarchant = createAsyncThunk('marchant', async () => {
  try {
    const response = await get(Endpoint.marchant)
    return response.data
  }
  catch (error) {
    return error
  }

})

export const updateMarchant = createAsyncThunk('umarchant', async (data) => {
  try {  
    const response = await put(Endpoint.marchantUpdate, data )
    console.log(response.data)
    return response.data
  }
  catch (error) {
    console.log(error)
    return error
  }
})

export const changePassword = createAsyncThunk('change', async (data) => {
  try {  
   
    const response = await post(Endpoint.changePassword, data)
    return response.data
  }
  catch (error) {
    return error
  }

})

const initialStateValues = {
  login: false,
  success: false,
  isLoading: false,
  data: [],
  isError: false,
  message : "" ,
  
}

export const marchantSlice = createSlice({
  name: 'marchant',
  initialState: initialStateValues,

  reducers: {
    // orderNumber : (state, action) => {
    //   state.number  = action.payload[0],
    //   state.name = action.payload[1]
    // }
  },

  extraReducers: (builder) => {
    builder.addCase(getMarchant.pending, (state, action) => {
      state.isLoading = true
    });

    builder.addCase(getMarchant.fulfilled, (state, action) => {
        state.isLoading = false,
        state.login = true,
        state.data = action.payload.data
    });
    builder.addCase(getMarchant.rejected, (state, action) => {
      state.isError = true
    });


    

    builder.addCase(createBulkOrder.pending, (state, action) => {
      state.isLoading = true
    });

    builder.addCase(createBulkOrder.fulfilled, (state, action) => {
        state.isLoading = false
    });

    builder.addCase(createBulkOrder.rejected, (state, action) => {
      state.isLoading = false
    });

   

    // update marchant

    // builder.addCase(updateMarchant.pending, (state, action) => {
    //   state.isLoading = true
    // });

    // builder.addCase(updateMarchant.fulfilled, (state, action) => {
    //     state.isLoading = false,
    //     state.message = action.payload.message,
    //     state.data = action.payload.data


    // });

    // builder.addCase(updateMarchant.rejected, (state, action) => {
    //   state.isError = true
    // });

    // change password

    builder.addCase(changePassword.pending, (state, action) => {
      state.isLoading = true
    });

    builder.addCase(changePassword.fulfilled, (state, action) => {
        state.isLoading = false,
        state.message = action.payload.message


    });

    builder.addCase(changePassword.rejected, (state, action) => {
      state.isError = true
    });

  }
})

export const { dashboardData } = marchantSlice.actions

export default marchantSlice.reducer