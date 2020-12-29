import React from 'react';

const Noticia = ({noticia}) => {
    // extraer datos
    const {urlToImage, url, title, description} = noticia;

    return ( 
   
    
    <div className="col-lg-6">
      <div class="card mb-3 mt-2" style={{width: '680px'}}>
    <img src={urlToImage} class="card-img-top" alt={title} style={{height: '480px'}}/>
    <div class="card-body">
      <h5 class="card-title">{title}</h5>
      <p class="card-text">{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer" className="btn text-white bg-info">Ver noticia completa</a>
    </div>
  </div>
  </div>
    
    
    
    );
}
 
export default Noticia;