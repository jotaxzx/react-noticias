import React, { useState } from 'react';

const useSelect = (label, stateInicial, opciones) => {

    // estado de mi custom hook.
    const [state, actualizarState] = useState(stateInicial);

    //handleChange
    const handleChange = (e) => {
        actualizarState(e.target.value);
    }

    
    const SelectNoticias = () => (
        <>
        <label>{label}</label>
        <select className="form-control"
        value={state}
        onChange={handleChange}>

        <option value="">-- Seleccione Categoria --</option>
            {opciones.map( categoria => (
                <option key={categoria.value} value={categoria.value}>{categoria.label}</option>
            ))}
        </select>
        </>
    );

        
            return [state, SelectNoticias];
        

    
}
 
export default useSelect;