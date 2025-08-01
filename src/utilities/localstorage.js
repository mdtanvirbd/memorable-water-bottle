const getStoreCart = () =>{
   const storeCartString = localStorage.getItem('cart')
   if(storeCartString){
    return JSON.parse(storeCartString)
   }
   return [];
}
const saveCartTols = cart =>{
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified)
}

const addToLS = id =>{
    const cart = getStoreCart();
    cart.push(id)
    saveCartTols(cart)
}
export {addToLS}