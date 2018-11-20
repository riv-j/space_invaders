let ship // ship variable
let flowers = [] // empty array where flowers will be pushed into
let drops = [] // empty array where water drops will be pushed into
let bits = []

function setup() {
    createCanvas(600, 400)
    ship = new Ship() // ship object is created and stored in the ship variable
    for (let i = 0; i < 6; i++) { // for loop creates 6 instances of the flower object and sets positions
        flowers[i] = new Flower(i*80+80, 60)
    }
    for(let i = 0; i< 1; i++){
        bits[i] = new Bits(40, 40)
        if(flowers[i].explode()){
            bits.push(new Bits(flowers[i].x, flowers[i].y))
        }
    }
}

function draw() {
    background(51)
    ship.show() // displays the ship at the pre assigned location
    ship.move()

    for (let i = 0; i < drops.length; i++) {   // shows and moves amount of drops inside the drops array
        drops[i].show()                        // the array remains empty until the user presses the space bar
        drops[i].move()                        // one drop is made for each time the space bar is pressed
        for(let j = 0; j < flowers.length; j++) { // nested for loop checks if the drops[i] has 'hit' any of the flowers
            if(drops[i].hits(flowers[j])) {     // if the two intercept the flower will grow and the drop will evaporate
                flowers[j].explode()
                bits[0].show()
                drops[i].evaporate()
            }
        }
    }   

    let edge = false


    for(let i = 0; i < flowers.length; i++) {  // for loop shows each of the flowers inside of the array in the pre determined positions
        flowers[i].show()                     // and moves them with its move function
        flowers[i].move()                  
        if(flowers[i].x > width || flowers[i].x < 0) {   // if the position of the flower goes beyond the width of the canvas
            edge = true            // right will equal true
        }
    } 

    if(edge){                      // when right equals true 
        for(let i = 0; i < flowers.length; i++) {   
            flowers[i].shiftDown()      // the flowers will shift downwards with the shiftDown function
        }
    }

    for(let i = flowers.length-1; i >= 0; i--){
        if(flowers[i].toDelete){
            flowers.splice(i, 1)
        }
    }   

    

    for(let i = drops.length-1; i >= 0; i--) {
        if (drops[i].toDelete){
            drops.splice(i, 1)
        }
    }
}




function keyReleased() {
    if(key !== ' '){
        ship.setDir(0)
    }
}

function keyPressed() {
    if (key === ' ') {
        let drop = new Drop(ship.x, height-55)
        drops.push(drop)
    }
    
    if (keyCode === RIGHT_ARROW) {
        ship.setDir(5)
    } else if (keyCode === LEFT_ARROW) {
        ship.setDir(-5)
    }
}