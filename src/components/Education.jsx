import React from 'react';
import H2styled from "../Styled/H2Styled";
import H3styled from "../Styled/H3Styled";
import Pstyled from "../Styled/PStyled";

const Education = props => (
    <div className="Education">
    <H2styled name="Education" />
        <div className="Education-container">

    {props.data.map((edu, index) => (

            <div className="Education-item" key={`edu-${index}`}>
            <H3styled>{edu.degree} {edu.institution}
            <span>{edu.starDate}-{edu.endDate}</span>
            </H3styled>
            <Pstyled name={edu.description} />
            </div>
    ))}
            
        </div>
    </div>
);

export default Education;