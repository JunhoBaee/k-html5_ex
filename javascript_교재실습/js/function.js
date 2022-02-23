function max(){
    const input = prompt("숫자를 입력하세요")
    const num = number(input)
    arr = [];
    for( i = 0; i <= num; i++){
        if i <= num{
            return num; 
        }
        else{
            return -1;
        }
    }

}
console.log(`max(배열): ${max([1,2,3,4])}`)
console.log(`max(숫자, ...):${max(1,2,3,4)}`)

// function max(x, ...y){
//     let max_num;
//     let items;
//     if(Array.isArray(x)){
//         max_num=x[0];
//         items =x;
//     }else if(typeof(x)==='number'){
//         max_num = x;
//         items = y;
//     }
//     for(const i of items){
//         if(max_num<i){
//             max_num = i;
//         }
//     }
//     return max_num;
// }
// console.log(`max(배열): ${max([1,2,8,3,4,5,6])}`)
// console.log(`max(숫자, ...): ${max(1,2,15,3,4,5,6,7)}`)


// function sumAll(a, b){
//     result = 0;
//     for(i = a; i <= b; i++){
//         result += i;

//     }
//     return result;
// }
//     console.log(sumAll(1,2))
//     console.log(sumAll(1,3))
//     console.log(sumAll(1,4))
//     console.log(sumAll(10, 50))









// function min(first, ...rests) {
//      // 변수 선언하기
//      let output
//      let items
    
//      // 매개변수의 자료형에 따라 조건 분기하기
//      if (Array.isArray(first)) {
//      output = first[0]
//      items = first
//      } else if (typeof(first) === 'number') {
//      output = first
//      items = rests
//      }
    
//      // 이전 절에서 살펴보았던 최솟값 구하는 공식
//      for (const item of items) {
//      if (output > item) {
//      output = item
//      }
//      }
//      return output
//      }
//      console.log(`min(배열): ${min([52, 273, 32, 103, 275, 24, 57])}`)
//      console.log(`min(숫자, ...): ${min(52, 273, 32, 103, 275, 24, 57)}`)


// 최솟값 구하기
// function min(array){
//     let output = array[0]
//     for(const item of array){
//         //현재 output 보다 더 작은 item이 있다면
//         if(output > item){
//             //output의 값을 item으로 변경
//             output = item
//         }
//     }
//     return output
// }
// const testArray = [243,2,5446,57,54,3,345,2]
// const log(`$`(testArray))

// //윤년
// function isLeapYear(year){

//     const input = prompt('몇 년인지를 입력하시오.')

//     return (year % 4 == 0) || (year % 400 == 0) && (year % 100 !== 0) 
// }

// console.log(isLeapYear(year))

// // 함수 만들기
// function  fun(x){
//     return x * x;
// }

// console.log(fun(3))