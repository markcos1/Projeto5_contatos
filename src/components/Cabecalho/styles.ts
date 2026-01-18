import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Cabeca = styled.div`
  display: block;
  width: 100%;
  text-align: center;
  padding: 20px;
  background-color: #000;
  color: #fff;
  margin-bottom: 3px;

  a {
    display: inline-block;
    text-align: center;
    font-weight: bold;
    font-size: 24px;
    line-height: 44px;
    margin-left: 17px;
  }
`

export const Titulo = styled.h1`
  font-weight: bold;
  padding: 8px;
  margin-right: 50px;
`
export const BarraPesquisa = styled.input`
  border-radius: 8px;
  padding: 8px;
  border-color: none;
  width: 35%;
`
export const Botao = styled(Link)`
  display: flex;

  border-radius: 50%;
  height: 44px;
  width: 44px;
  background-color: #44bd32;
  color: #fff;
  text-decoration: none;
  align-content: center;
`
