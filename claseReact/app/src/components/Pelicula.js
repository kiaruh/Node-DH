import React from "react";

function Pelicula(){

    let rating = 5.8;
    let generos = ['Accion', 'Drama']

    return (
        <div>
        <h2 className='titulo' >Titulo de la pelicula</h2>
        <p>Rating: {rating}</p>
        <ul>
            { generos.map(genero => <li>{genero}</li>    ) }
        </ul>
        </div>
    )
}


export default Pelicula;