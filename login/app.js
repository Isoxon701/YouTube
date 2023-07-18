const email = document.querySelector(".email input")
const password1 = document.querySelector("#password1 input")
const password2 = document.querySelector("#password2 input")


function getInputs() {


    let box = JSON.parse(localStorage.getItem("users"))

    console.log(box)

    let isUser = box?.find(user => user.email === email.value)
    console.log(isUser)

    if(isUser) {
        alert("user bor")
    } else{
        if(password1.value === password2.value){
            let newuser = {
                email: email.value,
                password: password1.value
            }
            
            if(box === null) {
                let users = []
                users.push(newuser)
                localStorage.setItem("users", JSON.stringify("users"))
                console.log(box)
            }else{
                box.push(newuser)
                console.log(box)
                localStorage.setItem("users", JSON.stringify(box))
            }
    
            location.href = "../login/index.html"
    
        } else {
            alert("noto'g'ri")
        } 
    }

    // console.log(email.value)
    // console.log(password1.value)
    // console.log(password2.value)





    
}