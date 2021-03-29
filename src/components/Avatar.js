import React from 'react'

const Avatar = props => {
    return props.results.map(result => (
        <img src={result.picture.medium} alt={result.name.first} key={result.login.uuid}/>
    ))
}

export default Avatar