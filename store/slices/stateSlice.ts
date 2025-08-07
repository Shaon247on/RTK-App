// src/redux/slices/stateSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface StateSliceType {
  loading: boolean;
  routeHeader: string;
  error: string | null;
  data: any;
  addProductDialog: boolean
}

const initialState: StateSliceType = {
  loading: false,
  routeHeader: "Home",
  error: null,
  data: null,
  addProductDialog: false,
}

const stateSlice = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload
    },
    setRouteHeader(state, action: PayloadAction<string>){
        state.routeHeader = action.payload
    },
    setAddProductDialog(state, action: PayloadAction<boolean>){
        state.addProductDialog = action.payload
    },
    setData(state, action: PayloadAction<any>) {
      state.data = action.payload
    },
    resetState() {
      return initialState
    },
  },
})

export const { setLoading, setError, setData, resetState, setRouteHeader, setAddProductDialog } = stateSlice.actions
export default stateSlice.reducer
