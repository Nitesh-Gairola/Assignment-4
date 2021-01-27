function add(){
    var num1, num2, addition;

    num1= Number(document.getElementById("first").value);
    num2= Number(document.getElementById("second").value);

    addition= num1+num2;

    document.getElementById("answer").value= addition;
}