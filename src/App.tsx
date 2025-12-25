import Cabecalho from './containers/Cabecalho'
import ListaDeContatos from './containers/ListaDeContatos'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Cabecalho />
      </Container>
      <ListaDeContatos />
    </>
  )
}

export default App
