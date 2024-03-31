import React from 'react';

import Header from '../../components/Header';

import HolderBox from '../../components/exo-components/HolderBox';

import ButtonsBoxed from '../../components/exo-components/ButtonsBoxed';

function ExoTemplate({question, answer, onSubmit, onRefresh}){

    return (
    <div>
        <Header/>
        <HolderBox content={question}/>
        <HolderBox content={answer}/>
        <ButtonsBoxed onSubmit={onSubmit} onRefresh={onRefresh}/>
    </div>
    );
}



export default ExoTemplate;