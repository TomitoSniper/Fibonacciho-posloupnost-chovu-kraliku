// Funkce pro generování Fibonacciho posloupnosti
function generateFibonacci(n) {
    const divFibonacci = document.getElementById("fibonacci");
    let a = 1, b = 1, temp;
    let i = 0;
    while (i <= n) {
        const divRabbit = document.createElement("div");
        let j=0;
        let str="";
        while(j<a){
            str+="🐰";
            j++;
        } 
//console.log(str)
divRabbit.classList.add("rabbit");
divRabbit.innerHTML = str;
divFibonacci.appendChild(divRabbit);
        temp = a + b;
        a = b;
        b = temp;
        i++;
    }
}


// Spuštění generování Fibonacciho posloupnosti s 6 prvky
generateFibonacci(15);