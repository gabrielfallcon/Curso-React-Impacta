import React from 'react';

export default props => (
    
    <header className="pb-2 mt-4 mb-2 border-bottom my-5">

        <h2 ><strong>{props.titulo}</strong> -

        <small>{props.subtitulo} - {props.data}</small></h2>

    </header>
)

