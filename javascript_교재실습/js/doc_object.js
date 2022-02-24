//click Listener
document.addEventListener("DOMContentLoaded", () => {
    let counter = 0
    const h1 = document.querySelector('h1')

    h1.addEventListener('click', (event) => {
        counter++
        h1.textContent = `클릭 횟수: ${counter}`
    })
})


// document.addEventListener(`DOMContentLoaded`, () => {
//     const rects = document.querySelectorAll(`.rect`)

//     rects.forEach((rect, index) => {
//         const width = (index + 1) *100
//         const src = `http://placekitten.com/${width}/300`
//         rect.setAttribute(`src`, src)
//     })
// })


// document.addEventListener('DOMContentLoaded', ()=> {

//     const a = document.querySelector('#a')
//     const b = document.querySelector('#b')

//     a.textContent = '<h1>textContent 속성</h1>'
//     b.innerHTML = '<h1>innerHTML 속성</h1>'

// })


// document.addEventListener('DOMContentLoaded', () =>{
// // 요소 읽어들임
//     const headers = document.querySelectorAll(`h1`)

// // 텍스트와 스타일 변경
//     headers.forEach((header) => {
//         header.textContent = 'HEADERS'
//         header.style.color = 'white'
//         header.style.backgroundColor = 'green'
//         header.style.padding = '10px'
// })
// })
