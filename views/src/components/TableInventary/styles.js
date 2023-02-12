import styled from 'styled-components'
import * as config from '../../context/general'

export const actions = styled.button`
  padding-left: 5px;
  padding-right: 5px;
  background: transparent;
  border: none;
`

export const itemActions = styled.img`
  max-width: 20px;
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`
export const Button = styled.button`
  width: 142px;
  height: 56px;
  padding: 0px;
  cursor: pointer;
  background: #89DD59;
  border: none;
  color: rgb(255, 255, 255);
  line-height: 1;
  border-radius: 40px;
  font-size: 20px;
  font: normal normal bold 14px/27px ${config.primaryLetter};
  box-shadow: 5px 5px 8px #00000029;
  margin-bottom: 30px;


  &:hover{
      background: none rgb(68, 210, 255);
  }

  @media only screen and (min-width: 769px) {  
    width: 242px;
    height: 56px;
    font-size: 22px;
    justify-self: end;
  }
`

export const ButtonCreate = styled(Button)`
  width: 80px;
  height: 40px;
  margin-top: 20px;
  margin-right: 30px;
  border: 1px solid ${props => props.color || 'rgb(235,101,26)'};
  background: transparent;
  color: ${props => props.color || 'rgb(235,101,26)'};
  font-size: 10px;


  &:hover{
      background: ${props => props.color || 'rgb(235,101,26)'};
      color: white;
  }

  @media only screen and (min-width: 769px) {  
    width: 180px;
    height: 46px;
    font-size: 15px;
    justify-self: end;
  }
`

export const ContainerTable = styled.div`
  margin: 10px 0px;
  width: 100%;
  overflow: hidden;

  @media only screen and (min-width: 769px) {  
    margin: 30px;
  }
`
