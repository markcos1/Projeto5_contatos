import { useSelector } from 'react-redux'
import CardContato from '../../components/Contato'
import { ContainerLista } from './styles'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraTarefas = () => {
    return itens.filter(
      (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
    )
  }

  return (
    <ContainerLista>
      <p>2 contatos nomeados como: {termo}</p>
      <ul>
        {filtraTarefas().map((l) => (
          <li key={l.nome}>
            <CardContato
              nome={l.nome}
              email={l.email}
              telefone={l.telefone}
              id={l.id}
            />
          </li>
        ))}
      </ul>
    </ContainerLista>
  )
}

export default ListaDeContatos
