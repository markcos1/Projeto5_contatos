import { BarraPesquisa, BotaoAdicionar, Cabeca, Titulo } from './styles'

const Cabecalho = () => (
  <Cabeca>
    <Titulo>Contatos</Titulo>
    <BarraPesquisa type="text" />
    <BotaoAdicionar>+</BotaoAdicionar>
  </Cabeca>
)

export default Cabecalho
