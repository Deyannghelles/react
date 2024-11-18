/* function Botao(props) {
    return <button type="submit">{props.nome}</button>

}

export default Botao */

/* import '/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import EventoAlert from './Contador/EventoAlert'

function App() {

    return (

        <div>
            <EventoAlert />
        </div>

    )

}

export default App */


/* 
import React, { useState } from 'react';

function Botao() {
  const [texto, setTexto] = useState("Clique aqui para mais informações");

  const handleClick = () => {
    setTexto(texto === "Cadastre-se" ? "Em Breve!" : "Cadastre-se");
  };

  return (
    <button onClick={handleClick}>{texto}</button>
  );
}

export default Botao;
 */


import React from 'react';

function Botao() {
  return (
    <button className="botao">
      Clique aqui
    </button>
  );
}

export default Botao;