import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`

  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;

}
`

export const Container = styled.div`
  display: block;
  width: 100%;
  background-color: #000;
  color: #fff;
  padding: 26px;
`

export default EstiloGlobal
