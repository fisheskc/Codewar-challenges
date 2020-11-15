function bmi(weight, height) {
var bmiCal=weight/Math.pow(height,2);
if(bmiCal <= 18.5) {
return "Underweight";
} else if (bmiCal <= 25.0) {
return "Normal";
} else if (bmiCal <= 30.0) {
return "Overweight";
} else if (bmiCal > 30) {
return "Obese";
}
}
bmi(80, 1.80);
