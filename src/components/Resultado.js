import React from 'react';
import styled from '@emotion/styled';
import { TransitionGroup, CSSTransition  } from 'react-transition-group';

const Mensaje = styled.p`
    background-color: rgb(127, 224, 237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`;

const ResultadoCotizacion = styled.div`
    text-align: center;
    padding: .5rem;
    border: 1px solid #26C6DA;
    background-color:  rgb(127, 224, 237);
    margin-top: 1rem;
    position: relative;
`;

const TextoCotizacion = styled.p`
    color: #00838F;
    padding: 1rem;
    text-transform: uppercase;
    font-weight:bold;
    margin: 0;
`;


const Resultado = ({cotizacion}) => {

    return (
        (cotizacion === 0) 
            ? <Mensaje>Elige marca, año y tipo de seguro</Mensaje> 
            :  
                (
                    <ResultadoCotizacion>
                        <TransitionGroup
                            component="p"
                            className="resultado"
                        >
                            <CSSTransition
                                classNames="resultado"
                                key={cotizacion}
                                timeout={{ enter: 500, exit: 500}}
                            >
                                <TextoCotizacion>El total es: $ {cotizacion}  </TextoCotizacion>
                            </CSSTransition>
                        </TransitionGroup>
                    </ResultadoCotizacion>
                )
    )
}
 
export default Resultado;