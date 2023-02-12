import styled from 'styled-components'
import '@fontsource/varela-round'
import * as config from '../../context/general'

export const Input = styled.input`
    width: 100%;
    margin: 30px 0px;
    display: block;
    border: none;
    border-bottom: 1px solid gray;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    font: normal normal normal 17px/17px ${config.primaryLetter};

    &:focus{
        outline: none;
    }

    @media only screen and (min-width: 769px) {
        margin: 20px 0px;
        font: normal normal normal 17px/17px ${config.primaryLetter};
    }

    @media only screen and (min-width: 1200px) {   
        margin: 20px 0px;
        font: normal normal normal 13px/17px ${config.primaryLetter};
    }
`
export const InputImage = styled.input`
    width: 100%;
    margin: 30px 0px;
    border: none;
    display: none;

    &:focus{
        outline: none;
    }
`

export const Button = styled.button`
    margin: auto;
    margin-bottom: 20PX;
    display: block;
    box-sizing: border-box;
    height: 65px;
    width: 180px;
    padding: 0px;
    cursor: pointer;
    background: #22A9D4;
    border: none;
    text-align: center;
    color: rgb(255, 255, 255);
    letter-spacing: 0px;
    line-height: 1;
    border-radius: 40px;
    font: normal normal normal 20px/27px ${config.primaryLetter};

    &:hover{
        background: none rgb(0, 0, 0);
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
    font: normal normal 500 15px/18px ${config.primaryLetter};
    box-shadow: 0px 3px 6px #00000029;

    &:hover{
        background: none rgb(0, 0, 0);
    }

    & img, p{
        margin: auto;
    }

    @media (min-width: 769px) {
    }

    @media only screen and (min-width: 1200px) {   
        font: normal normal 500 10px/18px ${config.primaryLetter};
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

export const ContainerInputs = styled.div`
    display: flex;
    align-items: center;
    margin-left: 30px;
    width: 80%;
    margin: auto;

    &:nth-child(1){
      grid-row: 1/3;
      grid-column: 1/2;
    }

    @media only screen and (min-width: 769px) {
        width: 80%;
    }

    @media only screen and (min-width: 1200px) {   
        width: 80%;
    }
`
export const Icon = styled.img`
    width: 13px;
    height: 15px;
    margin-right: 10px;
`
export const ContainerLinks = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: auto;
    width: 80%;

    & :nth-child(2){
        color: #F7941D;
    }
`

export const Text = styled.p`
    margin: 0px 20px;
    color: blue;
    font-size: 13px;
    text-align: center;
`
export const ContainerImageInputs = styled.div`
    display: grid;
    grid-template-columns: fit-content(113px) 2fr;
    width: 90%;
    margin: auto;
`
export const ImageProfile = styled.img`
    width: 113px;
    max-width: 113px;

    @media only screen and (min-width: 769px) {
        width: 83px;
    }

    @media only screen and (min-width: 1200px) {   
        width: 83px;
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
    
    @media only screen and (min-width: 769px) {
    }

    @media only screen and (min-width: 1200px) {   
        
    }
`
