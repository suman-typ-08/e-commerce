let cartProduct = document.getElementById("cartProduct")
let totalPrice = document.getElementById("totalPrice")


cartProduct.innerHTML=`
<img src="https://static.vecteezy.com/system/resources/previews/024/679/917/non_2x/empty-shopping-cart-3d-illustration-icon-png.png"/>   
`
let price = 0;
 let cartData =  JSON.parse(localStorage.getItem("cartProduct"))
 console.log(cartData) // []
 if (cartData.length>0) {
    //display product
    let input = ""
    cartData.map((p)=>{
        price+=p.price
        console.log(p)
    input+=`

    <div class="cartItem">
       <img src=${p.images[0]} alt=${p.title}/>
          <p>${p.title}</p>
          <p> $${p.price}</p>
          <p> ${p.warrantyInformation }</p>
           <i class="fa-solid fa-trash"></i>
    </div>
    `
    })
    cartProduct.innerHTML=input
    totalPrice.innerHTML =`total price : ${price.toFixed(2) }`
 }
 else{
 
 }