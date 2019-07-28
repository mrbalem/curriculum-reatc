import React from 'react';
import H2styled from "../Styled/H2Styled";
import H3styled from "../Styled/H3Styled";
import Pstyled from "../Styled/PStyled";

const Certificates = props => (
        <div className="Certificates">
        <H2styled name="Certificate" />
            <div className="Certificates-containes">

            {props.data.map((cert, index) => (

                <div className="Certificates-item" key={`cert-${index}`}>
                        <H3styled>{cert.name} {cert.date} 
                        <span> {cert.institution}</span>
                        </H3styled>
                        <Pstyled name={cert.description} />
                </div>
            ))}
            </div>
        </div>
);

export default Certificates;