let n1 = Number(window.prompt("Digite seu priemiro número:"))


let n2 = Number(window.prompt("Digite seu segundo número:"))

document.write('<p>'+ 'Primeiro número na variável n1:' + " " + n1 + " " + 'e segundo número na vaiável n2:'+ " " + n2 + " " + '</p>')

let step = n1

n1 = n2

n2 = step

document.write("<p>" + 'Agora o primeiro número está na variável n2:'+ "  " + n2 + "  " + 'e o segundo na variável n1:'+ " " + n1 + " " +'</p>')