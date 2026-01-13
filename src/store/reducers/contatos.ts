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
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (l) => l.id === action.payload.id
      )
      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Contato>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )
    }
  }
})

export const { remover, editar } = tarefasSlice.actions

export default tarefasSlice.reducer
