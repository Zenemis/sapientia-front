import React, { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom";
import StateTree from '../../../utils/stateTree';

import ExoTemplate from '../ExoTemplate';

import Question from './Question';

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
    const [searchParams, setSearchParams] = useSearchParams();
    searchParams.get("seed");


    // One-Shot API Call for exercise setup
    useEffect(() => {
        const res = APICall("exercises/matrix-diagonalization", 0);
    }, []);


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
                question={<Question/>} 
                answer={"answer"}
                submit={onSubmit}    
                onRefresh={onRefresh}
            />
}



export default MatDiag;