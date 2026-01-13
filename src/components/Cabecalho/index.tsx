import { useDispatch, useSelector } from 'react-redux'
import { BarraPesquisa, Botao, Cabeca, Titulo } from './styles'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'

const Cabecalho = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <Cabeca>
      <Titulo>Contatos</Titulo>
      <BarraPesquisa
        type="text"
        placeholder="Buscar contato"
        value={termo}
        onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
      />
      <Botao to="/novo">+</Botao>
    </Cabeca>
  )
}

export default Cabecalho
