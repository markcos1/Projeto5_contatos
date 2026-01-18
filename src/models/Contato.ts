class Contato {
  foto: string | null = null
  nome: string
  email: string
  telefone: number
  id: number

  constructor(
    foto: string | null,
    nome: string,
    email: string,
    telefone: number,
    id: number
  ) {
    this.foto = foto
    this.nome = nome
    this.email = email
    this.telefone = telefone
    this.id = id
  }
}

export default Contato
