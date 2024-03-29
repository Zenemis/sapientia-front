import React from 'react';

import Header from '../../components/Header';

import HolderBox from '../../components/exo-components/HolderBox';

import { Button } from '@mui/material';

import './ExoTemplate.css';

function ExoTemplate({question, answer, submit}){

    const refreshPage = () => {
        window.location.search += '&seed=42';
        window.location.reload(false);
    }

    return (
    <div>
        <Header/>
        <HolderBox content={question}/>
        <HolderBox content={answer}/>
        <div className='invisBox'>
            <div style={{ flex: 1 }}>
                <Button variant="contained" style={{ backgroundColor: '#537bee', color: 'white' }}>Envoyer la réponse</Button>
            </div>
            <div style={{ flex: 1, marginLeft: '10px', textAlign: "right" }}>
                <Button 
                    variant="contained" 
                    style={{ backgroundColor: '#7965dc', color: 'white' }}
                    onClick={refreshPage}>
                        Refaire l'exercice
                </Button>
            </div>
        </div>
    </div>
    );
}



export default ExoTemplate;