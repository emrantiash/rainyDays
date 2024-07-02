import cookieCutter from 'cookie-cutter';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Endpoint from '../../utils/path/Path';
import { post } from '@/app/utils/query/Query';
import cookiesNames from '@/app/utils/constant/Constant';

export const marchantLogin = createAsyncThunk('login', async (data) => {

  try {
    const response = await post(Endpoint.marchantLogin, data)
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
  isError: false,
  token: "",
  msg : "Network Error"
}

export const loginSlice = createSlice({
  name: 'login',
  initialState: initialStateValues,
  reducers: {
    signout: (state, action) => {
      state.login = false
      cookieCutter.set(cookiesNames.AUTH_X_MIT_DELIVER_20, null, { expires: new Date(0) })
      cookieCutter.set(cookiesNames.LOG_IN, false, { expires: new Date(0) })
      cookieCutter.set(cookiesNames.HOW_THIS_MEASUREMENT_IS, null , { expires: new Date(0) })
      cookieCutter.set(cookiesNames.MARCHANT_USER, null , { expires: new Date(0) })
    }
  },
  extraReducers: (builder) => {
    builder.addCase(marchantLogin.pending, (state, action) => {
      state.isLoading = true
    });

    builder.addCase(marchantLogin.fulfilled, (state, action) => {
      state.isLoading = false,
      state.login = action.payload.success,
      state.data = action.payload,
      state.token = action.payload.token
  });

  builder.addCase(marchantLogin.rejected, (state, action) => {
    state.isError = true,
    state.isLoading = false,
    state.msg = "Network Error"
  });

  }
})

// Action creators are generated for each case reducer function
// export const { setlogin } = loginSlice.actions

export const { signout } = loginSlice.actions

export default loginSlice.reducer