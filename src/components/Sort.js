import React from 'react'
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

const Sort = (props) => {
    return <div className="wrapper">
    <div className="header">
      <div className="title">Sort by</div>
    </div>
    <div className="btn-div">
      <Btn 
        className="name"
        onClick={props.employeesByName}
      >Name</Btn>
      <Btn 
        className="age"
        onClick={props.employeesByAge}
      >Age</Btn>
      <Btn 
        className="gender"
        onClick={props.employeesByGender}
      >Gender</Btn>
    </div>
  </div>
}

export default Sort