document.addEventListener('DOMContentLoaded', ()=> {

    const a = document.querySelector('#a')
    const b = document.querySelector('#b')

    a.textContent = '<h1>textContent 속성</h1>'
    b.innerHTML = '<h1>innerHTML 속성</h1>'

})


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
