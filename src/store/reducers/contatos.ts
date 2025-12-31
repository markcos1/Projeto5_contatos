import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type TarefaState = {
  itens: Contato[]
}

const initialState: TarefaState = {
  itens: [
    {
      id: 1,
      nome: 'Marcos Paulo Coelho Ferreira',
      email: 'lmp4444@gmail.com',
      telefone: 7539324555
    },
    {
      id: 2,
      nome: 'Evelin Oliveira',
      email: 'evy55@gmail.com',
      telefone: 7539324555
    },
    {
      id: 3,
      nome: 'Guiomar Almeida',
      email: 'aguiomar@gmail.com',
      telefone: 7539324555
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    }
  }
})

export const { remover } = tarefasSlice.actions

export default tarefasSlice.reducer
