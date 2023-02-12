import styled from 'styled-components'
import * as config from '../../context/general'

export const Title = styled.h2`
  color: #F36F23;
  text-align: center;
  margin-bottom: 0px;
  margin-top: 20px;
  font: normal normal bold 35px/39px ${config.secondaryLetter};

  @media only screen and (min-width: 769px) {
  }

  @media only screen and (min-width: 1200px) {     
    font: normal normal bold 45px/39px ${config.secondaryLetter};
  }
`
export const SubTitle = styled.h3`
  color: #858585;
  text-align: center;
  margin-top: 0px;
  margin-bottom: 20px;
  font-weight: 300;
  font: normal normal normal 22px/37px ${config.secondaryLetter};

  @media only screen and (min-width: 769px) {
  }

  @media only screen and (min-width: 1200px) {   
    font: normal normal normal 25px/37px ${config.secondaryLetter};
  }

`
export const ContainerInternalNavBar = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin-bottom: 20px;

  & button{
    border: none;
    color: #858585;
    font: normal normal bold 15px/35px ${config.secondaryLetter};
    letter-spacing: 0.3px;
    padding: 0px 10px;
    
    &.active{
      background: #F36F23;
      color: white;
      letter-spacing: 2px;
      box-shadow: 5px 5px 6px #00000029;
      border-radius: 9px;
    }
  }

  @media only screen and (min-width: 769px) {
    height: 64px;

    & button{
      font: normal normal bold 30px/35px ${config.secondaryLetter};
      letter-spacing: 0.3px;
    }
  }

  @media only screen and (min-width: 1200px) {   
    width: 100%;
  }

`

export const ContainerInternalNavBar2 = styled(ContainerInternalNavBar)`
  grid-template-columns: repeat(2, 1fr);
`

export const ContainerInternalNavBar4 = styled(ContainerInternalNavBar)`
  grid-template-columns: repeat(4, 1fr);
`

export const ContainerInternalNavBarTwoColumsn = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 64px;
  margin-bottom: 20px;

  & button{
    border: none;
    color: #858585;
    font: normal normal bold 30px/35px ${config.secondaryLetter};
    letter-spacing: 0.3px;
    
    &.active{
      background: rgb(235,101,26);
      color: white;
      box-shadow: 5px 5px 6px #00000029;
      border-radius: 9px;
    }

    @media only screen and (max-width: 700px) {
    }

    @media only screen and (min-width: 701px) and (max-width: 1600px) {   
      font: normal normal 400 15px/20px ${config.secondaryLetter};
      height: 40px;
    }
  }

  @media only screen and (max-width: 700px) {
  }

  @media only screen and (min-width: 701px) and (max-width: 1600px) {
    height: 40px;
    margin-bottom: 10px;
  }
`
export const Text = styled.h4`
  color: #858585;
  text-align: center;
  margin-top: 0px;
  font: normal normal normal 15px/37px ${config.primaryLetter};
`
export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: block;

  @media (max-width: 700px) {
  }

  @media only screen and (min-width: 701px) and (max-width: 1600px) { 
  }
`
export const Navbar = styled.nav`
  grid-column: 2/4;
  grid-row: 1;
  width: 100%;
  height: 100%;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  display: grid;
  grid-template-columns: 1fr;
  padding-left: 25px;

  min-height: 60px;

  @media only screen and (min-width: 769px) {

  }

  @media only screen and (min-width: 1200px) { 
    grid-column: 2/4;
    grid-row: 1;
    width: 100%;
    height: 100%;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-left: 25px;
  }
`
export const SidebarOpen = styled.aside`
  grid-column: 1;
  grid-row: 1/4;
  width: 368px;
  background: #22A9D4;
  display: grid;
  grid-template-rows: 0.2fr 1.3fr;
  font: normal normal 900 20px/28px Arial;
  position: fixed;
  overflow-y:scroll;
  top: 0;
  height: 100%;
  bottom: 0;
  z-index: 9999;

  &::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  
  @media (max-width: 700px) {
    width: 250px;
    font: normal normal 900 10px/28px Arial;
    grid-template-rows: 0.1fr 1.3fr;
  }

  @media only screen and (min-width: 701px) and (max-width: 1600px) {   
    font: normal normal 900 10px/28px Arial;
    width: 300px;
    grid-template-rows: 0.2fr 1.3fr;
  }
`
export const SidebarClosed = styled.div`
  height: 1400px;
  min-height: 100vh;
  grid-column: 1;
  grid-row: 1/4;
  width: 60px;
  background: #22A9D4;
  position: fixed;
  top: 0;
  height: 100%;
  bottom: 0;
  z-index: 9999;

  @media only screen and (min-width: 769px) {
    width: 60px;
    min-height: 100vh;  
    height: auto;
  }

  @media only screen and (min-width: 1200px) {
    height: 1400px;
    min-height: 100vh;
    grid-column: 1;
    grid-row: 1/4;
    width: 60px;
    background: #22A9D4;
    position: fixed;
    top: 0;
    height: 100%;
    bottom: 0;
    z-index: 1;
  }
