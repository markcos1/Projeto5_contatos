import * as S from './styles'

const CardContato = () => (
  <S.Cards>
    <S.Foto src="" alt="" />
    <div>
      <S.Dados htmlFor="">Nome:</S.Dados>
      <S.Dados htmlFor="">Email:</S.Dados>
      <S.Dados htmlFor="">Telefone:</S.Dados>
    </div>
    <div>
      <S.Botao type="button">Editar</S.Botao>
      <S.Botao type="button">Excluir</S.Botao>
    </div>
  </S.Cards>
)

export default CardContato
