 
 let mainSection = document.getElementById("mainSection")



let all_products=[]

fetch("https://dummyjson.com/products").then((e)=>{ 
    return e.json()
}).then((e)=>{
    // console.log(e)
    all_products = e.products
    // console.log(all_products)
    localStorage.setItem("allproduct",JSON.stringify(all_products)) // store all product info in local storage
    // console.log(all_products)


displayProduct(all_products)

}).catch((e)=>{ console.error(e)})
//promise - then - if promise is resolve(if you get data)
// catch - if promise is not  resolve(if you  get error)


function displayProduct(p){ // p - array
    let input = ""
    p.map((val)=>{ // val - object
    //    console.log(val)
        let imageUrl = val.images[0]
        let price  = val.price
        let title  = val.title
        let category  = val.category
        let rating = val.rating
        input = input + `
        <div class="card col-12 col-md-5 col-lg-3 mb-3">
       <img src=${imageUrl} alt=${title}/>
       <div class="card-body">
       <h5 class="card-title">${title}</h5>
       <h5 class="card-title text-primary">${category}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
     <a href="product.html" class="btn btn-primary" data-mdb-ripple-init  onclick="getId(${val.id})"> view more <i class="fa-solid fa-arrow-right"></i></a>
     </div>
</div>
        `
    })
    // console.log(input)
    mainSection.innerHTML = input
}

//  logic to apply filter
let userInput= document.getElementById("searchInput")
userInput.addEventListener("input",(e)=>{
   let uinput =  e.target.value.toLowerCase();
   console.log(all_products)
//   let result =  all_products.filter((val)=>{
//    return val.category.toLowerCase().includes(uinput) || val.title.toLowerCase().includes(uinput)
//    })
//    console.log(result)
//    displayProduct(result)


})

function getId(id){
    // console.log(id)
    localStorage.setItem("id",id)
}

let arr = [{id:1},{id:2},{id:3}]
let result =  arr.filter((val)=>{
    return val.id == 2
})
console.log(result)
