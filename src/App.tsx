import { Provider } from 'react-redux'
import Cabecalho from './components/Cabecalho'
import ListaDeContatos from './containers/ListagemDeContatos'

import EstiloGlobal, { Container } from './styles'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <Cabecalho />
        <ListaDeContatos />
      </Container>
    </Provider>
  )
}

export default App
