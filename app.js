function product(productName, imageFilepath) {
    this.productName = productName
    this.imageFilepath = imageFilepath
    this.timesShown = 0
    this.timesclicked = 0
}
console.log()

let meatballGum = new product("meatballGum", "./images/bubblegum.jpg")
let bag = new product("bag", "./images/bag.jpg")
let Chair = new product("Chair", "./images/Chair.jpg")
let banana = new product("banana", "./images/banana.jpg")
let bathroom = new product("bathroom", "./images/bathroom.jpg")
let boots = new product("boots", "./images/boots.jpg")
let breakfast = new product("breakfast", "./images/breakfast.jpg")
let cthulhu = new product("cthulhu", "./images/cthulhu.jpg")
let dogduck = new product("dogduck", "./images/dog-duck.jpg")
let dragon = new product("dragon", "./images/dragon.jpg")
let pen = new product("pen", "./images/pen.jpg")
let petsweep = new product("petsweep", "./images/pet-sweep.jpg")
let scissors = new product("scissors", "./images/scissors.jpg")
let shark = new product("shark", "./images/shark.jpg")
let sweep = new product("sweep", "./images/sweep.png")
let tauntaun = new product("tauntaun", "./images/tauntaun.jpg")
let unicorn = new product("unicorn", "./images/unicorn.jpg")
let watercan = new product("watercan", "./images/water-can.jpg")
let wineglass = new product("wineglass", "./images/wine-glass.jpg")
let products = [meatballGum, bag, Chair, pen, shark, unicorn, dragon, scissors, sweep, tauntaun, watercan, dogduck, bathroom, boots, cthulhu, wineglass, banana, petsweep, breakfast,]

function getRandomProducts(arrayOfProducts) {
    let randomProducts = [] //declare empty array
    // console.log(arrayOfProducts)
    let randomIndex1 = Math.random() * arrayOfProducts.length //getting a random number between 0 and 19
    randomIndex1 = Math.floor(randomIndex1) // rounding down the number
    let randomIndex2 = Math.random() * arrayOfProducts.length // getting a random number between 0 and 19
    randomIndex2 = Math.floor(randomIndex2)//rounding down the number
    let randomIndex3 = Math.random() * arrayOfProducts.length//getting a random number between 0 and 19
    randomIndex3 = Math.floor(randomIndex3)//rounding down the number
    // console.log("randomIndex1", randomIndex1)// console logging randomIndex1

    if (randomIndex1 === randomIndex2) {
        randomIndex1 = Math.random() * arrayOfProducts.length
        randomIndex1 = Math.floor(randomIndex1)
    }
    else if (randomIndex2 === randomIndex3) {
        randomIndex3 = Math.random() * arrayOfProducts.length
        randomIndex3 = Math.floor(randomIndex3)
    }
    else if (randomIndex3 === randomIndex1) {
        randomIndex1 = Math.random() * arrayOfProducts.length
        randomIndex1 = Math.floor(randomIndex1)
    }

    let randomProduct1 = arrayOfProducts[randomIndex1]// declaring randomProduct1 to equal a random product
    let randomProduct2 = arrayOfProducts[randomIndex2]// declaring randomProdcut2 to equal a random product
    let randomProduct3 = arrayOfProducts[randomIndex3]// declaring randomProduct3 to equal a random product

    randomProducts.push(randomProduct1)
    randomProducts.push(randomProduct2)
    randomProducts.push(randomProduct3)

    return randomProducts

}
let UserClicks = 0;
let display = document.getElementById("Display")
display.addEventListener("click", ImageEvents)

let img1 = document.getElementById("image1")


function displayimage(){
    let randomProducts = getRandomProducts(products)
    let firstRandomProduct = randomProducts[0]

    let image1HTML = document.getElementById("image1")
    image1HTML.src = firstRandomProduct.imageFilepath
    firstRandomProduct.timesShown = firstRandomProduct.timesShown + 1


    console.log (UserClicks)

    let SecondRandomProduct = randomProducts[1]

    let image2HTML = document.getElementById("image2")
    image2HTML.src = SecondRandomProduct.imageFilepath
    SecondRandomProduct.timesShown = SecondRandomProduct.timesShown + 1

    let thirdrandomproduct = randomProducts[2]

    let image3HTML = document.getElementById("image3")
    image3HTML.src = thirdrandomproduct.imageFilepath
    thirdrandomproduct.timesShown = thirdrandomproduct.timesShown + 1

}


function ImageEvents(event) {
    UserClicks++
    console.log(event)


    // console.log(event.target.nodeName, event.target.getAttribute("src"))
    if (event.target.nodeName === "IMG") {
        let pickedElement = event.target.getAttribute("src")
        console.log(pickedElement)
        // event.target.getAttribute("src")
        for (let index = 0; index < products.length; index++) {
            if (pickedElement === products[index].imageFilepath) {
               products[index].timesclicked = products[index].timesclicked + 1
              console.log(products[index].timesclicked)
            }
        }

    }
    if (UserClicks >= 25) {
        document.getElementById("Display").removeEventListener("click", ImageEvents);
        alert("OUT OF VOTES")
    }
    displayimage()
    
}

function Showresults(){
    // Create an unordered list
    // loop through products
    //foreach product, create a listitem and insert the listitem into the unorderedlist
    let ul = document.createElement("ul");
    for(let index = 0; index < products.length; index++){
        let li = document.createElement("li");
        li.innerHTML = products[index].productName + " got " + products[index].timesclicked + " votes " + " and was shown " + products[index].timesShown + " times."
        ul.append(li);
    }
    document.body.append(ul);
}

console.log(Showresults)
// displayimage() // calling a funtion so the images can show up before clicking

console.log(products)
