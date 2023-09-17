function checkEligibility(){
    //getting age from user input
    let age = document.getElementById("age").value;
    //getting membership status from html/user input
    let status = document.getElementById("status");

    if(Number(age) >= 65){
        document.getElementById("output").innerHTML="Congratulations! You are Eligible for discount!";
    }else{
        document.getElementById("output").innerHTML="Not eligible for discount";
    }
}
