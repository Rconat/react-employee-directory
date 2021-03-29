import React from 'react'
import styled from 'styled-components'

const Div = styled.div `
font-size: 60px;
font-weight: 500;
padding-top: 20px;
padding-bottom: 30px;
background-color: #A3D2CA;
color: #F8F1F1;
`

const Header = () => {
    return <Div>Employee Directory</Div>
}

export default Header