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

function MathSentence ({ renderFunc }) {

    const StackedEditable = () => {
        return (<div style={{ display: 'flex', flexDirection: 'column' }}>
              <EditableMath renderFunc={renderFunc} handleInput={() => null} style={{ marginBottom: '5px' }} />
              <EditableMath renderFunc={renderFunc} handleInput={() => null} style={{ marginBottom: '5px' }} />
              <EditableMath renderFunc={renderFunc} handleInput={() => null} />
            </div>);
    };

    const Lambda = () => {
        return (<EditableMath renderFunc={renderFunc} handleInput={() => null} />);
    };

    const OneAnswer = () => {
        return (<div style={{ display: 'flex', alignItems: 'center' }}>
            <span>{`$\\lambda_0 =$`}</span> <Lambda/> <span>{`$,\\; \\vec{v_0} = ${openMatrix}$`}</span>
            <StackedEditable/>
            <span>{`$ ${closeMatrix} $`}</span>
        </div>);
    };

    const openMatrix = "\\left( \\begin{matrix} \\\\ \\\\ \\; \\end{matrix} \\right.";
    const closeMatrix = "\\left. \\begin{matrix} \\\\ \\\\ \\; \\end{matrix} \\right)";

    return (
    <div style={{ width: '80%'}}>
        <MathJax>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <OneAnswer/>
            <OneAnswer/>
            <OneAnswer/>
          </div>
        </MathJax>
      </div>
    );
  }  
  

function Answer({ state, handleAnswer }) {
    console.log('new render');

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
                console.log('new render : ', render);
            }
            break;
        default:
            render = <div></div>;
    }

    return render;
}

export default Answer;
