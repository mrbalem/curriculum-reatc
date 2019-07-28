import React from 'react';
import H2styled from "../Styled/H2Styled";
import H3styled from "../Styled/H3Styled";
import Pstyled from "../Styled/PStyled";

const Experiencies = props => (
        <div className="Experience">
         <H2styled name="Experience" />
            <div className="Experience-containes">

            {props.data.map((expe, index) => (

                <div className="Experience-item" key={`expe-${index}`}>
                        <H3styled>{expe.company}-{expe.endDate}
                        <span> | {expe.jobTitle}-{expe.startDate} </span> </H3styled>
                        <Pstyled name={expe.jobDescription} />
                       
                </div>

            ))}
            </div>
        </div>
);

export default Experiencies;