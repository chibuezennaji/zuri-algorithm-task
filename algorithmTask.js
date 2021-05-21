//1
const  convertFahrToCelsius = (value)=>{

    const result = ((value - 32) * (5/9)).toFixed(4);
    const valFloat = parseFloat(value);

    if (isNaN(valFloat) || Array.isArray(value)){
        return (`${JSON.stringify(value)} is not a valid number but a/an ${Array.isArray(value) ? 'array' : typeof value}.`);
    } else {
        return result;
    }
}

console.log(convertFahrToCelsius({temp: 0}))



//2
const checkYuGiOh = (n) => {

    const nFloat = parseFloat(n);
    
    if (isNaN(nFloat) === true || Array.isArray(n) === true) {
        return ( `invalid parameter: ${JSON.stringify(n)}`);
    }

    var arr = [];

    for (var i=1; i <= n; i++){
        if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) arr.push("yu-gi-oh");
        else if (i % 3 === 0 && i % 5 === 0) arr.push("gi-oh");
        else if(i % 2 === 0 && i % 5 === 0) arr.push("yu-oh");
        else if(i % 2 === 0 && i % 3 === 0) arr.push("yu-gi");
        else if(i % 2 === 0) arr.push("yu");
        else if(i % 3 === 0) arr.push("gi");
        else if(i % 5 === 0) arr.push("oh");
        else arr.push(i);
    }
    return arr;
}

console.log(checkYuGiOh("fizzbuzz is meh"));