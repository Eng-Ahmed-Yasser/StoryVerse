let user1 = document.getElementById("user");
user1.innerHTML = `Welcome, ${localStorage.getItem("userName")}`;

let price = document.querySelector("#price");

let list = document.querySelector("#list");
let products = document.querySelectorAll(".card");
let totalPrice = 0;

let btn = document.querySelectorAll("#cart")
let numberOfProduct = document.querySelector(".no_product")
let countProduct = 0
let counter = 1

for (let j = 0 ; j < btn.length ; j++){
    btn[j].addEventListener("click" , function(){
        if (!list.innerHTML.includes(products[j].querySelector("img").src)){ 
            totalPrice += +products[j].getAttribute("price");
            price.innerHTML = `EGP ${totalPrice}`
            list.innerHTML += `<div class="cartProduct" cartPrice="${products[j].getAttribute("price")}" style = "width:300px; height:200px; border-radius: 10px; margin:auto;"><img src="${products[j].querySelector("img").src}" style="display:block; width:150px; height:150px; margin:auto; margin-bottom:10px; box-shadow: 0px 0px 10px 5px #453312"> <div class="counter1" style="width:120px; height:30px; border-radius:20px; color: #f1f0f0; background-color: #453312; padding:0px 10px; margin:auto; text-align:center; display:flex; align-items: center; justify-content: space-between;"> <i class="fa-solid fa-minus minus" style="cursor: pointer;"></i> <span class="counter2" style="text-align:center; margin-left:5px;">1</span> <i class="fa-solid fa-plus plus" style="cursor: pointer;"></i> </div> </div>`;
            countProduct += 1;
            numberOfProduct.innerHTML = countProduct
            let plus = document.querySelectorAll(".plus")
            let minus = document.querySelectorAll(".minus")

        for (let k = 0 ; k < plus.length ; k++){
            plus[k].addEventListener("click", function(){
                let counter2 = plus[k].parentElement.querySelector(".counter2")
                counter2.innerHTML = parseInt(counter2.innerHTML) + 1
                countProduct += 1;
                numberOfProduct.innerHTML = countProduct
                totalPrice += +plus[k].closest(".cartProduct").getAttribute("cartPrice");
                price.innerHTML = `EGP ${totalPrice}`
            })
            minus[k].addEventListener("click", function(){
                let counter2 = minus[k].parentElement.querySelector(".counter2")
                if (parseInt(counter2.innerHTML) <= 1){
                    minus[k].closest(".cartProduct").remove()
                    countProduct -= 1;
                    numberOfProduct.innerHTML = countProduct
                    totalPrice -= +minus[k].closest(".cartProduct").getAttribute("cartPrice");
                    price.innerHTML = `EGP ${totalPrice}`
                }
                else{
                    counter2.innerHTML = parseInt(counter2.innerHTML) - 1
                    countProduct -= 1;
                    numberOfProduct.innerHTML = countProduct
                    totalPrice -= +minus[k].closest(".cartProduct").getAttribute("cartPrice");
                    price.innerHTML = `EGP ${totalPrice}`
                }

            })
        }
        }
        else {
            totalPrice += +products[j].getAttribute("price");
            price.innerHTML = `EGP ${totalPrice}`
            let existingProduct = list.querySelector(`.cartProduct img[src="${products[j].querySelector("img").src}"]`).closest(".cartProduct");
            let counter2 = existingProduct.querySelector(".counter2");
            counter2.innerHTML = parseInt(counter2.innerHTML) + 1;
            countProduct += 1;
            numberOfProduct.innerHTML = countProduct;
        }

    })
}
