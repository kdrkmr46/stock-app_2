const authSlice = createSlice({
  name: "auth",

  initialState: {
    currentUser: null,
    loading: false,
    error: false,
    isAdmin: false,
    token: null,
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload?.user?.username;
      state.isAdmin = action.payload?.user?.is_superuser;
      state.token = action.payload?.key;
    },
    logoutSuccess: (state) => {
      state.loading = false;
      state.currentuser = null;
      state.token = null;
    },
    registerSuccess: (state, { payload }) => {
      state.loading = false;
      state.currentUser = payload?.username;
      state.token = payload?.token;
      state.error = true;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
}); 

export const {
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
  fetchFail,
} = authSlice.action;
export default authSlice.reducer;
