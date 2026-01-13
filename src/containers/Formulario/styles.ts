import styled from 'styled-components'

export const Forma = styled.form`
  display: block;
  align-items: center;
  justify-content: center;
  background-color: rgb(0, 13, 160);
  color: #000;
  height: 90vh;
  margin: 8px;
`
export const CampoFoto = styled.div`
  display: flex;
  margin: 8px;
  align-items: center;
  justify-content: center;
  margin-bottom: 26px;
`

export const CampoDados = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 26px;
`
export const CampoBotao = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const titulo = styled.h2`
  margin-top: 16px;
  margin-bottom: 16px;
  padding: 16px;
  text-align: center;
`
export const Labels = styled.label`
  margin-top: 8px;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: bold;
`
export const Inputs = styled.input`
  margin-top: 8px;
  margin-bottom: 8px;
  padding: 3px;
  margin-left: 4px;
`
export const BotaoCadastrar = styled.button`
  background-color: green;
  color: #fff;
  padding: 8px;
  margin: 8px;
  border-radius: 4px;
  border-style: none;
`
export const BotaoCancelar = styled.button`
  background-color: red;
  color: #fff;
  padding: 8px;
  border-radius: 4px;
  border-style: none;
  margin: 8px;
`
