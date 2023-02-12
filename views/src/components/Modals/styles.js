import styled from 'styled-components'
import * as config from '../../context/general'

const widthModal = '881px'
const heightModal = '486px'
const widthButton = '149px'
const heightButton = '48px'

export const ContainerFilters = styled.div`
  margin: 30px;

  & p {
    margin-left: 10px;
    font: normal normal normal 18px/13px ${config.primaryLetter};
    color: #858585;
  }

  & div {
    margin: 10px 0px;
  }

  & h1{
    padding: 0px;
    margin: 20px;
  }
`

export const Container = styled.div`
  position: fixed;
  top: calc(50% - 140px);
  left: calc(50% - 250px/2);
  z-index: 5;
  background: white;
  border: 2px solid #F36F23;
  border-radius: 40px;
  text-align: center;
  width: 250px;


  & h1{
    font: normal normal bold 25px/28px ${config.secondaryLetter} !important;
  }

  & h1, h4{
    text-align: center;
  }

  & h4{
    font: normal normal 100 18px/13px ${config.secondaryLetter};
  }

  & button{
    display: block;
    box-sizing: border-box;
    height: 40px;
    width: 120px;
    padding: 0px;
    cursor: pointer;
    background: #858585 0% 0% no-repeat padding-box;
    border: none;
    text-align: center;
    color: rgb(255, 255, 255);
    line-height: 1;
    border-radius: 10px;
    font-size: 15px;
    margin: auto;


    &:hover{
      background: none rgb(0, 0, 0);
    }

  & div {
    font: normal normal normal 25px/37px ${config.secondaryLetter};
  }
  }

  @media only screen and (min-width: 769px) {
  
    & h1{
      font: normal normal bold 30px/40px ${config.secondaryLetter};
    }

    & h4{
      font: normal normal 100 10px/13px ${config.secondaryLetter};
    }

    & button{
      height: 50px;
      width: 120px;
      font-size: 15px;
    }
  }

  @media only screen and (min-width: 1200px) {
    width: 750px;
    position: fixed;
    top: calc(50% - 230px);
    left: calc(50% - 750px/2);
    z-index: 100;
    background: white;
    border: 2px solid #F36F23;
    border-radius: 40px;
    padding: 20px;
    text-align: center;


    & h1{
      font: normal normal bold 35px/28px ${config.secondaryLetter} !important;
    }

    & h1, h4{
      text-align: center;
    }

    & h4{
      font: normal normal 100 18px/13px ${config.secondaryLetter};
    }

    & button{
      display: block;
      box-sizing: border-box;
      height: 40px;
      width: 120px;
      padding: 0px;
      cursor: pointer;
      background: #858585 0% 0% no-repeat padding-box;
      border: none;
      text-align: center;
      color: rgb(255, 255, 255);
      line-height: 1;
      border-radius: 10px;
      font-size: 15px;
      margin: auto;


      &:hover{
        background: none rgb(0, 0, 0);
      }

    & div {
      font: normal normal normal 25px/37px ${config.secondaryLetter};
    }
    }
  }
`

export const ContainerAbsolute = styled(Container)`
  position: absolute;
  top: 200px;
`

export const ContainerDocument = styled(Container)`
  width: 1000px;
  height: 600px;
  overflow: auto;
  margin-top: calc(-1 * 200px/2);
  margin-left: calc(-1 * 190px/2);
  
`
export const ContainerTextDocumet = styled.div`
  margin: 50px;
  padding: 20px;
  border: 1px solid gray;
  box-shadow: 0px 3px 6px #00000029;
  & p, pre{
    text-align: justify;
    margin: 10px 0px;
  }
`
export const BackgroundBlack = styled.div`
  background: rgba(0,0,0,0.2);
  width: 100vw;
  height: 100vw;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 3000;
`

