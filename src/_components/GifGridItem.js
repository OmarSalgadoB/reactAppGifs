import React from 'react';

export const GifGridItem = ( {id , title, url}) => {
   return (
       <>
              <div className="float-left mr-2">
              <figure className="figure">
          <img src={url}  className="figure-img img-fluid rounded" alt={ title}></img>
           <figcaption className="figure-caption text-right">{ title}</figcaption>
           </figure>
              </div>
        </>
   )
}

export default GifGridItem;