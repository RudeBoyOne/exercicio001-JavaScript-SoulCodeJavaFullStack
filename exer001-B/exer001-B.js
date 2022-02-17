let numbers = [];

let referencia = ["1°", "2°", "3°"]

window.alert("Vamos descobrir qual número de três é maior?")

for(let i = 0; i <= 2; i++){
    numbers[i] = Number(window.prompt(`Digite seu ${referencia[i]} número:`))
}

if(numbers[0] > numbers[1] && numbers[0] > numbers[2]){
    document.write(`<h1> ${numbers[0]} </h1>`)
}else if(numbers[1] > numbers[0] && numbers[1] > numbers[2]){
    document.write(`<h1> ${numbers[1]} </h1>`)
}else if(numbers[2] > numbers[0] && numbers[2] > numbers[1]){
    document.write(`<h1> ${numbers[2]} </h1>`)
}