import React from 'react'
import styled from 'styled-components'

const Grid = styled.div`
    width: 90%;
`

const Row = styled.div`
    border-style: solid;
    border-color: #F8F1F1
    border-width: 1px;
    display: flex;
    margin: 10px;
`
const Col = styled.div`
    border-left-width: 2px;
    border-left-style: solid;
    border-left-color: #F8F1F1;
    border-right-width: 1px;
    border-right-style: solid;
    border-right-color: #F8F1F1;
    font-weight: normal;
    font-size: 24px;
    flex: ${(props) => props.size};
`

const Employees = props => {
    return(
        props.results.map(result => (
            <Grid key={result.login.uuid}>
                <Row>
                    <img src={result.picture.large} alt={result.name.first} key={result.login.uuid}/>
                    <Col size={2}>{result.name.first} {result.name.last}</Col>
                    <Col size={1}>{result.dob.age}</Col>
                    <Col size={1}>{result.gender}</Col>
                    <Col size={2}>{result.location.country}</Col>
                    <Col size={3}>{result.email} </Col>
                    <Col size={3}>{result.phone}</Col>
                </Row>
            </Grid>
            ))
    )
}

export default Employees