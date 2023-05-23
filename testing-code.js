
// empty cart
   /*
    let cartContainer = document.querySelector('.default-msg-container')
    let defaultMsgElement = document.querySelector('.default-msg')
    let cartrow = document.querySelector('.cart-row')
    
    let reAddDefaultDiv = document.createElement('p')

    reAddDefaultDiv.classList.add('default-msg')
    reAddDefaultDiv.innerHTML = '<p>Your Cart is empty.<p>' 
    
        //console.log(cartContainer.childNodes[5])

    if(cartrow) {
        defaultMsgElement.remove() // || console.log('Already Removed')
    } else if (cartrow == null ) {
        cartContainer.append(reAddDefaultDiv)
    } else {
        console.log('err')
    }

        //console.log(cartContainer.childNodes[5])
    */




// to resize shopping cart images

 //<div class='cart-image-con'></div>





// Function Below is 'Extra'

//document.querySelector('.buy-btn').addEventListener('click', EmptyCart)

/*
function EmptyCart() {
    let cartItems = document.querySelector('.cart-items')
    let defaultDiv = document.createElement('div')
    defaultDiv.classList.add('default-msg')
    let defaultMsg = '<p>Your Cart is empty.<p>'
            // console.log(cartItems.hasChildNodes())
        if (cartItems.hasChildNodes() == false ) {
            defaultDiv.innerHTML = defaultMsg
            cartItems.append(defaultDiv)
            // console.log('NO Child NODES')
        } else {
            // console.log('Child Nodes Exist')

        }
}
*/






 
if (cartItem.hasChildNodes(cartRow)) {
    console.log('cart has items')
} else {
    console.log('cart is empty')
}

    // if (cartItems.hasChildNodes() == false) {
    //     defaultDiv.innerHTML = defaultMsg
    //     cartItems.append(defaultDiv)
    // }

// if(cartItems.hasChildNodes()) {
// console.log(cartItems)
// } else {
//     console.log('empty')
// }

//let defaultMsg = cartItems.querySelector('.default-msg'


// we learned the the default message was in the wrong spot it should not have been in the cart-items as we are checking for No child nodes and the default message would be a child node








    // what we also learned was that after the default message is removed and doesnt just remove it from the dom but deletes it from the html document // we learned the the default message was in the wrong spot it should not have been in the cart-items as we are checking for No child nodes and the default message would be a child node

    // what we also learned was that after the default message is removed and doesnt just remove it from the dom but deletes it from the html document 

 /*
        //console.log('Empty Cart Function is being passed in!')

    let cartContainer = document.querySelector('#cart')
    let cartDefaultMsg = cartContainer.childNodes[5]
    let cartItems = document.querySelector('.cart-items')
    let defaultMsgElement = document.querySelector('.default-msg')

    let defaultDiv = document.createElement('p')
    defaultDiv.classList.add('default-msg')
    
    console.log(cartContainer)
   
    // while (cartItems.hasChildNodes()) {
    //     defaultMsgElement.remove()
    // }


    if (cartItems) {
        cartDefaultMsg.remove()
        console.log('Cart Full')
    } else if (cartItems == false) {
        defaultDiv.innerHTML = 'Your Cart is empty.'
        cartContainer.appendChild(defaultDiv)
        console.log('Cart Empty')
    } else {
        console.log('err')
    }
*/