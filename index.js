



// if (document.readyState === 'loading') {
//     document.addEventListener('DOMContentLoaded', ready)
// } else {
//     ready()
// }

// function ready() {
//     let removeButtons = document.querySelectorAll('.item-remove-btn')
//         for (let i = 0; i < removeButtons.length; i++) {
//             let removeButton = removeButtons[i]
//                 console.log(removeButton)
//             removeButton.addEventListener('click', removeItem)
//         }

//     let quantityElements = document.querySelectorAll('.item-quantity-selector')
//         for (let i = 0; i < quantityElements.length; i++) {
//             let quantityElement = quantityElements[i]
//             quantityElement.addEventListener('change', updateCartTotal)
//         }

//     let addToCartButtons = document.querySelectorAll('.add-to-cart-btn') 
//         for(let i = 0; i < addToCartButtons.length; i++) {
//             let addToCartButton = addToCartButtons[i]
//             addToCartButton.addEventListener('click', addToCart)
//         }

// }

// function addToCart(event) {
//     let buttonClicked = event.target
//     let storeItems = buttonClicked.parentElement
      
//     let itemImg = storeItems.querySelector('.product-img').src
//     let itemTitle = storeItems.querySelector('.product-name').innerText
//     let itemPrice = storeItems.querySelector('.product-price').innerText
//         //console.log(itemImg, itemTitle, itemPrice)

//     itemsInCart(itemImg, itemTitle, itemPrice)
//     updateCartTotal()
// }

// function itemsInCart(itemImg, itemTitle, itemPrice) {
    
//     let createRow = document.createElement('div')
//     createRow.classList.add('cart-row')
//     let cartItems = document.querySelector('.cart-items')
//     let cartRowContents = 
//         `
        
//             <img class='cart-img' src='${itemImg}'>
        
//         <div >
//             <h3 class='cart-item'>${itemTitle}</h3>
//         </div>

//         <select class='item-quantity-selector' name="" id="">
//             <option value="1">1</option>
//             <option value="2">2</option>
//             <option value="3">3</option>
//             <option value="4">4</option>
//             <option value="5">5</option>
//             <option value="6">6</option>
//             <option value="7">7</option>
//             <option value="8">8</option>
//             <option value="9">9</option>
//             <option value="10">10</option>
//         </select>

//         <div class='price-remove-container'>
//             <h3 class='item-price'>${itemPrice}</h3>
//             <p class='item-remove-btn btn btn-danger'>Remove</p>
//         </div>`

//         createRow.innerHTML = cartRowContents
//         cartItems.append(createRow)
//         createRow.querySelector('.item-remove-btn').addEventListener('click', removeItem)
//         createRow.querySelector('.item-quantity-selector').addEventListener('change', updateCartTotal)
// }

// function removeItem(event) {
//     console.log('clicked')
//     let buttonClicked = event.target
//     buttonClicked.parentElement.parentElement.remove()
//         //console.log(buttonClicked)
//     updateCartTotal()
// }

// function updateCartTotal() {
//     let cartItems = document.querySelector('.cart-items')
//     let cartRows = cartItems.querySelectorAll('.cart-row')
//     total = 0
//         for(let i = 0; i < cartRows.length; i++) {
//             let cartRow = cartRows[i]
//             let quantityElement = cartRow.querySelector('.item-quantity-selector')
//             let priceElement = cartRow.querySelector('.item-price').innerText
//             let quantity = quantityElement.value
//             let price = parseFloat(priceElement.replace('$', '').replace(',', ''))
//             total = total + (price * quantity)
//         }
//     document.querySelector('.total-number').innerText = '$' + total.toLocaleString() + '.00'
    
   
// }


// Left off where i can remove one item from my cart but if theres two or more it freezes and cand remove any items from the cart besides the first item

// Problem Solved after two fucking hours used document instead of cartRow line 80 and 81





























