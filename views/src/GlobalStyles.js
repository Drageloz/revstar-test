import { createGlobalStyle } from 'styled-components'
import 'typeface-roboto'
import 'typeface-yanone-kaffeesatz'
import * as config from './context/general'

export const GlobalStyle = createGlobalStyle`
  *{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }

  body {
    background-color: #F7F7F8;
  }

  #app{
    width: 100%;
    margin: auto;
  }

  a{
    text-decoration: none;
  }

  p{
    margin: 0px;
  }

  .primaryText{
    font: normal normal normal 12px/37px ${config.primaryLetter};
    
    @media only screen and (min-width: 769px) {
    }

    @media only screen and (min-width: 1200px) {
      font: normal normal normal 20px/37px ${config.primaryLetter};
    }
  }

  .graphicsSize{
    width: 100%;
    height: 100vw;

    @media only screen and (min-width: 769px) {
      height: 450px;
    }

    @media only screen and (min-width: 1200px) {
      height: 550px;
    }
  }

  .graphicsSizeDemographic{
    width: 350px;

    @media only screen and (min-width: 769px) {
      width: 400px;
    }

    @media only screen and (min-width: 1200px) {
      width: 500px;
    }
  }

  .activeGreen{
    background-color: #89DD59 !important;
  }

  /* Safari */
  :-webkit-full-screen {
    background-color: white;
    padding: 25px;
  }

  /* IE11 */
  :-ms-fullscreen {
    background-color: white;
    padding: 25px;
  }

  /* Standard syntax */
  :fullscreen {
    background-color: white;
    padding: 25px;
  }


  //Highcharts
  .highcharts-figure,
  .highcharts-data-table table {
      width: 500px;
      margin: 1em auto;
  }

  .highcharts-data-table table {
      font-family: Verdana, sans-serif;
      border-collapse: collapse;
      border: 1px solid #ebebeb;
      margin: 10px auto;
      text-align: center;
      width: 100%;
      max-width: 500px;
  }

  .highcharts-data-table caption {
      padding: 1em 0;
      font-size: 1.2em;
      color: #555;
  }

  .highcharts-data-table th {
      font-weight: 600;
      padding: 0.5em;
  }

  .highcharts-data-table td,
  .highcharts-data-table th,
  .highcharts-data-table caption {
      padding: 0.5em;
  }

  .highcharts-data-table thead tr,
  .highcharts-data-table tr:nth-child(even) {
      background: #f8f8f8;
  }

  .highcharts-data-table tr:hover {
      background: #f1f7ff;
  }

  .highcharts-menu-item {
    font: normal normal normal 25px ${config.primaryLetter}
  }


  //pagination

  .pagination {
    display: flex;
    justify-content: space-between;
    list-style: none;
    cursor: pointer;
    width: 70%;
    margin: auto;
  }

  .pagination a {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #6c7ac9;
    color: #6c7ac9;
  }

  .pagination__link {
    font-weight: bold;
  }

  .pagination__link--active a {
    color: #fff;
    background: #6c7ac9;
  }

  .pagination__link--disabled a {
    color: rgb(198, 197, 202);
    border: 1px solid rgb(198, 197, 202);
  }

  //Component List CheckBox in Dashboard

  .css-b62m3t-container {
    min-width: 150px !important;
  }

`
