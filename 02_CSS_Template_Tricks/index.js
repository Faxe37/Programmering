//alert('hej Elias')

let currentPage = 1
let menuNumber = 1

let pages //array med alle elementer med class = page
let menuItems //array med alle menupunkterne
let colors = ["blue","turqoise","purple","grey","cyan","hotpink"]

function setup(){
    select("#page" + currentPage).addClass ("visible")
    select("#menu" + menuNumber).addClass ("active")

    pages = selectAll('.page')
    menuItems = selectAll('.menuitem')
    //nu kan man se at pages er blevet til en liste med alle class = page ting
    //console.log(pages.length)
    for(m of menuItems){
        m.mousePressed(function(e){
            //e.tagret er selve html div'en
            console.log(e.target.id)
            //slice -1 henter det sidste bogstav i en string
            let nr = e.target.id.slice(-1)
            shiftPage(nr)

        })
    }

    //lav en masse div'er vi kommer ind i page 3
    for(c of colors){
        console.log(c)
        let div = createDiv()
        div.style('background-color', c)
        select('#page3').child(div)
    }
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
    currentPage = num
    select("#page" + currentPage).addClass ("visible")

    select("#menu" + menuNumber).removeClass ("active")
    menuNumber = num
    select("#menu" + menuNumber).addClass ("active")
}

function keyPressed(){
    console.log(key)
    shiftPage(key)
}