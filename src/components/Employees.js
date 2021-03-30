import React from 'react'
import styled from 'styled-components'

const Grid = styled.div`
    width: 90%;
`

const Row = styled.div`
    display: flex;
    padding: 10px;
`
const Col = styled.div`
    flex: ${(props) => props.size};
`

const Employees = props => {
    return(
        props.results.map(result => (
            <Grid>
                <Row>
                    <img src={result.picture.large} alt={result.name.first} key={result.login.uuid}/>
                    <Col size={2}>Name: {result.name.first} {result.name.last}</Col>
                    <Col size={1}>Age: {result.dob.age}</Col>
                    <Col size={1}>Gender: {result.gender}</Col>
                    <Col size={2}>Location: {result.location.country}</Col>
                    <Col size={3}>Email: {result.email} </Col>
                    <Col size={3}>Phone: {result.phone}</Col>
                </Row>
            </Grid>
            ))
    )
}

export default Employees