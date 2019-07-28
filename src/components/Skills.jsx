import React from 'react';
import styled from 'styled-components';
import H2styled from "../Styled/H2Styled";
import H5Styled from "../Styled/H5Styled";
import { keyframes } from 'styled-components';

const SkillConteiners =  styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grip-gap: 2rem;
    grip-row-gap: 0.5em;
`;

const SkillLine = styled.div`
    height: 8px;
    position: relative;
    border-radius: 50px;
    background: #F8BBD0;

`;

const move = keyframes`
    0% { background-position: 0 0; }
    100% { background-position: 50px 50px; }
`;

const SkillSpan = styled.span`
    display: block;
    height: 100%;
    width: ${props => props.width};
    border-radius: 8px;
    background-color: #C2185B;
    overflow: hidden;
    position: relative;
    box-shadow: inset 0 2px 9px rgba(255,255,255,0.3), inset 0 -2px 6px rgba(0,0,0,0.4);
    &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-image: linear-gradient(-45deg, rgba(255,255,255,0.2) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.2) 75%, transparent 75%, transparent);
        z-index: 1;
        background-size: 50px 50px;
        animation: ${move} 4s linear infinite;
        overflow: hidden;
    }
`;

const Skill = props => (
        <div className="Skill">
          <H2styled name="Skill" />
            <SkillConteiners>

            {props.data.map((skill, index) => (
                <div className="Skill-item" key={`skill-${index}`}>
                    <H5Styled>{skill.name}</H5Styled>
                    <SkillLine>
                       
                        <SkillSpan width={skill.percentage} />
                    </SkillLine>
                </div>
            ))}
            </SkillConteiners>
        </div>
);

export default Skill;