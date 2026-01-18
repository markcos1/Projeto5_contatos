import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import { remover, editar } from '../../store/reducers/contatos'
import Contato from '../../models/Contato'

export type Props = Contato

const CardContato = ({ nome, email, telefone, id }: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaeditando] = useState(false)
  const [fotoUsuario, setFotoUsuario] = useState('')
  const [nomeUsuario, setNomeUsuario] = useState('')
  const [emailUsuario, setEmailUsuario] = useState('')
  const [telefoneUsuario, setTelefoneUsuario] = useState('')

  useEffect(() => {
    if (nome.length > 0) {
      setFotoUsuario(fotoUsuario)
      setNomeUsuario(nome)
      setEmailUsuario(email)
      setTelefoneUsuario(telefone.toString())
    }
  }, [fotoUsuario, nome, email, telefone])

  function cancelarEdicao() {
    setEstaeditando(false)
    setFotoUsuario(fotoUsuario)
    setNomeUsuario(nome)
    setEmailUsuario(email)
    setTelefoneUsuario(telefone.toString())
  }
  return (
    <S.Cards>
      <S.Foto src={fotoUsuario} alt="Foto do Contato" />
      <div>
        <S.Dados htmlFor="nome">
          Nome:
          {
            <S.inp
              type="text"
              disabled={!estaEditando}
              value={nomeUsuario}
              onChange={(evento) => setNomeUsuario(evento.target.value)}
            />
          }
        </S.Dados>
        <S.Dados htmlFor="email">
          Email:
          {
            <S.inp
              type="text"
              disabled={!estaEditando}
              value={emailUsuario}
              onChange={(evento) => setEmailUsuario(evento.target.value)}
            />
          }
        </S.Dados>
        <S.Dados htmlFor="telefone">
          Telefone:
          {
            <S.inp
              type="text"
              disabled={!estaEditando}
              value={telefoneUsuario}
              onChange={(evento) => setTelefoneUsuario(evento.target.value)}
            />
          }
        </S.Dados>
      </div>
      <S.DiviBotoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar
              type="button"
              onClick={() => {
                dispatch(
                  editar({
                    foto: null,
                    id,
                    nome: nomeUsuario,
                    telefone: Number(telefoneUsuario),
                    email: emailUsuario
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
