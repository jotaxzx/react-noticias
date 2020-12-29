import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Formulario from './components/Formulario';
import Header from './components/Header';
import ListadoNoticias from './components/ListadoNoticias';
import style from './style.css';

function App() {

const [noticia, guardarNoticia] = useState('');
const [consulta, guardarConsulta] = useState([]);

//cuando cambie la categoria de noticia se ejecutara la api

  useEffect(() => {
    const consultaNoticia = async () => {

      if(noticia === '') return;

      const api = '423d456f037841fdbe9a2f74b6d4c74c';

      const url = `http://newsapi.org/v2/top-headlines?country=ar&category=${noticia}&apiKey=${api}`;

      const resultado = await axios.get(url);

      guardarConsulta(resultado.data.articles);
      


    }
    consultaNoticia();

  }, [noticia]);

  return (
    
    <>
      

      <Header
      titulo='Buscador de Noticias'
      />
      <div className="container col-md-3">
      <Formulario
      guardarNoticia={guardarNoticia}/>

      

      </div>

      <div className="container-fluid bg-info ">
      <ListadoNoticias
      consulta={consulta}
      />
      </div>
      

      


      
    </>
  );
}

export default App;