export const ContainerLoading = styled.div`
  position: fixed;
  width: 400px;
  height: 200px;
  top: 50%;
  left: 50%;
  z-index: 4;
  margin-top: -100px; /* Negative half of height. */
  margin-left: -200px; /* Negative half of width. */
  background: transparent;
  border: none;
  border-radius: 40px;
  padding: 20px;
  text-align: center;

  & h1, h4{
    text-align: center;
  }

  & h4{
    font: normal normal 100 18px/13px ${config.secondaryLetter};
  }

  & button{
    display: block;
    box-sizing: border-box;
    height: 40px;
    width: 120px;
    padding: 0px;
    cursor: pointer;
    background: #858585 0% 0% no-repeat padding-box;
    border: none;
    text-align: center;
    color: rgb(255, 255, 255);
    line-height: 1;
    border-radius: 10px;
    font-size: 15px;
    margin: auto;


    &:hover{
      background: none rgb(0, 0, 0);
    }
  }

  @media only screen and (min-width: 769px) {
    width: 200px;
    height: 300px;
    margin-top: -150px; /* Negative half of height. */
    margin-left: -200px; /* Negative half of width. */

    & h1{
      font: normal normal bold 30px/40px ${config.secondaryLetter};
    }

    & h4{
      font: normal normal 100 10px/13px ${config.secondaryLetter};
    }

    & button{
      height: 50px;
      width: 120px;
      font-size: 15px;
    }
  }

  @media only screen and (min-width: 1200px) {   
    position: fixed;
    width: 600px;
    height: 350px;
    top: 50%;
    left: 50%;
    z-index: 100;
    margin-top: -170px; /* Negative half of height. */
    margin-left: -200px; /* Negative half of width. */
    background: transparent;
    border: none;
    border-radius: 40px;
    padding: 20px;
    text-align: center;

    & h1, h4{
      text-align: center;
    }

    & h4{
      font: normal normal 100 18px/13px ${config.secondaryLetter};
    }

    & button{
      display: block;
      box-sizing: border-box;
      height: 40px;
      width: 120px;
      padding: 0px;
      cursor: pointer;
      background: #858585 0% 0% no-repeat padding-box;
      border: none;
      text-align: center;
      color: rgb(255, 255, 255);
      line-height: 1;
      border-radius: 10px;
      font-size: 15px;
      margin: auto;


      &:hover{
        background: none rgb(0, 0, 0);
      }
    }
  }
`
export const ColorComplete = styled.h1`
  color: #F36F23;
  width: 80%;
  margin: auto;
  margin-top: 30px;
`
export const Image = styled.img`
  display: block;
  margin: auto;
  margin-top: 74px;
  width: 149px;
  min-width: 100px;

  @media only screen and (min-width: 769px) {

  }

  @media only screen and (min-width: 1200px) {  
    display: block;
    margin: auto;
    margin-top: 74px;
    width: 249px;
    height: 88px;
    min-width: 100px;
  }
`

export const ImageOK = styled.img`
  width: 48px;
  margin: 20px;
`

export const TextTerms = styled.h1`
  text-align: center;
  color: #F36F26;
  margin-top: 51px;
  padding: 0px 10px;

  @media only screen and (min-width: 769px) {
    font: normal normal bold 20px/30px ${config.secondaryLetter};
  }

  @media only screen and (min-width: 1200px) {   
    font: normal normal bold 23px/30px ${config.secondaryLetter} !important;
    text-align: center;
    color: #F36F26;
    margin-top: 51px;
    padding: 0px 100px;
  }
`
export const TextRegistered = styled.h1`
  text-align: center;
  color: #F36F26;
  font: normal normal bold 20px/30px ${config.secondaryLetter} !important;

  @media only screen and (max-width: 700px) {
    font: normal normal bold 20px/30px ${config.secondaryLetter};
  }

  @media only screen and (min-width: 701px) and (max-width: 1600px) {   
    font: normal normal bold 35px/30px ${config.secondaryLetter} !important;
  }
`
export const Buttons = styled.div`
  display: grid;
  margin-top: 60px;
  margin-bottom: 20px;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 10px;


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
export const Button = styled.div`
  display: flex;
  margin-top: 60px;
  margin-bottom: 20px;

  & :nth-child(1){
    background: #858585 0% 0% no-repeat padding-box;
    width: ${widthButton};
    height: ${heightButton};
  }
`

export const ButtonClose = styled.div`
  
  & button{
    position: absolute;
    right: 25px;
    background: red;
  }

`
export const TitleTextDocumet = styled.p`
  text-align: left;
  font-weight: bold;
  font-family: ${config.primaryLetter};
`
export const TableTextDocument = styled.table`
  border: 1px solid black;
  width: ${props => props.width};
  margin-top: 10px;
  
  & tr{
   height: 20px
  }

  & td{
    min-width:20px;
    border: 1px solid black;
  }
`

export const TableTextDocumentWithMinWidth = styled(TableTextDocument)`
  min-width: 300px;
`

export const ContainersTableByRows = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
`
export const DimensionText = styled.p`
  text-align: center !important;
  background: #eaeaea;
  border: 1px solid;
  font-weight: bold;
`

export const ListTextDocument = styled.li`
  text-align: justify;
  margin: 20px auto;

  & ul {
    list-style-type: circle;
    margin-left: 30px;
  }
`
export const TableItemsQuestion = styled.table`
  width: 80%;
  margin: 20px auto;

  & thead{
    background: #AEAEAE;
    padding: 0px;
    margin: 0px;
    text-align: center;
  }

  & th, td{
    border: 1px solid black;
  }

  & td{
    text-align: center;
    height: 70px;
  }
`

export const ContainerVideos = styled(Container)`
  width: 250px;

  @media only screen and (min-width: 1200px) {
    width: 850px;
  }
`

export const Video = styled.video`
  width: -webkit-fill-available;
  height: 100%;
`

export const SubtitleShort = styled.p`
  color: #858585;
  text-align: center;
  margin-top: 0px;
  margin-bottom: 20px;
  font-weight: 300;
  font: normal normal normal 18px/37px ${config.secondaryLetter};

  @media only screen and (min-width: 769px) {
  }

  @media only screen and (min-width: 1200px) {   
    font: normal normal normal 20px/37px ${config.secondaryLetter};
  }
`

