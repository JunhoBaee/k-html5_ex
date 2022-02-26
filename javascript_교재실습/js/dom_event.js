const wrap = document.querySelector("#wrap")
const box = wrap.querySelector("article")

//js 에서 css변경
// wrap.addEventListener("click", () => {
//     box.style.backgroundColor = "'red";
// });



// wrap.classList.contains("on"): on이 있으면 true, 없으면 false
// wrap.addEventListener("click", () => {
//     let isOn = wrap.classList.contains("on")
//     console.log(isOn)
//     if(isOn){
//         wrap.classList.remove("on")
//     }else{
//     wrap.classList.add("on")
//     }
    
// })

wrap.addEventListener("click", () => {
    wrap.classList.toggle("on");
})