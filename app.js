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
while(randomIndex1 === randomIndex2 || randomIndex1 === randomIndex3){
    randomIndex1 = Math.random() * arrayOfProducts.length
    randomIndex1 = Math.floor(randomIndex1)
    randomIndex2 = Math.random() * arrayOfProducts.length
    randomIndex2 = Math.floor(randomIndex2)
}
while(randomIndex3 === randomIndex1 || randomIndex3 === randomIndex2){
    randomIndex3 = Math.random() * arrayOfProducts.length
    randomIndex3 = Math.floor(randomIndex3)
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

const ctx = document.getElementById("myChart");
new Chart(ctx,{
    type: "bar",
    data: {
        labels: [products[0].productName, products[1].productName, products[2].productName, products[3].productName, products[4].productName, products[5].productName, products[6].productName, products[7].productName, products[8].productName, products[9].productName,  products[10].productName, products[11].productName, products[12].productName, products[13].productName, products[14].productName, products[15].productName, products[16].productName, products[16].productName, products[17].productName, products[18].productName, ],
        datasets: [{
            label: "# of Times Show",
            data: [products[0].timesShown, products[1].timesShown, products[2].timesShown, products[3].timesShown, products[4].timesShown, products[5].timesShown, products[6].timesShown, products[7].timesShown, products[8].timesShown, products[9].timesShown, products[10].timesShown, products[11].timesShown, products[12].timesShown, products[13].timesShown, products[14].timesShown, products[15].timesShown, products[16].timesShown, products[17].timesShown, products[18].timesShown,]
        }, {
            label: "# of votes",
            data:[products[0].timesclicked, products[1].timesclicked, products[2].timesclicked, products[3].timesclicked, products[4].timesclicked, products[5].timesclicked, products[6].timesclicked, products[7].timesclicked, products[8].timesclicked, products[9].timesclicked, products[10].timesclicked, products[11].timesclicked, products[12].timesclicked, products[13].timesclicked, products[14].timesclicked, products[15].timesclicked, products[16].timesclicked, products[17].timesclicked, products[18].timesclicked ],

        }]
    },
    options: {
        indexAxis:"y",
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
const myJSON = JSON.stringify(products);
window.localStorage.setItem("products",myJSON)
}

  

console.log(Showresults)
// displayimage() // calling a funtion so the images can show up before clicking

console.log(products)
