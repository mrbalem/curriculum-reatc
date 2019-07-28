import React from 'react';
import styled from 'styled-components';

const Styledh3 = styled.h3`
    color: #212121;
    font-weigth: 400;
    margin: .5em 0;
`;

const H3styled = ({ children }) => <Styledh3>{children}</Styledh3>;
export default  H3styled;