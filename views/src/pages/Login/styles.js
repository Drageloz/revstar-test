import styled from 'styled-components'
import * as config from '../../context/general'

export const ContainerInputs = styled.div`
    display: flex;
    align-items: center;
    margin-left: 30px;
    width: 82%;
    margin: auto;
`
export const Input = styled.input`
    width: 100%;
    margin: 30px 0px;
    display: block;
    border: none;
    border-bottom: 1px solid gray;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    font: normal normal normal 17px/27px ${config.primaryLetter};

    &:focus{
        outline: none;
    }


    @media only screen and (min-width: 1200px) {   
        margin: 10px 0px;
        font: normal normal normal 12px/27px ${config.primaryLetter};
        &::placeholder{
            font: normal normal normal 12px/17px ${config.primaryLetter};
        }
      
    }
`
export const ContainerLinks = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: auto;
    width: 82%;

    & :nth-child(2){
        color: #F7941D;
    }
`
export const AnchorLinks = styled.div`
    cursor: pointer;
    margin-bottom: 30px;
    color: #22A9D4;
    display: grid;
    font: normal normal bold 17px/27px ${config.primaryLetter};
        
    &:nth-child(2){
        text-align: end;
    }
    &:nth-child(1){
        text-align: start;
    }

    @media (min-width: 769px) {
    }

    @media only screen and (min-width: 1200px) {   
        font-size: 12px;
        margin-bottom: 15px;
    }
`
export const Button = styled.button`
    margin:auto;
    display: block;
    box-sizing: border-box;
    height: 53px;
    width: 145px;
    padding: 0px;
    cursor: pointer;
    background: #22A9D4;
    border: none;
    text-align: center;
    color: rgb(255, 255, 255);
    line-height: 1;
    border-radius: 40px;
    font: normal normal normal 20px/37px ${config.primaryLetter};

    &:hover{
        background: none rgb(0, 0, 0);
    }

    @media (max-width: 700px) {
    }

    @media only screen and (min-width: 1200px) {   
        width: 100px;
        height: 38px;
        font: normal normal normal 15px ${config.primaryLetter};
    }
`
export const Separator = styled.div`
    margin: 20px;
    display: grid;
    grid-template-columns: 1fr 0.1fr 1fr;

    & :nth-child(1){
        margin-left: auto;
    }
    & :nth-child(3){
        margin-right: auto;
    }

    & :nth-child(2n+1){
        border: 0.5px solid #707070;
        width: 40%;
        height: 0px;
        background: #707070;
        margin-top: auto;
        margin-bottom: auto;
    }

    & :nth-child(2){
        border: 2px solid #707070;
        width: 5px;
        height: 5px;
        border-radius: 40px;
        margin: auto;
    }
    
    @media only screen and (max-width: 700px) {
    }

    @media only screen and (min-width: 701px) and (max-width: 1200px) {   
        
    }
`
export const ButtonSession = styled.div`
    margin:10px auto;
    display: grid;
    grid-template-columns: 0.3fr 2fr;
    box-sizing: border-box;
    height: 30px;
    width: 80%;
    padding: 0px;
    cursor: pointer;
    background: white;
    border: none;
    text-align: center;
    color: #707070;
    letter-spacing: 0px;
    line-height: 1;
    border-radius: 40px;
    font: normal normal 500 18px/18px ${config.primaryLetter};
    box-shadow: 0px 3px 6px #00000029;
    padding-right: 20px;

    &:hover{
        background: none rgb(0, 0, 0);
    }

    & img, p{
        margin: auto;
    }

    @media (max-width: 700px) {
    }

    @media only screen and (min-width: 1200px) {   
        font: normal normal 500 12px/18px ${config.primaryLetter};
    }
`
export const Icon = styled.img`
    width: 15px;
    height: 15px;
    margin-right: 10px;

    @media (max-width: 700px) {
    }

    @media only screen and (min-width: 1200px) {  
        width: 15px;
        height: 15px;
    }
`

export const IconPassword = styled(Icon)`
    width: 15px;
    height: 15px;

    @media (max-width: 700px) {
    }

    @media only screen and (min-width: 1200px) {  
        width: 15px;
        height: 15px;
    }
`
export const CaptchaRender = styled.div`
    margin: 10px auto;
    width: fit-content;
`
export const TextPromotional = styled.p`
    font: normal normal bold 12px/18px ${config.primaryLetter};
    padding: 10px;
    color: #F7941D;
`
