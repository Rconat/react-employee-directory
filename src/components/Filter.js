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
`

const Filter = ({ filter, setFilter }) => {
    return <div className="dd-wrapper">
    <div className="header">
      <div className="title">Location</div>
    </div>
    <div className="btn-div">
      <Btn className="local">Local</Btn>
      <Btn className="remote">Remote</Btn>
    </div>
  </div>
}

export default Filter