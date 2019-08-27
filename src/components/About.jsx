import React from 'react';
import Social from './Social';
import Styled from 'styled-components';

//estilo para centrar todo el contenido de about
const AboutStyle = Styled.div`
    text-align: center;
`;


//estilo para modificar el avatar
const AboutAvatar = Styled.div`
    padding: 2em 0 0 0;
`;

const AboutImg = Styled.img`
    border-radius: 100%;
    width: 160px;
    height: 160px;
    border: 2px solid #000080;
    margin: 0 auto;
    display: block;
    box-shadow: 0 0 10px rgba(0,0,0,0.6);
`;

const AboutName = Styled.div`
    text-aling: center;
`;

const AboutH2 = Styled.h2`
    font-family: 'Roboto' , sans-serif;
    font-weight: 400;
    letter-spacing: 1.2px;
    margin: .5em 0 0 0;
    color: #000080;
`;

const AboutProfession = Styled.p`
    margin: .2em 0 em 0;
    letter-spacing: 1.6px;
    font-weight: 300;
    color: #000080;
`;

const AboutBio = Styled.p`
    color: #757575;
    font-size: 1em;
    font-weight: 300;
`;

const AboutLocation = Styled.p`
    color: #757575;
    font-size: 1em;
    font-weight: 400;
`;

const AboutContacto = Styled.div`
    text-align: left;
`


const About = ({ avatar, name, profession, bio, address, social }) => (
    <AboutStyle>

        <div className="About-container">
            <AboutAvatar>
                <figure>
                    <AboutImg src={avatar} alt={name} />
                </figure>
            </AboutAvatar>
            <AboutName>
                <AboutH2>{name}</AboutH2>
            </AboutName>
            <div className="About-profession">
                <AboutProfession>{profession}</AboutProfession>
            </div>
            <div className="About-desc">
                <AboutBio>{bio}</AboutBio>
            </div>
            <AboutContacto>
                <AboutH2>Contacto:</AboutH2>
                <span><strong>Direccion: </strong> Lima-peru</span><br />
                <span><strong>Correo: </strong> mylovepre16@gmail.com</span><br />
                <span> <strong>Telefono: </strong>978493230</span>
            <AboutH2>Objetivo:</AboutH2>
            <AboutLocation>convertirme a corto plazo en un desarrollador web de alto nivel y a largo plazo en un experto en Inteligencia artificial y Ciencias de datos.
                    actualemente manejo HTML, CSS y javascript a nivel itermedio.
                </AboutLocation>
            </AboutContacto>

            <div className="About-location">
                <AboutLocation>{address}</AboutLocation>
            </div>
            <div className="About-social">
                <Social social={social} />
            </div>
        </div>
    </AboutStyle>
);

export default About;