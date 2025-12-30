import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

const tarefasSlice = createSlice({
  name: 'contatos',
  initialState: [
    new Contato('Marcos Paulo', 'lmp444@gmail.com', 7598362295, 1),
    new Contato('Evelin Oliveira', 'Evy@gmail.com', 7598362295, 2),
    new Contato('Guiomar Almeida', 'aguiomar444@gmail.com', 7598362295, 3)
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((contato) => contato.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions

export default tarefasSlice.reducer
