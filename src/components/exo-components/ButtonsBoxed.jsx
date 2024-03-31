import { Button } from "@mui/material";

import './ButtonsBoxed.css'

function ButtonsBoxed({onSubmit}){

    const refreshPage = () => {
        window.location.search += '&seed=42';
        window.location.reload(false);
    };

    return (
    <div className='invisBox'>
        <div style={{ flex: 1 }}>
            <Button onClick={onSubmit} variant="contained" style={{ backgroundColor: '#537bee', color: 'white' }}>Envoyer la réponse</Button>
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
    );
}

export default ButtonsBoxed;