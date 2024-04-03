
function fracToLatex(frac) {
  if (frac[0] == 0) return `0`;
  if (frac[1] == 1) return `${frac[0]}`;
  return `\\frac{${frac[0]}}{${frac[1]}}`;
};

function numOrFracToLatex(input){
  const splitted = input.split('/');
  if (splitted.length == 1){
    return input;
  }
  return fracToLatex(splitted);
}

function vectorToLatex(vector) {
  if (vector == null || vector == undefined) return "";
  let latex = "\\begin{pmatrix}";
  vector.forEach((frac, i) => {
      latex += fracToLatex(frac);
      if (i < vector.length - 1) {
          latex += "&";
      }
  });
  latex += "\\end{pmatrix}";
  return latex;
}

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


export {fracToLatex, numOrFracToLatex, vectorToLatex, matrixToLatex}