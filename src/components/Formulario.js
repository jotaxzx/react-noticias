import React, {useState} from 'react';
import useSelect from '../hooks/useSelect';
import Error from './Error';

const Formulario = ({guardarNoticia}) => {

    const [error, guardarError] = useState(false);

    const opciones = [
        {
            value:'general',
            label:'General'
        },
        {
            value:'business',
            label:'Negocios '
        },
        {
            value:'entretainment',
            label:'Entretenimiento'
        },
        {
            value:'health',
            label:'Salud'
        },
        {
            value:'science',
            label:'Ciencia'
        },
        {
            value:'sports',
            label:'Deportes'
        },
        {
            value:'technology',
            label:'Tecnologia'
        },
    ]

        // utilizar useSelect
        const [ state, SelectNoticias] = useSelect('Elige una Categoria:', '', opciones);

        const handleSubmit = (e) => {
            e.preventDefault();

            if(state === '' ){
                guardarError(true);
            return;
            }
            guardarError(false);
            guardarNoticia(state);
            
        }



    return (  

        
            <div className="row">

                <form className="form-group"
                onSubmit={handleSubmit}> 
                {error ? <Error mensaje="debe seleccionar una categoria"/> : null}
                
                    <h2>Encuentra noticias por categoria</h2>
                    
                 <SelectNoticias /> 

                    <input
                    type="submit"
                    className="btn text-white form-control mt-2 bg-info"
                    />
                </form>

            </div>
        
    );
}
 
export default Formulario;

