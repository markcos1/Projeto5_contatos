class Contato {
  nome: string
  email: string
  telefone: number
  id: number | undefined

  constructor(nome: string, email: string, telefone: number, id: number) {
    this.nome = nome
    this.email = email
    this.telefone = telefone
    this.id = id
  }
}

export default Contato
