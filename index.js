function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
  const heightInMeter = height / 100;
  const BMI = weight / (heightInMeter * heightInMeter);
  alert(BMI);
  if (BMI < 18.5) {
    alert("underweight");
  } else if (BMI >= 18.5 && BMI < 25) {
    alert("Healthy Weight");
  } else if (BMI >= 25 && BMI < 30) {
    alert("Overweight");
  } else if (BMI >= 30) {
    alert("Obesity");
  }
}
