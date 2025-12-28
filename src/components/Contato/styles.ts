import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Cards = styled.div`
  display: flex;
  align-items: center;
  padding: 24px;
  background-color: #5e5e5e;
  color: #fff;
  margin-bottom: 3px;
  height: 100%;
  border-radius: 16px;
`

export const Foto = styled.img`
  background-color: #e7e7e7;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
`

export const Dados = styled.label`
  font-size: 14px;
  font-weight: bold;
  margin: 8px;
  display: block;
`
export const DiviBotoes = styled.div`
  display: block;
  margin-left: auto;
`
export const Botao = styled.button`
  padding: 8px;
  cursor: pointer;
  margin-left: auto;
  width: 100%;
  display: block;
  border-radius: 8px;
  font-weight: bold;
  font-size: 12px;
`
export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`
export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
