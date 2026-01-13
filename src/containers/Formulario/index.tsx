import * as S from './styles'

const Formulario = () => (
  <>
    <S.Forma>
      <S.titulo>Cadastro de novo contato</S.titulo>
      <S.CampoFoto>
        <S.Labels htmlFor="foto">Escolha uma foto:</S.Labels>
        <S.Inputs id="foto" type="file" accept="" />
      </S.CampoFoto>
      <S.CampoDados>
        <S.Labels htmlFor="nome">Nome:</S.Labels>
        <S.Inputs type="text" id="nome" />
        <S.Labels htmlFor="email">E-mail:</S.Labels>
        <S.Inputs type="text" id="email" />
        <S.Labels htmlFor="telefone">Telefone:</S.Labels>
        <S.Inputs type="text" id="telefone" />
      </S.CampoDados>
      <S.CampoBotao>
        <S.BotaoCadastrar type="submit">Cadastrar</S.BotaoCadastrar>
        <S.BotaoCancelar type="button">Cancelar</S.BotaoCancelar>
      </S.CampoBotao>
    </S.Forma>
  </>
)

export default Formulario
