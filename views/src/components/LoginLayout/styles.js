import styled from 'styled-components'
import * as config from '../../context/general'

// styles
export const Container = styled.div`

    background: transparent url('https://revstarconsulting.com/hubfs/raw_assets/public/RevStarHome/images/home-page-images/home-hero.png') 0% 0% padding-box;
    background-size: cover;

    @media only screen and (min-width: 1400px) {
        
    }


`
export const NavBar = styled.nav`
    background: rgba(243, 111, 35, 1);
    display:flex;
    flex-direction: column;
    align-items: center;
    height: 104px;

    @media only screen and (min-width: 769px) {

    }

    @media only screen and (min-width: 1200px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0 110px 0px 60px;
        height: 60px;
    }


`
export const ContainerNavbarItems = styled.ul`
   
    display: flex;
    margin-top: 12px;

    & li{
        margin: auto 3px;
        letter-spacing: 0px;
        color: #FFFFFF;
        list-style-type: none;
        font: normal normal 400 12px ${config.primaryLetter};
    }

    @media only screen and (min-width: 769px) {
        & li{
            margin: auto 10px;
            font: normal normal 400 18px ${config.primaryLetter};
        }
    }

    @media only screen and (min-width: 1200px) {
        margin-top: 0px;

        & li{
            margin: auto 3px;
            letter-spacing: 0px;
            color: #FFFFFF;
            list-style-type: none;
            font: normal normal 400 13px ${config.primaryLetter};
        }
    }
            
    
    
`
export const ItemNavBar = styled.div`
    display: flex;
    margin: 3px;
    align-items: center;

    @media only screen and (min-width: 769px) {

    }

    @media only screen and (min-width: 1200px) {
        margin: 10px;  
    }
`
export const Image = styled.img`
    width: 15px;
    height: 15px;
    max-width: 50px;
`
export const ImageCompany = styled.img`
    width: 272px;
    height: 49px;
    margin-right: 20px;

    @media only screen and (min-width: 769px) {

    }

    @media only screen and (min-width: 1200px) {
        width: 180px;
        height: 35px;   
    }
   
`
export const ContainerForm = styled.div`
    display: block;


    @media only screen and (min-width: 769px) {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        margin: auto 20px;
    }
  
`
export const Form = styled.form`
    position: relative;
    padding: 50px 0px 20px 0px;
    box-sizing: border-box;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border-radius: 30px;
    min-width:375px;
    max-width: 400px;
    box-shadow: 5px 4px 35px #00000066;
    margin: 120px auto 20px;

    @media only screen and (min-width: 769px) {
        margin: 167px 20px 72px 10px;
        min-height: 600px;
        max-height: 600px;
    }
   
`
export const ContainerFloat = styled.figure`
    position: absolute;
    background-color: #22A9D4;
    border-radius: 30px;
    height: 75px;
    max-width: 220px;
    min-width: 180px;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    top: -50px;
    text-align: center;

    @media only screen and (min-width: 769px) {
        
    }
    @media only screen and (min-width: 1200px) {
        border-radius: 25px;
        height: 70px;
        max-width: 220px;
        min-width: 180px;
    }

    @media only screen and (min-width: 1200px) {
        border-radius: 25px;
        height: 70px;
        max-width: 220px;
        min-width: 180px;
    }

`

export const ImageFloat = styled.img`
    width: 133px;
    height: 35px;
    margin: auto;
    display: block;
    position: relative;
    top: calc((118px / 2) - (78px / 2) );

    @media only screen and (min-width: 769px) {
        
    }
    @media only screen and (min-width: 1200px) {
        width: 133px;
        height: 35px;
        margin: auto;
        display: block;
        position: relative;
        top: calc((70px / 2) - (43px / 2) );
    }
`

export const ContainerImageIcons = styled.div`
    margin: auto;
    width: fit-content;
    display: flex;
`
export const ImageIcon = styled.img`
    margin: 5px 20px;
    width: 10px;
    height: 13px;
`

