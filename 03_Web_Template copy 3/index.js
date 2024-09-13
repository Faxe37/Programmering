//alert('hej Elias')

let currentPage = 2
let menuNumber = 2

let pages //array med alle elementer med class = page
let menuItems //array med alle menupunkterne
let images = ["url(./assets/38C5D1FA-1B1B-4924-AC22-4B85EE6FBD56.jpeg)","url(./assets/avatars-HCMqtND4BWnc4lr7-9kMrpA-t500x500.jpg)", "url(./assets/91ba907b.webp)", "url(./assets/Death_grips_2014.jpg)"]


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
    
    /*for(i of images){
        console.log(i)
        let div = createDiv()
        div.style('background-image', i)
        select('#page2#page2images').child(div)
    }*/

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