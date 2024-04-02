import React from "react";

import { fracToLatex, matrixToLatex } from "../../../utils/latexUtils";

import { MathJax } from "better-react-mathjax";

function Question({state, variables}){
    const seed = variables["seed"];
    const matrix = variables["matrix"];

    var res1;
    switch (state.id){
        case 0:
            res1 = `\\;`;
            break;
        case 1:
            res1 = `\\textcolor{cyan}{mmh}`;
            break;
        case 2:
            res1 = `\\textcolor{red}{mmh}`;
            break;
    }

    const matrixLatex = matrixToLatex(matrix);
    const enonce = `$
    \\begin{matrix}
    \\; \\\\
    \\text{La matrice suivante est-elle diagonalisable ?} \\\\
    ${res1} \\\\
    \\end{matrix}
    
    ${matrixLatex}$`;

    return (
    <div>
        <div style={{ fontSize: "16px" }}>
            <MathJax>
                {"Graine aléatoire : " + seed}
            </MathJax>
        </div>
        <div style={{ fontSize: "28px", padding: "50px" }}>
            <MathJax>
                {enonce}
            </MathJax>
        </div>
    </div>);
}

export default Question;