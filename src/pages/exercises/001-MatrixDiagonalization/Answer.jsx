import React from 'react';
import { Radio, RadioGroup, FormControlLabel } from '@mui/material';

function Answer({ state, handleAnswer }) {
    let render;
    switch (state.id) {
        case 1:
            render = <div></div>;
            break;
        case 0:
            render = (
                <RadioGroup
                    aria-label="answer"
                    name="answer"
                    value={state.selectedOption}
                    onChange={(event) => handleAnswer(event.target.value)}
                    sx={{ paddingLeft: '30px',
                            display: 'flex', 
                            flexDirection:"row", 
                            '& .MuiSvgIcon-root': { fontSize: '28px' }, 
                            '& .MuiFormControlLabel-label': { fontSize: '24px' } 
                        }}
                >
                    <FormControlLabel value="Oui" control={<Radio />} label="Oui" />
                    <FormControlLabel value="Non" control={<Radio />} label="Non" />
                </RadioGroup>
            );
            break;
        default:
            render = <div></div>;
    }

    return render;
}

export default Answer;
