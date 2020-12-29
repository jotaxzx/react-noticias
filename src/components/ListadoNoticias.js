import React from 'react';
import Noticia from './Noticia';

const ListadoNoticias = ({ consulta }) => (
    
    
        <div className="row ml-5 ">
            {consulta.map((noticia) => (
                <Noticia
                 key={noticia.url}
                 noticia={noticia}
                 />
                 ))}
        </div>
    
     );
 
export default ListadoNoticias;