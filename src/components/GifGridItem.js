import React from 'react'

export const GifGridItem = ( {id, titulo, url} ) => {


    return (
        <div className="card animate__animated animate__fadeIn animate__delay-2s">
            <img src={url} alt={titulo} />
            <p>
                { titulo }
            </p>
        </div>
    )
}
