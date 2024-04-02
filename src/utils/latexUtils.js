

function fracToLatex(frac) {
    if (frac[0] == 0) return `0`;
    if (frac[1] == 1) return `${frac[0]}`;
    return `\\frac{${frac[0]}}{${frac[1]}}`;
};

function matrixToLatex(matrix) {
    if (matrix == null || matrix == undefined) return "";
    let latex = "\\begin{pmatrix}";
    matrix.forEach((row, i) => {
      row.forEach((frac, j) => {
        latex += fracToLatex(frac);
        if (j < row.length - 1) {
          latex += "&";
        }
      });
      if (i < matrix.length - 1) {
        latex += "\\\\";
      }
    });
    latex += "\\end{pmatrix}";
    return latex;
};


export {fracToLatex, matrixToLatex}