
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Endpoint from '../../utils/path/Path';
import { get,post,put } from "@/app/utils/query/Query";

export const getMarchantProfile= createAsyncThunk('marchant-profile', async () => {
  try {
    const response = await get(Endpoint.merchant)
    return response.data
  }
  catch (error) {
    return error
  }

})

const initialStateValues = {
  data : ""
  
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState: initialStateValues,
  reducers: {
    profileStore : (state,action) => {
      state.data = action 
    }
  }
})

// Action creators are generated for each case reducer function
// export const { setlogin } = loginSlice.actions

export const { profileStore } = profileSlice.actions

export default profileSlice.reducer