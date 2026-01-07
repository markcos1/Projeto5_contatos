import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type FiltroState = {
  termo: string
  criterio: string
}

const initialState: FiltroState = {
  termo: ' ',
  criterio: 'todos'
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alterarTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    }
  }
})

export const { alterarTermo } = filtroSlice.actions

export default filtroSlice.reducer
