import styled from 'styled-components'

const widthButton = '149px'
const heightButton = '48px'

export const FormUserContainer = styled.div`
display:grid;
grid-template-columns: 1fr 1fr;
gap: 25px;
padding: 30px;
`

export const formActions = styled(FormUserContainer)`
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap: 25px;
`

export const Input = styled.input`
  width: 100%;
  margin: auto;
  display: block;
  border: none;
  border-bottom: 1px solid gray;
  padding: 10px 2px 2px 2px;
  font: normal normal normal 12px/14px Arial;

  &:focus{
      outline: none;
  }


  &::placeholder{
    color: #BEBEBE;
    font: normal normal normal 12px/14px Arial;
  }

 

  @media only screen and (min-width: 701px) and (max-width: 1600px) {
    &::placeholder{
      font: normal normal normal 10px/14px Arial;
    }
  }
`

export const Buttons = styled.div`
  display: grid;
  margin-top: 60px;
  margin-bottom: 20px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-row-gap: 10px;
  cursor: pointer;

  & :nth-child(1){
    background: #89DD59 0% 0% no-repeat padding-box;
    width: ${widthButton};
    height: ${heightButton};
  }

  & :nth-child(2){
    background: #858585 0% 0% no-repeat padding-box;
    width: ${widthButton};
    height: ${heightButton};
  }
`

export const Select = styled.select`
    background: transparent;
    border-radius: 5px;
    font-size: 15px;
    color: #858585;
    width: 100%;
   // height: 45px;

    -webkit-appearance: none;
    -moz-appearance: none;
    background: transparent;
    background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
    background-repeat: no-repeat;
    background-position-x: 100%;
    background-position-y: 5px;
    border: 1px solid;
    border-radius: 5px;
    padding-left: 10px;
  `


export const SpanError = styled.span`
color:red;
`

export const CheckboxItem = styled.div`
  flex: 1 0 17%;
  display: flex;
  align-items: center;
  justify-content: left;

  @media only screen and (min-width: 769) {
  }

  @media only screen and (min-width: 1200px) {
    justify-content: center;
  }
`


export const Checkbox = styled.input`
  width: 30px;
  min-width: 30px;
  height: 30px;
  outline: 4px solid #22A9D4;
  border-radius: 5px;
  -moz-appearance:none;
  -webkit-appearance:none;
  -o-appearance:none;
  cursor: pointer;
  margin: 5px 20px;

  &:checked{
    background: #22A9D4;
  }

  @media only screen and (max-width: 700px) {
  }

  @media only screen and (min-width: 701px) and (max-width: 1600px) {
    width: 20px;
    height: 20px;
  }
`