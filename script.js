function checkEligibility(){
    //getting age from user input
    let age = document.getElementById("age").value;
    //getting membership status from html/user input
    let status = document.getElementById("status");

    if (Number(age) >= 65) {
        document.getElementById("output").innerHTML= "Congratulations! You qualify for the Senior discount!";
        document.getElementById("output").style.color = "green";
    } else if(Number(age) >= 18 && status.checked){
        document.getElementById("output").innerHTML= "Congratulations! You are Eligible for discount!";
        document.getElementById("output").style.color = "green";
    } else { 
        document.getElementById("output").innerHTML = "Unfortunately, you are not eligible for a discount!";
        
        document.getElementById("output").style.color = "red";
    }
}
