let numbers = [];

let ladosTriangulo = ["A" , "B", "C"];

for(let i = 0; i <= 2; i++){
    numbers.push(Number(window.prompt(`Digite o comprimento do lado ${ladosTriangulo[i]} do triangulo`)))
}


console.log(numbers)

if(numbers[0] === numbers[1] && numbers[1] === numbers[2] && numbers[2] === numbers[0]){
    document.write("<h1> Triângulo Equilátero!</h1>")
}else if(numbers[0] === numbers[1] || numbers[1] === numbers[2] || numbers[2] === numbers[0]){
    document.write("<h1> Triângulo Isósceles!</h1>")
}else{
    document.write("<h1> Triângulo Escaleno!</h1>")
}