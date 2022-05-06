let getDetails = JSON.parse(localStorage.getItem("item"));
// console.log(getDetails);
let img_div = document.getElementById("img_div");
let titlediv = document.getElementById("title_div");
let price_details = document.getElementById("price_details");
let add_div = document.getElementById("add_div");

var cartArr = JSON.parse(localStorage.getItem("cartItems")) || [];

const get_item=(data) => {
    
    let price_div = document.createElement("div");

    let image = document.createElement("img");
    image.src=data.Image;
    image.setAttribute("id","Image");

    let tit=document.createElement("p");
    tit.innerText=data.tit;
    tit.setAttribute("id","tit");

    let Title = document.createElement("p");
    Title.innerText=data.Title;
    Title.setAttribute("id","Title");

    let Price = document.createElement("p");
    Price.innerText=`$ ${data.Price} USD`;
    Price.setAttribute("id","Price");

    let btn = document.createElement("button");
    btn.innerText="ADD TO CART";
    btn.setAttribute("id","btn")

    btn.addEventListener("click", function () {
        addToCart(data);
    });

    let wishlist=document.createElement("button");
    wishlist.innerText="ADD TO WISHLIST";
    wishlist.setAttribute("id","wishlist");

    img_div.append(image);
    title_div.append(tit,Title);
    price_details.append(Price);
    add_div.append(btn,wishlist);
}

get_item(getDetails);

// CART


function addToCart(data) {
    console.log(data);
    data.quant=1;
    cartArr.push(data);
    console.log(cartArr);
    localStorage.setItem("cartItems",JSON.stringify(cartArr));
}