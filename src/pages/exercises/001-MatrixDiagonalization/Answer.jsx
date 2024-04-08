import React, { useEffect, useState } from 'react';
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
    const baseState = {
    "lambdas" : [0,0,0],
    "vect" :[
        [[0,0], [0,0], [0,0]], 
        [[0,0], [0,0], [0,0]], 
        [[0,0], [0,0], [0,0]]
    ]};
    const [answer, setAnswer] = useState(baseState);

    const StackedEditable = (index) => {
        const handleInput = (newValue) => {
            setAnswer(prevState => ({
                ...prevState,
                vect: prevState.vect.map((row, i) => {
                    if (i === index) {
                        return newValue; 
                    }
                    return row;
                })
            }));
        };

        return (<div style={{ display: 'flex', flexDirection: 'column' }}>
              <EditableMath renderFunc={renderFunc} handleInput={handleInput} style={{ marginBottom: '5px' }} />
              <EditableMath renderFunc={renderFunc} handleInput={handleInput} style={{ marginBottom: '5px' }} />
              <EditableMath renderFunc={renderFunc} handleInput={handleInput} />
            </div>);
    };

    const Lambda = (index) => {
        const handleInput = () => {

        };
        return (<EditableMath renderFunc={renderFunc} handleInput={() => null} />);
    };

    const OneAnswer = ({i}) => {
        return (<div style={{ display: 'flex', alignItems: 'center' }}>
            <span>{`$\\lambda_${i} =$`}</span> <Lambda index={i}/> <span>{`$,\\; \\vec{v_${i}} = ${openMatrix}$`}</span>
            <StackedEditable index={i}/>
            <span>{`$ ${closeMatrix} $`}</span>
        </div>);
    };

    const openMatrix = "\\left( \\begin{matrix} \\\\ \\\\ \\; \\end{matrix} \\right.";
    const closeMatrix = "\\left. \\begin{matrix} \\\\ \\\\ \\; \\end{matrix} \\right)";

    return (
    <div style={{ width: '80%'}}>
        <MathJax>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <OneAnswer i={0}/>
            <OneAnswer i={1}/>
            <OneAnswer i={2}/>
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
