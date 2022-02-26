const myName = "홍길동";
console.log("내이름은 myName입니다.");

const myName2 = "홍길길";
console.log('내이름은 ${myName2} 입니다.');

const btnPlus = document.querySelector(".btnPlus");
const btnMinus = document.querySelector(".btnMinus");
let num = 0; // 제어할 숫자 값을 0으로 초기화

//btnPlus를 클릭할 때마다
btnPlus.addEventListener("click", e => {
    e.preventDefault();
    // num값을 1 씩 증가
    num++;
    console.log(num);
});

//btnMinus를 클릭할 때마다
btnMinus.addEventListener("click", e =>{ e.preventDefault();
// num값을 1 씩 감소
num--;
console.log(num);})


const list = document.querySelectorAll(".list li");

for(let el of list){
    el.addEventListener("click", e => {
        e.preventDefault();
        console.log(e.currentTarget.innerText);
    })
}