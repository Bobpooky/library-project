import React from 'react'

function BatmanComic({ titre, volume, source, alt }) {
    return (
        <div className='BatmanComic'>
            <h2>Titre: {titre}</h2>
            <h2>Volume: {volume}</h2>
            <img src={source} alt={alt}></img>
        </div>
    )
}

export default BatmanComic;