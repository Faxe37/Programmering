//alert('hej Elias')

let currentPage = 1
let menuNumber = 1

let pages //array med alle elementer med class = page
let menuItems //array med alle menupunkterne


function setup(){
    
    pages = selectAll('.page')
    menuItems = selectAll('.menuitem')
    
    //menu items skal reagere ved at skifte side
    
    //nu kan man se at pages er blevet til en liste med alle class = page ting
    //console.log(pages.length)
    for(m of menuItems){
        m.mousePressed(function(e){
            //e.tagret er selve html div'en
            console.log(e.target.id)
            //slice -1 henter det sidste bogstav i en string
            let nr = e.target.id.slice(-1)
            //nu ka vi kalde shiftPage som skifter side
            shiftPage(nr)
            
        })
    }
    
    shiftPage(currentPage) //shift page er funktionen der tager et tal og skifter til en side
}

function shiftPage(num){
    if(num == "ArrowLeft"){
        num = currentPage - 1
    }
    if(num == "ArrowRight"){
        num = currentPage + 1
    }
    if(isNaN(num) || num > pages.length || num == 0){
        return
    }
    select("#page" + currentPage).removeClass ("visible")
    select("#menu" + currentPage).addClass ("active")
    currentPage = num
    select("#page" + currentPage).addClass ("visible")
    select("#menu" + currentPage).removeClass ("active")


}

function keyPressed(){
    console.log(key)
    shiftPage(key)
}