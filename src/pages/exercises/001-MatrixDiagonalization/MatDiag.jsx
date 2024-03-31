import React, { useState } from 'react';
import { useSearchParams } from "react-router-dom";
import StateTree from '../../../utils/stateTree';

import ExoTemplate from '../ExoTemplate';

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

    const [state, setState] = useState(t_root);
    const [searchParams, setSearchParams] = useSearchParams();
    searchParams.get("seed");

    console.log(state);

    const onRefresh = (event) => {
        if (event != undefined && event.target != undefined){
            setSearchParams(event.target.value);
        }
        window.location.reload(false);
    }

    return <ExoTemplate 
                question={"question"} 
                answer={"answer"}
                submit={"submit"}    
                onRefresh={onRefresh}
            />
}



export default MatDiag;