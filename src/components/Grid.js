import React from 'react'
import styled from 'styled-components'

const GridDiv = styled.div`
    width: 90%;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr; 
    grid-gap: 20px;
    margin-top: 50px;
    margin-bottom: 50px;
`

const Grid = ({ children }) => {
    return(
        <GridDiv>{children}</GridDiv>
    )
}

export default Grid