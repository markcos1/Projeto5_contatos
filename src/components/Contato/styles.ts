import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Cards = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  background-color: #5e5e5e;
  color: #fff;
  margin-bottom: 3px;
  height: 100%;
  border-radius: 16px;

  @media (max-width: 720px) {
    padding: 12px;
  }
`

export const Foto = styled.img`
  background-color: #e7e7e7;
  width: 88px;
  height: 88px;
  border-radius: 50%;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 66px;

  @media (max-width: 720px) {
    width: 40px;
    height: 40px;
    font-size: large;
    padding: 33px;
  }
`

export const Dados = styled.label`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
  display: block;
  margin-left: 66px;
  width: 100%;

  @media (max-width: 720px) {
    margin-left: 8px;
  }
`
export const inp = styled.input`
  padding: 4px;
  border-radius: 8px;
  border: none;
  width: 100%;
  color: #000;
  background-color: #fff;

  @media (max-width: 720px) {
    margin-left: 1px;
    width: 100%;
  }
`
export const DiviBotoes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  margin-left: auto;
  padding: 20px;
`
export const Botao = styled.button`
  padding: 12px;
  cursor: pointer;
  width: 100%;
  display: block;
  border-radius: 8px;
  font-weight: bold;
  font-size: 12px;
  margin: 5px;

  @media (max-width: 720px) {
    padding: 6px;
    margin-right: auto;
  }
`
export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`
export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
