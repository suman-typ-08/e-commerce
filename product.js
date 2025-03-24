let prodcuDetails = document.getElementById("prodcuDetails");
let review = document.getElementById("review");

let Unique_id = JSON.parse(localStorage.getItem("id"))
let all_product = JSON.parse(localStorage.getItem("allproduct"))
// console.log( Unique_id)
// console.log( all_product)
let singll_product=""
if (all_product.length) {
 singll_product = all_product.find((val) => {
    return val.id === Unique_id
  })
  // console.log(singll_product)

  // display all details
  prodcuDetails.innerHTML = `
    <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src=${singll_product.images[0]} class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${singll_product.title}</h5>
        <p class="card-text">${singll_product.description}</p>
        <p class="card-text">${singll_product.category}</p>
        <p class="card-text">${singll_product.price}</p>
        <p class="card-text">${singll_product.rating}*</p>
        <p class="card-text"> return policy  ${singll_product.returnPolicy}*</p>

       <button class="btn btn-success" id="addcart">add to cart</button>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
    `
document.getElementById("addcart").addEventListener("click",()=>{
  addtocart(singll_product)
})
  // all review///

  let input = ""


  singll_product.reviews.map((e) => {
    console.log(e)
    let { rating, comment, date, reviewerName, reviewerEmail } = e
    console.log(rating)
  

    input += `
      <div class="reviewcnt">
        <div class="left">
    <div class="rating_review">
      <p  style="background-color:${getcolor(rating)};">${rating}<i class="fa-solid fa-star"></i></p>
      <p>${comment}</p>
    </div>
    <div class="name_date">
      <p>${reviewerName}</p>
    <p>${date.slice(0, 10)}</p>
    </div>
  </div>
  <div class="right">
    <i class="fa-solid fa-thumbs-up"></i>
    <span>45</span>
    <i class="fa-solid fa-thumbs-down"></i>
    <span>1</span>
    <i class="fa-solid fa-ellipsis-vertical"></i>
  </div>
      </div>

      <hr/>
      `
    console.log(document.getElementById("rating"))
   
  })
  console.log(input)
  review.innerHTML = input
}

 function addtocart(p){
  console.log(p)
   let cart =   JSON.parse(localStorage.getItem("cartProduct")) ||[]
  let flag =  cart.find((e)=>{
   return e.id === p.id
   })
   console.log(flag)
   if (!flag) {
    cart.push(p)
    localStorage.setItem("cartProduct",JSON.stringify(cart))
    alert("prosuct has been added to cart")
   }
   else{
    alert("product already in cart")
   }
 }



function getcolor(p) {
  if (p > 3) {
    return "green"
  }
  else if (p == 3) {
    return "yellow"
  }
  else {
    return "red"
  }
}

