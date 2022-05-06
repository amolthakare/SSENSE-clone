var cartArr = JSON.parse(localStorage.getItem("cartItems")) || [];
console.log(cartArr);

var cartArr = JSON.parse(localStorage.getItem("cartItems"));
console.log(cartArr);

function displayData(cartArr) {
    
    document.querySelector("#product").innerHTML="";

    cartArr.map(function (elem,index,array){

        var div = document.createElement("div");
        div.setAttribute("id","prod");

        var right = document.createElement("div");
        var left = document.createElement("div");
        left.setAttribute("id","tw");

        var img = document.createElement("img");
        img.setAttribute("src",elem.Image);
        img.setAttribute("class","image");

        var Detail = document.createElement("div");
        Detail.setAttribute("id","details");

        var tit = document.createElement("p");
        tit.innerText = elem.tit;

        var Title = document.createElement("p");
        Title.innerText = elem.Title;

        Detail.append(tit,Title);

        var Price_div = document.createElement("div");
        Price_div.setAttribute("id","Price_div")

        var Price = document.createElement("p");
        Price.innerText="$ "+elem.Price+" USD";  

        Price_div.append(Price);

        left.append(img,Detail);
        right.append(Price_div);
        div.append(left,right);
        document.querySelector("#product").append(div);

    })
}

displayData(cartArr);


function Total() {
    var cartTotal = cartArr.reduce(function (acc, elem, index) {
        return acc + (elem.Price * elem.quant);
    }, 0);

    document.querySelector("#total").innerText = "$ "+cartTotal+" USD";
    document.querySelector("#Total").innerText = "$ "+cartTotal+" USD";
}
Total();