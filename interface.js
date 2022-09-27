document.addEventListener("DOMContentLoaded",()=>{
    let squares = document.querySelectorAll(".square") //pegando todos os square
    let reiniciar = document.getElementById("botao")
    //adicionar um evento para cada elemento clicado
    squares.forEach((square)=>{
        square.addEventListener("click", handleClick)
    })
    reiniciar.addEventListener("click", restart)

})


function handleClick(event){

    let square = event.target
    let position = square.id

    handleMove(position)

    updateSquare(position)
}

function updateSquare(position){
    let square = document.getElementById(position.toString())
    let symbol = board[position]
    square.innerHTML = `<div class='${symbol}'></div>`
}
function restart(){
    let squares = document.querySelectorAll(".square") 
    squares.forEach((square)=>{
        square.innerHTML = `<div class=''></div>`
    })
    limpaTudo()
}
