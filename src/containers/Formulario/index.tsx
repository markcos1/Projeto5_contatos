import { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import * as S from './styles'
import { cadastrar } from '../../store/reducers/contatos'
import Contato from '../../models/Contato'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [photo, setPhoto] = useState<string>('')
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const [novoNome, setNovoNome] = useState<string>('')
  const [novoEmail, setNovoEmail] = useState<string>('')
  const [novoTelefone, setNovoTelefone] = useState<number>(0)

  const cadastrarContato = (evento: React.FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        foto: photo,
        nome: novoNome,
        email: novoEmail,
        telefone: novoTelefone
      })
    )
    navigate('/')
    console.log('Contato cadastrado com sucesso!')
  }

  const hadlePhotoClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (evento: React.ChangeEvent<HTMLInputElement>) => {
    const file = evento.target.files?.[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setPhoto(imageUrl)
    }
  }

  const handleSave = () => {
    const newContact: Contato = {
      id: Date.now(),
      nome: novoNome,
      email: novoEmail,
      telefone: novoTelefone,
      foto: photo
    }
    console.log('Contato salvo:', newContact)
  }

  return (
    <S.Forma onSubmit={cadastrarContato}>
      <S.titulo>Adicionar novo contato</S.titulo>
      <S.CampoFoto onClick={hadlePhotoClick}>
        {photo ? (
          <S.Avatar src={photo} alt="Foto do Contato" />
        ) : (
          <S.Placeholder>Adicionar foto</S.Placeholder>
        )}
        <S.InputHidden
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
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
        <S.BotaoCadastrar onClick={handleSave}>Cadastrar</S.BotaoCadastrar>
        <S.BotaoCancelar type="button" onClick={() => navigate('/')}>
          Cancelar
        </S.BotaoCancelar>
      </S.CampoBotao>
    </S.Forma>
  )
}

export default Formulario