export const Anchor = styled.a`
    width: fit-content;
    display: block;
    cursor: pointer;
    margin: 5px;
`
export const Footer = styled.footer`
    background: black;
    position: relative;
    bottom: 0px;
    width: 100%;
   
`
export const ContainerItemsFooter = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
  
    & li{
        margin: auto 2px;
        font: normal normal bold 14px/27px ${config.primaryLetter};
        letter-spacing: 0px;
        color: #FFFFFF;
        list-style-type: none; 
    }

    & a:nth-of-type(1) img{
        width: 12px;
        height: 25px;
    }

    & a:nth-of-type(2) img{
        width: 27px;
        height: 22px;
    }

    & a:nth-of-type(3) img{
        width: 31px;
        height: 22px;
    }

    & a:nth-of-type(4) img{
        width: 21px;
        height: 22px;
    }

    & a:nth-of-type(5) img{
        width: 22px;
        height: 22px;
    }
    @media only screen and (min-width: 1200px) {
        display: grid;
        grid-template-columns: 0.4fr 0.3fr 0.4fr 0.3fr 1fr;
        padding-left: 30px;

        & li{
            font: normal normal bold 13px/27px ${config.primaryLetter};
        }

        & a:nth-of-type(1) img{
            width: 4%;
        }

        & a:nth-of-type(2) img{
            width: 7%;
        }

        & a:nth-of-type(3) img{
            width: 7%;
        }

        & a:nth-of-type(4) img{
            width: 7%;
        }

        & a:nth-of-type(5) img{
            width: 7%;
        }
    }

`
export const ItemFooter = styled.div`
    display: flex;
    margin: 10px;
    align-items: center;
`
export const ContainerSocialMedia = styled.div`
    align-self: center;

    @media only screen and (min-width: 1200px) {
        margin: 20px auto;
        grid-column: 1/6;
    }
`
export const SocialMedia = styled.a`
    margin: auto 15px;
`
export const ImageSocialMedia = styled.img`

    @media only screen and (min-width: 1200px) {  
        width: 20px;
        height: 20px;
    }
`
export const ContainerCard = styled.div`

    background: rgba(74, 74, 74, 0.62);
    border-radius: 33px;
    color: white;
    height: 287px;
    height: fit-content;
    text-align: center;
    padding: 1px 12px 30px;
    margin:40px 20px;
    position: relative;

    & h1{
        text-align: center;
        font: normal normal bold 30px Trebuchet MS;
        letter-spacing: 0px;
        color: #FFFFFF;
        margin: 0px;
        margin-top: 17px;
    }

    & h3{
        font: normal normal normal 18px ${config.primaryLetter};
        letter-spacing: 0px;
        color: #FFFFFF;
        margin: 0px;
        margin-top: 9px;
    }

    & h2{
        font: normal normal bold 20px/25px ${config.primaryLetter};
        letter-spacing: 0px;
        color: #FFFFFF;
        margin: 0px;
        margin-top: 9px;
    }

    & button{
        position: absolute;
        margin: 10px 10px;
        background: #F36F23 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 6px #00000029;
        border-radius: 33px;
        border: none;
        width: 180px;
        height: 45px;
        font: normal normal bold 24px/40px ${config.primaryLetter};
        letter-spacing: 0px;
        color: #FFFFFF;
        text-transform: uppercase;
        padding: 0px 22px 0px 23px;
        left: calc(50% - 100px);
        bottom:-38px;

    }
    @media only screen and (min-width: 769px){ 
        width: 400px;
        padding: 30px;
        margin: auto 20px;

        & h1{
            font: normal normal bold 30px Trebuchet MS;
        }

        & h3{
            font: normal normal normal 22px ${config.primaryLetter};
            margin-top: 0px;
        }

        & h2{
            font: normal normal bold 20px/50px ${config.primaryLetter};
            margin-bottom: 36px;
        }

        & button{
            position: absolute;
            margin: 10px 10px;
            background: #F36F23 0% 0% no-repeat padding-box;
            box-shadow: 0px 3px 6px #00000029;
            border-radius: 33px;
            border: none;
            width: 180px;
            height: 45px;
            font: normal normal bold 20px/40px ${config.primaryLetter};
            letter-spacing: 0px;
            color: #FFFFFF;
            text-transform: uppercase;
            padding: 0px 22px 0px 23px;
            left: calc(50% - 100px);
            bottom:-38px;

        }
       

    @media only screen and (min-width: 1200px){
        width: 600px;
        padding: 30px;

        & button{
            width: 120px;
            height: 35px;
            font: normal normal bold 17px/20px ${config.primaryLetter};
            left: calc(104% - 100px);
            bottom: 18px;
            margin: 0px;
            padding: 0px;
        }

        & h1{
            font: normal normal bold 35px Trebuchet MS, sans-serif;
        }

        & h3{
            font: normal normal normal 22px ${config.primaryLetter};
        }

        & h2{
            font: normal normal bold 20px/50px ${config.primaryLetter};
            margin-bottom: 12px;
        }
    }
    
}
`
