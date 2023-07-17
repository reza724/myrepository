var powflag=false;
function calculate(x){
        document.getElementById('displayresult').value+=x;
        if (powflag){
            var power_split=document.getElementById('displayresult').value.split('^')
            var power_result=Math.pow(power_split[0],power_split[1])
            document.getElementById('displayresult').value=power_result
            powflag=false
        }
}

function finalize() {
        document.getElementById('displayresult').value = eval(document.getElementById('displayresult').value);
    }
function reset(){
    document.getElementById('displayresult').value = ''
}

function mathcalculator(x){
    var y=document.getElementById('displayresult').value;
    if (x=='log'){
        document.getElementById('displayresult').value = Math[x](y) / Math.log(10);
    }
    else if (x=='pow'){
        document.getElementById('displayresult').value+='^';
        powflag=true
    }
    else {
        document.getElementById('displayresult').value= Math[x](y);
    }

}


