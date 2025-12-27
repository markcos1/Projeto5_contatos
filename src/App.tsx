import Cabecalho from './components/Cabecalho'
import ListaDeContatos from './containers/ListagemDeContatos'

import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Cabecalho />
        <ListaDeContatos />
      </Container>
    </>
  )
}

export default App
