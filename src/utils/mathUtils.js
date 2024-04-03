
function isNumeric(num){
    num = "" + num; //coerce num to be a string
    return !isNaN(num) && !isNaN(parseFloat(num));
}

function isInteger(num){
    num = "" + num //coerce num to be a string
    return isNumeric(num) && (num === String(Math.round(Number(num))));
}

function isFractional(frac){
    frac = "" + frac //coerce frac to be a string
    const splitted = frac.split('/');
    if (splitted.length >= 3 || splitted.length < 1) return false;
    else if (splitted.length == 1) return isInteger(frac);
    else if (splitted.length == 2) {
        return isInteger(splitted[0]) && isInteger(splitted[1]);
    }
}

export { isNumeric, isInteger, isFractional };