const form = document.getElementById("form")
const email = document.getElementById("email")
const btn = document.getElementById("btn")
const error = document.getElementById("error")

form.addEventListener("submit",(e) => {
    e.preventDefault()
    if (isEmail(email.value.trim())) {
        error.classList.add("hidden")
         email.style = " "
    }else{
        error.classList.remove("hidden")
        email.style = "border: solid 1px  hsl(354, 100%, 66%) "
    }
})
function isEmail(email) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
}