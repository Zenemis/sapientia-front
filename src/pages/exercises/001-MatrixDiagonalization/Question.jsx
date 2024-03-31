import React from "react";

import { MathJax } from "better-react-mathjax";

function Question({state, seed, matrix}){
    const enonce = `La matrice suivante est-elle diagonalisable ?`;

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