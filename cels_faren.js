
// No: 1 cels to faren 
// No: 2 faren to cels
// No: 3 grade sheet
// No: 4 interest shee


//No: 1 Cels to Fahrenheit 

function celsToFahrenheit(cels) {
    const fahrenheit = (cels * (9 / 5) + 32);
    return fahrenheit;
}
const fahrenheitTotal = 3;
const fahrenheitResult = celsToFahrenheit(fahrenheitTotal);
console.log(fahrenheitResult);


//No: 2 Fahrenheit To Cells 

function fahrenheitToCels(fahrenheit) {
    const celcius = (fahrenheit - 32) * 5 / 9;
    const intCelcius = parseFloat(celcius);
    return intCelcius;
}
const celciusTotal = 3;
const celciusResult = fahrenheitToCels(celciusTotal);
console.log(celciusResult);


//No: 3 Result Find Grade Sheet 

function gradeSheet(numbers) {
    if (typeof numbers == 'number') {
        if (numbers > 100 || numbers < 0) {
            return "Give a number value 1 - 100";
        }
        else if (numbers <= 100 && numbers >= 80) {
            return "A+";
        }
        else if (numbers <= 79 && numbers >= 70) {
            return "A";
        }
        else if (numbers <= 69 && numbers >= 60) {
            return "A-";
        }
        else if (numbers <= 59 && numbers >= 50) {
            return "B";
        }
        else if (numbers <= 49 && numbers >= 44) {
            return "C";
        }
        else if (numbers <= 43 && numbers >= 39) {
            return "D";
        }
        else if (numbers <= 38 && numbers >= 33) {
            return "E";
        } else {
            return "Failed"
        }
    } else {
        return "Give a Number Value ! Don't Give Another Value";
    }
}

const yourNumbers = 85;
const result = gradeSheet(yourNumbers);
console.log(result);


//No: 4 Interest find 

function interestFind(totalMoney, totalYear, interestRate) {
    const interest = totalMoney * totalYear * (interestRate / 100);
    return interest;
}

const money = 5000;
const year = 1;
const ratePerYearInterest = 1;
const interestFindResult = interestFind(money, year, ratePerYearInterest);
console.log(interestFindResult);
