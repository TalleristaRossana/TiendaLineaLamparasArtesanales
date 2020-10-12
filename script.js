//Fecha y hora actual
var dt = new Date();
document.getElementById("time").innerHTML = dt.toLocaleString();

//Agregar productos por prompt
alert("¡Bienvenidx, ahora puedes agregar productos a la tienda!");
var userPreference;

if (confirm("¿Deseas agregar productos a la tienda?") == true) {
  userPreference = add_products();
}
else {
  userPreference = "Cancelado!";
}

var names = [];
var categories = [];
var prices = [];

//Para agrgar los productos
function add_products() {
  product_name = prompt("Nombre del producto: ", "");

  if(product_name != null && product_name != ""){
    names.push(product_name);
    product_category = prompt("Categoria del producto: ", "");
    if(product_category != null && product_category != ""){
      categories.push(product_category);
      product_price = prompt("Precio del producto: ", "");
      if(product_price != null && product_price != ""){
        prices.push(product_price);
        alert("El articulo " + product_name + " ha sido agregado en la categoria " + product_category + " con el precio de " + product_price);
        console.log(names);
        console.log(categories);
        console.log(prices);
      }
      else{
        alert("No se ingreso precio ...!");
      }

    }
    else {
      alert("No se ingreso categoria ...!");
    }

  }
  else{
    alert("No se ingreso nombre ...!")
  }
  return false;

}

//Para desplegar los productos
for (var y=0; y<names.length; y++)
   {
     var newCard = document.createElement("div");
     newCard.className = "product-card";
     var element = document.getElementById("img-product-group");
     element.appendChild(newCard);
     var newBadge = document.createElement("div");
     newBadge.className = "badge";
     var textBadge = document.createTextNode("Hot");
     newBadge.appendChild(textBadge);
     newCard.appendChild(newBadge);
     var newTumb = document.createElement("div");
     newTumb.className = "product-tumb";
     var newImg = document.createElement("img");
     newImg.src = "https://images.unsplash.com/photo-1586250742655-e0f53e6412a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60";
     newTumb.appendChild(newImg);
     newCard.appendChild(newTumb);
     var newDetails = document.createElement("div");
     newDetails.className = "product-details";
     var newCategory = document.createElement("span");
     newCategory.className = "product-category";
     var textCategory = document.createTextNode(categories[y]);
     newCategory.appendChild(textCategory);
     newDetails.appendChild(newCategory);
     newCard.appendChild(newDetails);
     var newH4 = document.createElement("h4");
     var a = document.createElement("a");
     a.href = "";
     var textH4 = document.createTextNode(names[y]);
     a.appendChild(textH4);
     newH4.appendChild(a);
     newDetails.appendChild(newH4);
     var newP = document.createElement("p");
     var pText = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!");
     newP.appendChild(pText);
     newDetails.appendChild(newP);
     var newBottomDetails = document.createElement("div");
     newBottomDetails.className = "product-bottom-details";
     var newPrice = document.createElement("div");
     newPrice.className = "product-price";
     var strPrice = document.createTextNode(prices[y]);
     newPrice.appendChild(strPrice);
     newBottomDetails.appendChild(newPrice);
     newDetails.appendChild(newBottomDetails);
    }



