import React from 'react'

function Rating({count, filterrating=()=> {}}) {
    let starshtml = []
    for(let i = 0; i < 5; i++) {
        if(i < count) {
            starshtml.push(<span onClick={()=> filterrating(i+1)} key={i}>★</span>)
        }
        else {
            starshtml.push(<span onClick={()=> filterrating(i+1)} key={i}>☆</span>)
        }
    }
    return (
        <div>{starshtml}</div>
    )
}

export default Rating