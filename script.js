const button=document.querySelectorAll('.box')
const body=document.querySelector('body')

button.forEach(function(box){
    box.addEventListener('click', function(color){
        if(color.target.id === 'box1'){
            body.style.backgroundColor = 'rgba(255, 0, 0, 0.467)'
        }
        if(color.target.id === 'box2'){
            body.style.backgroundColor = 'rgba(43, 255, 0, 0.616)'
        }
        if(color.target.id === 'box3'){
            body.style.backgroundColor = 'rgba(43, 0, 255, 0.525)'
        }
        if(color.target.id === 'box4'){
            body.style.backgroundColor = 'rgba(255, 0, 170, 0.521)'
        }
        if(color.target.id === 'box5'){
            body.style.backgroundColor = 'rgba(21, 129, 186, 0.511)'
        }
    })
})