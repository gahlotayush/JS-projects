var po = document.querySelector("#container")
var  love = document.querySelector("#pop")

po.addEventListener("dblclick",function(){
    // love.style.color= "red"
    love.style.opacity= "0.6"
    love.style.transform= "translate(-50%,-50%) scale(1.5)";
    setTimeout(() => {
        love.style.opacity= "0"
    }, 1100);
    setTimeout(() => {
        love.style.transform= "translate(-50%,-50%) scale(0)";
    }, 1000);
})