import React, { Component } from 'react'
import styled from 'styled-components'

const Btn = styled.button `
font-weight: bold;
color: #F8F1F1;
text-align: center;
font-size: 16px;
display: inline-block;
margin: auto;
width: 100px;
margin: 20px;
background-color: #5EAAA8; 
padding: 4px;
&:hover {
  background-color: #A3D2CA;
}
`

const Filter = props => {
    return <div className="wrapper">
    <div className="header">
      <div className="title">Location</div>
    </div>
    <div className="btn-div">
      <Btn
        className="local"
        onClick={props.localEmployees}  
      >Local</Btn>
      <Btn 
        className="remote"
        onClick={props.remoteEmplyees}
      >Remote</Btn>
    </div>
  </div>
}

export default Filter