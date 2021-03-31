import React from 'react'
import styled from 'styled-components'

const Btn = styled.button `
font-weight: bold;
color: #F8F1F1;
text-align: center;
font-size: 16px;
display: inline-block;
margin: auto;
width: 150px;
margin: 20px;
background-color: #5EAAA8; 
padding: 4px;
&:hover {
  background-color: #A3D2CA;
}
`

const ShowAll = (props) => {
    return <div>
        <Btn 
        className="showAllBtn"
        onClick={props.showAllEmployees}
        >All Employees</Btn>
    </div>
}

export default ShowAll