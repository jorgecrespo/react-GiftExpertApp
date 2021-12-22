
import React, { useState} from 'react';
import {GifGridItem} from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {




    const {loading, data : images} = useFetchGifs( category );

    console.log('state: ', images)


    return (
        <>
            <h3> { category }</h3>
            { loading && <p>Cargando...</p>}

            <div className="card-grid">
                        {  images.map(img=>{
                            // return <li key={img.id}> {img.titulo}</li>
                            return <GifGridItem key= {img.id } { ...img }/>
                        })  }
            </ div>
        </>
    )
}
