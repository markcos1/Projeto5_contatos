import { useSelector } from 'react-redux'
import CardContato from '../../components/Contato'
import { ContainerLista } from './styles'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const estado = useSelector((state: RootReducer) => state.contatos)
  return (
    <ContainerLista>
      <ul>
        {estado.map((l) => (
          <li key={l.nome}>
            <CardContato
              nome={l.nome}
              email={l.email}
              telefone={l.telefone}
              id={0}
            />
          </li>
        ))}
      </ul>
    </ContainerLista>
  )
}

export default ListaDeContatos