`
export const NavbarIconOpen = styled.div`
  position: absolute;
  top: 24px;
  left: 314px;
  
  & img{
    width: 30px;
    height: 32px;
  }

  @media only screen and (max-width: 700px) {
    left: 220px;

    & img{
      width: 20px;
    }
  }

  @media only screen and (min-width: 701px) and (max-width: 1600px) {
    left: 220px;

    & img{
      width: 20px;
    }
  }
  
`
export const NavbarIconClosed = styled.div`
  position: absolute;
  top: 143px;
  left: 15px;
  & img{
    width: 30px;
  }

  @media only screen and (min-width: 769px){

  }

  @media only screen and (min-width: 1200px){
    position: absolute;
    top: 143px;
    left: 16px;
    & img{
      width: 30px;
    }
  }
  
`
export const Section = styled.section`
  grid-column: 2/4;
  grid-row: 2/4;
  background-color: #F7F7F8;
  position: relative;
  height: auto;
  padding-left: 30px;
  max-width: 1420px;

  @media only screen and (min-width: 769px){

  }

  @media only screen and (min-width: 1200px){
    grid-column: 2/4;
    grid-row: 2/4;
    background-color: #F7F7F8;
    position: relative;
    padding-left: 25px;
    height: fit-content;
  }

  @media only screen and (min-width: 1500px){
    left: calc(50% - 1420px/2);
  }
`
export const List = styled.ul`
  width: 100%;
  padding: 0px;

  & .active{
    background: red;
  }
`
export const ListItemsNavbar = styled.ul`
  margin: 0px auto;
  padding: 0px;
  display: flex;
  justify-content: end;
  align-items: center;
  column-gap: 10px;

  & > li:nth-of-type(1){
      background: #22A9D4;
  }

  & > li:nth-of-type(2){
      background: #F36F23;
  }


  & > li:nth-of-type(3){
      background: #858585;
  }

  & p, a {
    margin: auto;
    color: white;
  }

  @media (max-width: 769px) {
  }

  @media only screen and (min-width: 1200px){ 
    width: 48%;
    margin-left: auto;
    margin-right: 147px;

    & li{
      border-radius: 10px;
      height: 40px;
      width: 110px;
    }

    & > li:nth-of-type(1){
        background: #22A9D4;
    }

    & > li:nth-of-type(2){
        background: #F36F23;
    }


    & > li:nth-of-type(3){
        background: #858585;
    }

    & p, a {
      margin: auto;
      color: white;
    }
  }

`
export const Item = styled.li`
  display: flex;
  height: 80px;
  cursor: pointer;

  &.activePage{
    background: none rgba(255, 255 ,255, 0.2);
  }

  &:hover img{
    transition: all 0.3s ease;
    width: 30px;
  }

  @media (min-width: 769px) {
  }

  @media only screen and (min-width: 1200px) {   
    height: 70px;
  }
`
export const ItemNav = styled.li`
  display: block;
  cursor: pointer;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 10px;
  height: 30px;
  width: 90px;
  margin: 0px auto 20px auto;

  &.activePage{
    background: none rgb(68,210,255);
  }

  @media only screen and (min-width: 769px) {
    
  }

  @media only screen and (min-width: 1200px) { 
    display: flex;
    margin: auto 0px auto auto;
    height: 80px;
    cursor: pointer;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 10px;
    height: 40px;
    width: 110px;

    &.active{
      background: none rgb(68,210,255);
    } 
  }
`
export const ContainerItems = styled.a`
  display: flex;
  margin: auto auto auto 40px;
  align-items: center;
`
export const ImageMenu = styled.img`
  width: 25px;
`
export const NavMenu = styled.nav`
  width: 85%;
  margin: 0px auto;
`
export const ItemsText = styled.p`
  color: white;
  margin-left: 20px;
  font: normal normal 600 12px ${config.primaryLetter};

  @media (max-width: 769px) {
  }

  @media only screen and (min-width: 1200px) {
    color: white;
    margin-left: 20px;
    
    font: normal normal 600 15px ${config.primaryLetter};  
  }
`
export const ItemsTextNavbar = styled.p`
  color: #C6C6C6;
  margin-left: 20px;
  font: normal normal normal 12px/32px ${config.primaryLetter};

  @media (max-width: 769px) {
  }

  @media only screen and (min-width: 1200px) {   
    font: normal normal normal 20px/32px ${config.primaryLetter};
  }
`
export const ContainerContent = styled.div`
  background-color: rgb(255,255,255);
  width: 99%;
  height: 98%;
  border-radius: 17px;
  margin: 10px auto;
  position: relative;
  padding-top: 15px;
  box-shadow: 5px 5px 8px #00000029;

`
export const Screen = styled.div`
  width: 80%;
  margin: auto;
`
export const ImageFloat = styled.img`
  width: 80%;
  padding: 10px;
  margin: 20px auto;
  display: block;
  border-bottom: 1px white solid;

  @media (min-width: 769px) {

  }

  @media only screen and (min-width: 1200px) {   

  }
  
`
export const Image = styled.img`
  width: 200px;
  height: 99px;
  max-width: 350px;
  margin: 0px auto;

  @media only screen and (min-width: 769px)  {
    width: 250px;
  }

  @media only screen and (min-width: 1200px)  { 
    width: 200px;
    height: 99px;
    max-width: 350px;
    margin: auto 50px;
  }
  
`

export const TextWarning = styled.p`
  margin: 20px;
  text-align: center;
  color: red;
`