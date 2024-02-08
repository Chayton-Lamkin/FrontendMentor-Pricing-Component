// const basic = document.getElementById("basic");
const professional = document.getElementById("professional");
const master = document.getElementById("master");

let switchPlan = document.getElementById("switchPlan");

switchPlan.addEventListener('change', function(){
    if(this.checked){
        document.getElementById("basic").innerHTML = "$19.99";
        document.getElementById("professional").innerHTML = "$24.99";
        document.getElementById("master").innerHTML = "$39.99";
    } else {
        document.getElementById("basic").innerHTML = "$199.99";
        document.getElementById("professional").innerHTML = "$249.99";
        document.getElementById("master").innerHTML = "$399.99";
    }
})


