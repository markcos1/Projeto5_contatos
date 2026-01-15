import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import * as S from './styles'
import Contato from '../../models/Contato'
import { cadastrar } from '../../store/reducers/contatos'

const Formulario: React.FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [novoNome, setNovoNome] = useState<string>('')
  const [novoEmail, setNovoEmail] = useState<string>('')
  const [novoTelefone, setNovoTelefone] = useState<number>(0)

  const cadastrarContato = (evento: React.FormEvent) => {
    evento.preventDefault()

    const contatoParaAdicionar = new Contato(
      novoNome,
      novoEmail,
      novoTelefone,
      9
    )
    dispatch(cadastrar(contatoParaAdicionar))
    navigate('/')
  }

  return (
    <S.Forma onSubmit={cadastrarContato}>
      <S.titulo>Cadastro de novo contato</S.titulo>
      <S.CampoFoto>
        <S.LabelStyled htmlFor="foto-upload">Escolha uma foto:</S.LabelStyled>
        <S.InputHidden id="foto-upload" type="file" accept="image/*" />
      </S.CampoFoto>
      <S.CampoDados>
        <S.Labels htmlFor="nome">Nome:</S.Labels>
        <S.Inputs
          value={novoNome}
          onChange={(evento) => setNovoNome(evento.target.value)}
          type="text"
          id="nome"
        />
        <S.Labels htmlFor="email">E-mail:</S.Labels>
        <S.Inputs
          value={novoEmail}
          onChange={(evento) => setNovoEmail(evento.target.value)}
          type="text"
          id="email"
        />
        <S.Labels htmlFor="telefone">Telefone:</S.Labels>
        <S.Inputs
          value={novoTelefone}
          onChange={(evento) => setNovoTelefone(evento.target.valueAsNumber)}
          type="number"
          id="telefone"
        />
      </S.CampoDados>
      <S.CampoBotao>
        <S.BotaoCadastrar type="submit">Cadastrar</S.BotaoCadastrar>
        <S.BotaoCancelar type="button" onClick={() => navigate('/')}>
          Cancelar
        </S.BotaoCancelar>
      </S.CampoBotao>
    </S.Forma>
  )
}

export default Formulario
export {}
