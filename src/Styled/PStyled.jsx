import React from 'react';
import styled from 'styled-components';

const StyledP = styled.p`
    color: #757575;
    font-weigth: 400;
    margin: .5em, 0 1.2em 0;
`;

const Pstyled = ({ name }) => <StyledP>{name}</StyledP>;
export default  Pstyled;