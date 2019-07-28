import React from 'react';
import styled from 'styled-components';

const StyledH2 = styled.h2`
    font-family: 'Roboto' , sans-serif;
    font-weight: 400;
    letter-spacing: 1.2px;
    margin: .5em 0 0 0;
    color: #C2185B;
`;

const H2styled = ({ name }) => <StyledH2>{name}</StyledH2>;
export default  H2styled;