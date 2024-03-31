import { Button } from "@mui/material";
import React, { useState } from "react";
import './ButtonsBoxed.css'

function ButtonsBoxed({ onSubmit, onRefresh }){

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const refreshPage = (inputValue) => {
        onRefresh('&'+inputValue);
    };

    return (
    <div className='invisBox'>
        <div style={{ flex: 1 }}>
            <Button onClick={onSubmit} variant="contained" style={{ backgroundColor: '#537bee', color: 'white' }}>Envoyer la réponse</Button>
        </div>
        <div style={{ flex: 1, marginLeft: '10px', textAlign: "right" }}>
            <span style={{ marginRight: '5px' }}>Graine aléatoire:</span>
            <input 
                type="number"
                value={inputValue}
                onChange={handleInputChange}
                style={{ padding: '8px', marginRight: '5px', width: '80px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
            <Button 
                variant="contained" 
                style={{ backgroundColor: '#7965dc', color: 'white' }}
                onClick={refreshPage}>
                    Refaire l'exercice
            </Button>
        </div>
    </div>
    );
}

export default ButtonsBoxed;
