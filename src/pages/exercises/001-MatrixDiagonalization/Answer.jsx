import React from 'react';
import { Radio, RadioGroup, FormControlLabel } from '@mui/material';
import EditableMath from '../../../components/EditableMath';
import { MathJax } from 'better-react-mathjax';
import { isFractional } from '../../../utils/mathUtils';
import { fracToLatex, numOrFracToLatex } from '../../../utils/latexUtils';

function Answer({ state, handleAnswer }) {

    let render = <div></div>;
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
            if (!(state.value && state.variants[0] == "oui")){
                const renderFunc = (text) => {
                    if (text == null || text == undefined) return <MathJax>{`$\\textcolor{red}{|!|}$`}</MathJax>;
                    if (text == "") return <MathJax>{`$\\textcolor{blue}{?}$`}</MathJax>;
                    if (isFractional(text)) return <MathJax>{`$\\textcolor{gray}{${numOrFracToLatex(text)}}$`}</MathJax>
                    else return <MathJax>{`$\\textcolor{red}{!!}$`}</MathJax>;
                };
                render = <EditableMath defaultText={""} renderFunc={renderFunc}/>;
            }
            break;
        default:
            render = <div></div>;
    }

    return render;
}

export default Answer;
