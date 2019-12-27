function write(){
    this.style.background = 'black'
}
function reset(current){
    
    var list = current.childNodes
    while(current.childElementCount != 0){
        list[0].remove()
    }
    
}
function createSketch(main,size){
    var index;
    for(index = 0; index < size; index++){
        const box = document.createElement('div')
        
        box.addEventListener('mouseenter',write)
    
        box.style.backgroundColor = 'white'
        main.appendChild(box);
    }
}


const grid = document.querySelector('#main')
createSketch(grid,16)
const btn = document.querySelector('#reset')


function resetHelper(){
    var number = prompt("Enter the number of squares per side.")
    
    reset(grid)
    document.documentElement.style.setProperty("--rowNum", number);
    document.documentElement.style.setProperty("--colNum", number);

    createSketch(grid, number*number)
}


btn.addEventListener('click', resetHelper)
