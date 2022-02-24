// // 콜백 함수
// function callThreeTimes(callback){
//     for(let i = 0; i < 3; i ++){
//         // callback이라는 매개변수는 함수이므로 호출할 수 있음
//         callback(i)
//     }
// }
// function print(j){
//     console.log(`${j}번째 함수 호출`)
// }
// //함수 호출
// callThreeTimes(print)

// let numbers = [0,1,2,3,4,5,6,7,8,9]

// // 배열의 메소드를 연속적으로 사용 가능
// numbers
// .filter((value) => value % 2 === 0)
// .map((value) => value * value)
// .forEach((value) => {
//     console.log(value)
// })



// let anonymous

// // 익명함수 2번 생성
// anonymous = function(){
//     console.log('1st anonFunction')
// }
// anonymous = function(){
//     console.log('2nd anonFunction')
// }
// anonymous = function(){
//     console.log('3th anonFunction')
// }

// // call anonymous function
// anonymous()


//create anonymous function
함수 = function(){
    console.log('익명 함수입니다.')
}

// 선언적 함수를 생성하고 할당합니다.
function 함수(){
    console.log('선언적 함수입니다.')
}
// call function
함수()