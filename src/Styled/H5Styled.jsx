import React from 'react';
import styled from 'styled-components';

const StyledH5 = styled.h5`
    font-family: 'Roboto' , sans-serif;
    font-weight: 400;
    letter-spacing: 1.2px;
    margin: .5em 0 0 0;
    color: #000000; 
`;

const H5Styled = ({ children }) => <StyledH5>{children}</StyledH5>;

export default H5Styled;