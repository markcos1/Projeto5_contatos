import { useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import { remover } from '../../store/reducers/contatos'
import Contato from '../../models/Contato'

export type Props = Contato

const CardContato = ({ nome, email, telefone, id }: Props) => {
  const dispatch = useDispatch()
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
            <S.BotaoCancelarRemover
              type="button"
              onClick={() => dispatch(remover(id))}
            >
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.DiviBotoes>
    </S.Cards>
  )
}

export default CardContato
