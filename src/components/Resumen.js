import React, { Fragment } from 'react';

const Resumen = ({datos}) => {

    // extraer de datos
    const {marca, year, plan} = datos;

    if(marca === '' || year === '' || plan === '' ) return null;

    return ( 
        <Fragment>
            <h2>Resumen de Cotización</h2>
            <ul>
                <li>Marca: </li>
                <li>Plan: </li>
                <li>Año del Auto: </li>
            </ul>
        </Fragment>
     );
}
 
export default Resumen;