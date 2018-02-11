function init() {
    var sideA, sideB, sideC;
    
    sideA = parseFloat(prompt("Enter length of first side"));
    sideB = parseFloat(prompt("Enter length of second side"));
    sideC = parseFloat(prompt("Enter length of third side"));

    if (isCorrectInputValue(sideA) && isCorrectInputValue(sideB) && isCorrectInputValue(sideC)) {
        trianglesType(sideA, sideB, sideC);
    } else {
        console.log("Incorrect Data");
    }
}

function isCorrectInputValue(inputValue) {
    return !isNaN(inputValue && isFinite(inputValue)) && Math.sign(inputValue) == 1;
}

function trianglesType(valA, valB, valC) {
    if (Math.pow(valA, 2) == Math.pow(valB, 2) + Math.pow(valC, 2) ||
        Math.pow(valB, 2) == Math.pow(valA, 2) + Math.pow(valC, 2) ||
        Math.pow(valC, 2) == Math.pow(valB, 2) + Math.pow(valA, 2)) {

        console.log("Type of triangle is right triangle and square is", calcSquare(valA, valB, valC));

    } else if (valA == valB && valB == valC && valC == valA) {
        console.log("Type of triangle is equilateral triangle and square is", calcSquare(valA, valB, valC));
    } else if (valA == valB || valB == valC || valC == valA) {
        console.log("Type of triangle is isosceles triangle and square is", calcSquare(valA, valB, valC));
    } else if (valA != valB && valB != valC && valC != valA) {
        console.log("Type of triangle is scalene triangle and square is", calcSquare(valA, valB, valC));
    }
}

function calcSquare(lengthSideA, lengthSideB, lengthSideC) {
    var halfPerimeter, square;

    halfPerimeter = (lengthSideA + lengthSideB + lengthSideC) / 2;
    square = Math.sqrt(halfPerimeter * (halfPerimeter - lengthSideA) * (halfPerimeter - lengthSideB) * (halfPerimeter - lengthSideC));

    return square.toFixed(2);
}


window.onload = init();