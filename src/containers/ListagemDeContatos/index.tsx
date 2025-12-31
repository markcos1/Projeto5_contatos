import { useSelector } from 'react-redux'
import CardContato from '../../components/Contato'
import { ContainerLista } from './styles'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  return (
    <ContainerLista>
      <ul>
        {itens.map((l) => (
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
