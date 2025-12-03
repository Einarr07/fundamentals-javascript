function calculateDiscountedPrice(price, discountPercentage) {
    const discount = price * (discountPercentage / 100)
    const priceWithDiscount = price - discount
    return priceWithDiscount
}

const originalPrice = 100
const discountPercentage = 20
const finalPrice = calculateDiscountedPrice(originalPrice, discountPercentage)

console.log(`Original price: ${originalPrice}`)
console.log(`Discounted: ${discountPercentage}`)
console.log(`Price with discount: ${finalPrice}`)