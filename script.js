function validateEmail(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email)
}
function displayValidationResult(){
    const emailInput = document.getElementById("inputEmail")
    const error = document.getElementById("error")
    const email = emailInput.value
    const isValidEmail = validateEmail(email)
    if(isValidEmail){
        window.location.href = "success.html"
    }else{
        error.textContent = "valid Email Required"
        emailInput.style.border = '1px solid hsl(4, 100%, 67%)';
        emailInput.style.color = 'hsl(4, 100%, 67%)';
        emailInput.style.backgroundColor = '#FF6A3A22'
    }

}