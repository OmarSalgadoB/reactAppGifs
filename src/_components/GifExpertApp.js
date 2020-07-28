import React, { useState } from 'react';
import AddCategory from './AddCategory'
import GifGrid from  './GifGrid';
const GifExpertApp = () => {

const  [categories, setCategorias] = useState(['marvel'])

    return (
    <>
    <div className='col-12'>
    <h2 className='mt-4 text-center'>GifExpertApp</h2>
    <hr/>
    <AddCategory setCategorias = {setCategorias}/> 
       
           {
               categories.map( categoria => {
                   return <GifGrid key={categoria} category={categoria}/>
               })
           }
       
    </div>
    
    </>
    )
}
export default GifExpertApp;