import React from 'react'
import styled from 'styled-components'

const GridDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr; 
    grid-gap: 20px;
`

const Grid = ({ children }) => {
    return(
        <GridDiv>{children}</GridDiv>
    )
}

export default Grid