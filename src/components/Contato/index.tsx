import { useState } from 'react'
import * as S from './styles'

export type Props = {
  nome: string
  email: string
  telefone: number
}

const CardContato = ({ nome, email, telefone }: Props) => {
  const [estaEditando, setEstaeditando] = useState(false)

  return (
    <S.Cards>
      <S.Foto src="" alt="" />
      <div>
        <S.Dados htmlFor="">Nome: {nome}</S.Dados>
        <S.Dados htmlFor="">Email: {email}</S.Dados>
        <S.Dados htmlFor="">Telefone: {telefone}</S.Dados>
      </div>
      <S.DiviBotoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar type="button">Salvar</S.BotaoSalvar>
            <S.BotaoCancelarRemover
              onClick={() => setEstaeditando(false)}
              type="button"
            >
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaeditando(true)} type="button">
              Editar
            </S.Botao>
            <S.BotaoCancelarRemover type="button">
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.DiviBotoes>
    </S.Cards>
  )
}

export default CardContato
