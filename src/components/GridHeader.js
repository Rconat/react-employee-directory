import React from 'react'
import styled from 'styled-components'

const ImgDiv = styled.div`
width: 128px;
height: 20px;
`

const Grid = styled.div`
    font-weight: bold;
    width: 90%;
`
const Row = styled.div`
    display: flex;
    padding: 10px;
`
const Col = styled.div`
    flex: ${(props) => props.size};
`
const GridHeader = () => {
    return (
        <Grid>
            <Row>
                <ImgDiv />
                <Col size={2}>Name</Col>
                <Col size={1}>Age</Col>
                <Col size={1}>Gender</Col>
                <Col size={2}>Location</Col>
                <Col size={3}>Email</Col>
                <Col size={3}>Phone</Col>
            </Row>
        </Grid>
    )
}

export default GridHeader