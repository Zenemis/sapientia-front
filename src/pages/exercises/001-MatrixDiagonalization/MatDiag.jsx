import React, { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom";
import StateTree from '../../../utils/stateTree';

import ExoTemplate from '../ExoTemplate';

import Question from './Question';
import Answer from './Answer';

import { APICall } from '../../../utils/server';

function MatDiag(){

    // State 0
    const t_root = new StateTree(0, null, []);

    // States 1
    const t_state1 = t_root.addChild(1, null, []);

    // States 2
    const t_state2 = t_state1.addChild(2, true, ["oui"]);
    t_state1.addChild(2, true, ["non"]);
    t_state1.addChild(2, false, ["oui"]);
    t_state1.addChild(2, false, ["non"]);

    // States 3
    t_state2.addChild(3, true, []);
    t_state2.addChild(3, false, []);

    // State tree
    const [state, setState] = useState(t_root);


    // State variables
    const [searchParams, setSearchParams] = useSearchParams();
    searchParams.get("seed");
    const [variables, setVariables] = useState({"seed" : 0, "matrix" : null});
    const [userInput, setUserInput] = useState(null);
    const [apiRes, setApiRes] = useState(null);

    // One-Shot API Call for exercise setup
    useEffect(() => {
        const fetchData = async () => {
            const response = await APICall("exercises/matrix-diagonalization", {"step" : 0});
      
            setVariables({"seed" : response.seed, "matrix" : response.matrix});
        }
      
        fetchData()
          .catch(console.error);;
      }, [])


    // Modify userInput
    const handleAnswer = (value) => {
        setUserInput(value);
    } 

    // Button calls
    const onSubmit = () => {

    };

    const onRefresh = (event) => {
        if (event != undefined && event.target != undefined){
            setSearchParams(event.target.value);
        }
        window.location.reload(false);
    }

    return <ExoTemplate 
                question={<Question state={state} variables={variables}/>} 
                answer={<Answer state={state} handleAnswer={handleAnswer}/>}
                submit={onSubmit}    
                onRefresh={onRefresh}
            />
}



export default MatDiag;