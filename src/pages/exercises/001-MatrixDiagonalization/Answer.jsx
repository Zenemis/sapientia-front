import React from 'react';
import { Radio, RadioGroup, FormControlLabel } from '@mui/material';
import EditableMath from '../../../components/EditableMath';
import { UNSAFE_DataRouterContext } from 'react-router-dom';
import { MathJax } from 'better-react-mathjax';

function Answer({ state, handleAnswer }) {
    let render;
    switch (state.id) {
        case 2:
            render = <div></div>;
            break;
        case 1:
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
        case 0 :
            const renderFunc = (text) => {
                if (text == null || text == undefined) return <MathJax>{`!!!`}</MathJax>;
                if (text == "") return <MathJax>{`!!!`}</MathJax>;
                return <MathJax>{text}</MathJax>
            };
            render = <EditableMath defaultText={""} renderFunc={renderFunc}/>;
            break;
        default:
            render = <div></div>;
    }

    return render;
}

export default Answer;
