import React from 'react'
import styled from 'styled-components'

const EmployeeGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr; 
    grid-gap: 20px;
`

const Grid = ({ children }) => {
    return(
        <EmployeeGrid>{children}</EmployeeGrid>
    )
}

export default Grid