type Product = {
    id: number
    name: string
    price: number
}

function addProduct(cart: Product[], product: Product): Product[]{
    return [...cart, product]
}

function removeProduct(cart: Product[], productId: number ): Product[]{
    return cart.filter(product => product.id !== productId)
}

function calculateTotal(cart:Product[]): number{
    return cart.reduce((total, product) => total + product.price, 0)
}

//^ 장바구니 실행
let cart: Product[] = []

// 추가
cart = addProduct(cart, {id: 1, name: "Apple", price: 1000});
cart = addProduct(cart, {id: 2, name: "Banana", price: 2000});
cart = addProduct(cart, {id: 3, name: "Orange", price: 5000});
cart = addProduct(cart, {id: 4, name: "Mango", price: 3500});

console.log(cart)

console.log(calculateTotal(cart))

cart = removeProduct(cart, 2)

console.log(calculateTotal(cart))