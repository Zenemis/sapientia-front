import React, { useState } from 'react';

import Header from '../../components/Header';

import HolderBox from '../../components/exo-components/HolderBox';

import { Button } from '@mui/material';

import './ExoTemplate.css';

function ExoTemplate({question, answer, submit}){

    return (
    <div>
        <Header/>
        <HolderBox content={question}/>
        <HolderBox content={answer}/>
        <div className='invisBox'>
            <div style={{ flex: 1 }}>
                {/* Bouton MUI pour la première colonne */}
                <Button variant="contained" color="primary">Envoyer la réponse</Button>
            </div>
            <div style={{ flex: 1, marginLeft: '10px', textAlign: "right" }}>
                {/* Bouton MUI pour la deuxième colonne */}
                <Button variant="contained" color="primary">Refaire l'exercice</Button>
            </div>
        </div>
    </div>
    );
}



export default ExoTemplate;