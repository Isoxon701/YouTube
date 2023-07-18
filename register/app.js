const sidebar = document.querySelector(".sidebar")
const main = document.querySelector(".main")
const wrapper = document.querySelector(".wrapper")
const hidden = document.querySelector(".sidebar_hidden")
const block = document.querySelector(".sidebar_block")
const short = document.querySelector(".shorts")




const open_login = document.querySelector(".avatar_login")





let ochish = false
const login_func= () =>{
    if(ochish === false){
        open_login.style.display="block"

        ochish=true
    } else{
        open_login.style.display="none"

        ochish=false

    }
}


let holat = false
const openClose= () => {
    if(holat === false){
        sidebar.style.transform="translateX(0px)"
        wrapper.style.transform="translateX(0px)"
        main.style.transform="translateX(0px)"
        short.style.transform="translateX(120px)"
        main.style.width="81.2%"
        wrapper.style.width="81.4%"
        short.style.width="81.4%"
        hidden.style.display="block"
        block.style.display="none"
        open_login.style.transform="translateX(-130px)"
        holat=true
    }else{
        sidebar.style.transform="translateX(-130px)"
        wrapper.style.transform="translateX(-130px)"
        main.style.transform="translateX(-130px)"
        short.style.transform="translateX(0px)"
        main.style.width="90.8%"
        wrapper.style.width="91%"
        short.style.width="91%"
        hidden.style.display="none"
        block.style.display="block"
        open_login.style.transform="translateX(0px)"


        holat=false 
    }
}