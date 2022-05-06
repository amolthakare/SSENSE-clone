var cartArr = JSON.parse(localStorage.getItem("cartItems")) || [];

var WishlistArr = JSON.parse(localStorage.getItem("WishlistItems")) || [];
console.log(WishlistArr);

var WishlistArr = JSON.parse(localStorage.getItem("WishlistItems"));
console.log(WishlistArr);

function displayData(WishlistArr) {

    document.querySelector(".Wishlist").innerHTML="";

    WishlistArr.map(function (elem,index,array){

        var div = document.createElement("div");
        div.setAttribute("id","wish");

        var img = document.createElement("img");
        img.setAttribute("src",elem.Image);
        img.setAttribute("class","photo");

        var tit = document.createElement("p");
        tit.innerText = elem.tit;

        var Title = document.createElement("p");
        Title.innerText = elem.Title;
        
        var Price = document.createElement("p");
        Price.innerText="$ "+elem.Price+" USD";

        let btn = document.createElement("button");
        btn.innerText="ADD TO CART";
        btn.setAttribute("id","btn");

        btn.addEventListener("click", function () {
            addToCart(elem);
        });

        var rem =document.createElement("div");

        var Remove = document.createElement("p");
        Remove.setAttribute("class","Remove");
        Remove.innerText="REMOVE";

        Remove.addEventListener("click",function() {
            deleteItem(index);
        });

        rem.append(Remove);
        div.append(img,tit,Title,Price,btn,rem);
        document.querySelector(".Wishlist").append(div);
    })
}

displayData(WishlistArr);

function deleteItem(index){
    WishlistArr.splice(index, 1);
    localStorage.setItem("WishlistItems",JSON.stringify(WishlistArr));
    displayData(WishlistArr);
    // Total();
}


function addToCart(elem) {
    console.log(elem);
    elem.quant=1;
    cartArr.push(elem);
    console.log(cartArr);
    localStorage.setItem("cartItems",JSON.stringify(cartArr));
}