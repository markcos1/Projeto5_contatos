import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import { remover, editar } from '../../store/reducers/contatos'
import Contato from '../../models/Contato'

export type Props = Contato

const CardContato = ({ nome, email, telefone, id }: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaeditando] = useState(false)
  const [nomeUsuario, setNomeUsuario] = useState('')

  useEffect(() => {
    if (nome.length > 0) {
      setNomeUsuario(nome)
    }
  }, [nome])

  function cancelarEdicao() {
    setEstaeditando(false)
    setNomeUsuario(nome)
  }
  return (
    <S.Cards>
      <S.Foto src="" alt="" />
      <div>
        <S.Dados
          disabled={!estaEditando}
          value={nomeUsuario}
          onChange={(evento) => setNomeUsuario(evento.target.value)}
        >
          Nome: {nome}
        </S.Dados>
        <S.Dados htmlFor="email">Email: {email}</S.Dados>
        <S.Dados htmlFor="telefone">Telefone: {telefone}</S.Dados>
      </div>
      <S.DiviBotoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar
              type="button"
              onClick={() => {
                dispatch(
                  editar({
                    id,
                    nome,
                    telefone,
                    email
                  })
                )
                setEstaeditando(false)
              }}
            >
              Salvar
            </S.BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao} type="button">
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
