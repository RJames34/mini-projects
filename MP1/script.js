
function checkNeg(ans){

    if(ans< 0){
        document.getElementById("output").style.color="red";
    }else{
        document.getElementById("output").style.color="black";
    }
}

function addition() {
    let n1=  Number(document.getElementById("first-number").value);
    let n2 =  Number(document.getElementById("second-number").value);
    let res = n1 + n2;
    checkNeg(res);
    document.getElementById("output").innerHTML = String(res);
}

function subtraction() {
    let n1=  Number(document.getElementById("first-number").value);
    let n2 =  Number(document.getElementById("second-number").value);
    let res = n1 - n2;
    checkNeg(res);
    document.getElementById("output").innerHTML = String(res);
}

function division() {
    let n1=  Number(document.getElementById("first-number").value);
    let n2 =  Number(document.getElementById("second-number").value);
    let res = n1 / n2;
    checkNeg(res);
    document.getElementById("output").innerHTML = String(res);
}

function multiplication() {
    let n1=  Number(document.getElementById("first-number").value);
    let n2 =  Number(document.getElementById("second-number").value);
    let res = n1 * n2;
    checkNeg(res);
    document.getElementById("output").innerHTML = String(res);
}

function power() {
    let n1=  Number(document.getElementById("first-number").value);
    let n2 =  Number(document.getElementById("second-number").value);
    let res = n1;
    for (let i = 1; i <n2; i++) {
        res *= n1;
    }
    checkNeg(res);
    document.getElementById("output").innerHTML = String(res);
}

function clearContent() {
    document.getElementById("first-number").value=" ";
    document.getElementById("second-number").value=" ";
    document.getElementById("output").innerHTML=" ";
}