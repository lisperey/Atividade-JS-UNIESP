var alturaH = [];
var alturaM = [];
var alturaT = [];

for(let i = 0; i <15; i++){
    var a = parseFloat(prompt("Informe sua altura: "));
    var s = prompt("Informe seu sexo(m- masculino e f- feminino): ");

    alturaT.push(a);

    if(s.toLowerCase() == 'm'){

        alturaH.push(a);
    }
    else if(s.toLowerCase() == 'f'){
        alturaM.push(a);
    }
    else{
        while(s.toLowerCase() != 'f' && s.toLowerCase() != 'm'){
            alert("Sexo não é valido");
            s = prompt("Informe seu sexo(m- masculino e f- feminino): "); 
        }
        if(s.toLowerCase() == 'm'){

            alturaH.push(a);
        }
        else if(s.toLowerCase() == 'f'){
            alturaM.push(a);
        }

        
    }
}

let maxA = alturaT.reduce(function (prev, current) { 
	return prev > current ? prev : current;

});

console.log(`Maior altura do grupo: ${maxA}.`);

let minA = alturaT.reduce(function (prev, current) { 
	return prev < current ? prev : current;

});

console.log(`A menor altura do grupo: ${minA}.`);



var somahN = 0;
for(x in alturaH){
    
    somahN += alturaH[x]; 
}

let media = somahN/alturaH.length;
if(alturaH.length == 0){
    console.log("Não tem homens na lista.")

}else{
    console.log(`Média da altura dos homens: ${media.toFixed(2)}.`);

}

if(alturaM.length == 0){
    console.log("Não tem mulheres na lista.")

}
else if(alturaM.length == 1){
    console.log(`Na lista tem ${alturaM.length} mulher.`);
    

}
else{
    console.log(`Na lista tem ${alturaM.length} mulheres.`);

}