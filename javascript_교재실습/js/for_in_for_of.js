let result = ''

for(let i = 1; i < 10; i ++){
    for(let j = 10; j > i; j--){
        result += ' '
    }
    for(let k = 0; k <  2* i -1; k++){
        result += '*'
    }
    result += '\n'
}
console.log(result)


// let result = 0
// for (let i = 1; i <= 100; i++){
//     result += i
// }
// console.log(`1~100까지의 합: ${result}`)



//const todos = ['출근', '고객미팅', 'js수강', '탁구']
        
// // 역순으로 출력
// for(let i = todos.length -1; i >= 0; i--){
//     console.log(`${Number(i) + 1}번째 할일: ${todos[i]}`)
// }


// for (const i in todos){
            
//             console.log(`${Number(i)+1}번째 할일: ${todos[i]}`)
//         }