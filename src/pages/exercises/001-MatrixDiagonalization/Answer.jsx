import React, { useEffect } from 'react';
import { Radio, RadioGroup, FormControlLabel } from '@mui/material';
import EditableMath from '../../../components/EditableMath';
import { MathJax } from 'better-react-mathjax';
import { isFractional } from '../../../utils/mathUtils';
import { fracToLatex, numOrFracToLatex } from '../../../utils/latexUtils';

function RadioAnswer({handleAnswer}){
    useEffect(() => {
        handleAnswer("Oui");
    }, []);

    return (<RadioGroup
        aria-label="answer"
        name="answer"
        onChange={(event) => handleAnswer(event.target.value)}
        defaultValue="Oui"
        sx={{ paddingLeft: '30px',
                display: 'flex', 
                flexDirection:"row", 
                '& .MuiSvgIcon-root': { fontSize: '28px' }, 
                '& .MuiFormControlLabel-label': { fontSize: '24px' } 
            }}
    >
        <FormControlLabel value="Oui" control={<Radio />} label="Oui" />
        <FormControlLabel value="Non" control={<Radio />} label="Non" />
    </RadioGroup>);
}


function MathSentence ({ renderFunc}) {

    return (
    <MathJax>
        <EditableMath renderFunc={renderFunc} handleInput={() => null} />
    </MathJax>
    );
}


function Answer({ state, handleAnswer }) {

    let render = <div></div>;
    switch (state.id) {
        case 0:
            render = <div></div>;
            break;
        case 1:
            render = <RadioAnswer handleAnswer={handleAnswer}/>;
            break;
        case 2 :
            if ((state.value && state.variants[0] == "oui")){
                const renderFunc = (text) => {
                    if (text == null || text == undefined) return <span>{`$\\textcolor{red}{|!|}$`}</span>;
                    if (text == "") return <span>{`$\\textcolor{blue}{?}$`}</span>;
                    if (isFractional(text)) return <span>{`$\\textcolor{gray}{${numOrFracToLatex(text)}}$`}</span>
                    else return <span>{`$\\textcolor{red}{!!}$`}</span>;
                };
                render = <MathSentence renderFunc={renderFunc} />;
            }
            break;
        default:
            render = <div></div>;
    }

    return render;
}

export default Answer;