if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    let removeButtons = document.querySelectorAll('.item-remove-btn')
        for(let i = 0; i < removeButtons.length; i++) {
            let removeButton = removeButtons[i]
            removeButton.addEventListener('click', removeElementButton)
        }

    let quantitySelectors = document.querySelectorAll('.item-quantity-selector')
        for(let i = 0; i < quantitySelectors.length; i++) {
            let quantitySelector = quantitySelectors[i]
            quantitySelector.addEventListener('change', updateCartTotal)
    }


    let addToCartElements = document.querySelectorAll('.add-to-cart-btn')
        for(let i = 0; i < addToCartElements.length; i++) {
            let addToCartElement = addToCartElements[i]
            
            addToCartElement.addEventListener('click', addToCartButton)
        }
    
    document.querySelector('.buy-btn').addEventListener('click', purchaseButton)
}


function EmptyCart() {
    let defaultMsgElement = document.querySelector('.default-msg-container')
    let cartrow = document.querySelector('.cart-row')

    if (cartrow == null ) {
        defaultMsgElement.style.display = 'block';
    } else {
        defaultMsgElement.style.display = "none";
    } 
}



function purchaseButton() {
    let cartRow = document.querySelector('.cart-row')
   
        if (cartRow == null ) {
        alert('No Items in Cart: Add items to cart to purchase')
        } else {
            alert('Order placed, thanks')
        }

    let cartItems = document.querySelector('.cart-items')
        while (cartItems.hasChildNodes()) {
            cartItems.removeChild(cartItems.firstChild)
            updateCartTotal()
            EmptyCart()
        }
}

function removeElementButton(event) {
    let buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
    EmptyCart()
}

function addToCartButton(event) {
    let buttonClicked = event.target
    let ElementClicked = buttonClicked.parentElement
    let productImg = ElementClicked.querySelectorAll('.product-img')[0].src
    let productName = ElementClicked.querySelectorAll('.product-name')[0].innerText
    let productPrice = ElementClicked.querySelectorAll('.product-price')[0].innerText

    //Code added to Alert when items been added to cart
    let cartItemName = document.querySelectorAll('.cart-item');
    for (let i = 0; i < cartItemName.length; i++) {
        if (cartItemName[i].innerText == productName) {
            alert('Item has already been added');
            return; 
        }
    }
    addToCart(productImg, productName, productPrice)
    alert('Added to cart')
    updateCartTotal()
    EmptyCart()
}

function addToCart(productImg, productName, productPrice) {

    let createRow = document.createElement('div')
    createRow.classList.add('cart-row')
    let cartItems = document.querySelector('.cart-items')
    // Moved up above to notify when item added
    // let cartItemName = document.querySelectorAll('.cart-item')
   
        // for(let i = 0; i < cartItemName.length; i++) {
        //     if (cartItemName[i].innerText == productName)  {
        //         alert('Item has already been added')
        //         return
        //     }
        // }
    let cartRowContent = 
            `   
               <div class='cart-image-container'>
                <img class='cart-img' src='${productImg}'>
               </div>
                <div >
                    <h3 class='cart-item'>${productName}</h3>
                </div>
                <select class='item-quantity-selector' name="" id="">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
                <div class='price-remove-container'>
                    <h3 class='item-price'>${productPrice}</h3>
                    <p class='item-remove-btn btn btn-danger'>Remove</p>
                </div>
                
            ` 
        createRow.innerHTML = cartRowContent
        cartItems.append(createRow)

        createRow.querySelector('.item-remove-btn').addEventListener('click', removeElementButton)
        createRow.querySelector('.item-quantity-selector').addEventListener('change', updateCartTotal)
}

function updateCartTotal() {
    let cartItems = document.querySelectorAll('.cart-items')[0]
    let cartRows = cartItems.querySelectorAll('.cart-row')
    total = 0
     for(let i = 0; i < cartRows.length; i++) {
        let cartRow = cartRows[i]
        let priceElement = cartRow.querySelectorAll('.item-price')[0] 
        let quantityElement = cartRow.querySelectorAll('.item-quantity-selector')[0]
        let price = parseFloat(priceElement.innerText.replace('$', '').replace(',', ''))
        let quantity = quantityElement.value
        total = total + (price * quantity)    
     }   
    document.querySelector('.total-number').innerText = '$' + total.toLocaleString() + '.00'
}






