import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import Info from '../components/Info';
import About from '../components/About';
import Education from '../components/Education';
import Experiencie from '../components/Experiencie';
import Certificate from '../components/Certificate';
import Skills from '../components/Skills';
import useGetdata from '../hooks/useGetData';

const Globalstyle = createGlobalStyle`
    body {
        font-family: 'Lato', sanas-serif;
        margin: 0;
        padding: 0;
        background: #f5f5f5;
    }
`; 

const App = () => {
    const data = useGetdata();
    console.log(data);
    return data.length === 0 ? <h1>Cargando...</h1>:(
        <Main>
            <Globalstyle />
            <Sidebar>
                <About 
                avatar={data.avatar}
                name={data.name}
                profession={data.profession}
                bio={data.bio}
                addres={data.addres}
                social={data.social}
                />
            </Sidebar>
            <Info>
                <Education 
                 data={data.education}
                />    
                <Experiencie
                data={data.experience}
                />
                <Certificate
                data={data.certificate}
                />
                <Skills 
                data={data.skills}
                />
            </Info>
        </Main>
    );
}

export default App;