import React from 'react';
import styled from 'styled-components';
const StyledDetails = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #ECE7E6;
    color: black;
    font-size 20px;
`;
const Details = (props) => {
    const {title,desc,Date,up,inCharge} = props;

    return(
        <StyledDetails>
            <p>Titulo: {title}</p>
            <p>Descripcion:<br/> {desc}</p>
            <p>Fecha: {Date}</p>
            <p>Autor: {up}</p>
            <p>A cargo: {inCharge}</p>
        </StyledDetails>
    )
};
export default Details;