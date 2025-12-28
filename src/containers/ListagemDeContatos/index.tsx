import CardContato from '../../components/Contato'
import { ContainerLista } from './styles'

const listagem = [
  {
    nome: 'Marcos Paulo',
    email: '234marcos.@gmail.com',
    telefone: 2197769355
  },
  {
    nome: 'Evelin Oliveira',
    email: '65evyy@gmail.com',
    telefone: 2198035521
  },
  {
    nome: 'Guiomar Almeida',
    email: 'aguiomar@gmail.com',
    telefone: 7509028792
  }
]

const ListaDeContatos = () => (
  <ContainerLista>
    <ul>
      {listagem.map((l) => (
        <li key={l.nome}>
          <CardContato nome={l.nome} email={l.email} telefone={l.telefone} />
        </li>
      ))}
    </ul>
  </ContainerLista>
)

export default ListaDeContatos
