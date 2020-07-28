import React from 'react';
import useFecthGifs from '../_hooks/useFecthGifs'
import GifGridItem from './GifGridItem'

export const GifGrid = ({category}) => {

    const { data:images , loading} = useFecthGifs( category);

        return (
         <>   
        <h3 className="row animate__animated animate__flash">{category}</h3>  
         {loading && <p className="animate__animated animate__flash">Loading </p>}
         <div className="col-12">
                {
                  images.map( image => (
                   <GifGridItem 
                    key={image.id}
                    {...image}
                   />
                  ))
                }
         </div>
         </>
        )
    }

export default GifGrid;