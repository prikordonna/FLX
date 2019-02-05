function countDiscount() {
    const price = prompt("Input a price");
    const discount = prompt("Input discount");
    
    if (price === null || price === "" || discount === null || discount === "") {
        alert("Invalid input data");
    } else {
        if ( !isNaN(price) && !isNaN(discount) ) {
            if (price <= 9999999 && price >= 0 && discount <= 99 && discount >= 0 ) {
                const saved = price * discount / 100;
                const priceWithDiscount = price - saved;
                alert(`
                Price without discount: ${price} 
                Discount: ${discount}%
                Price with discount: ${parseFloat(priceWithDiscount.toFixed(2))}
                Saved:  ${parseFloat(saved.toFixed(2))}
                `)
            } else {
                alert("Invalid input data");
            }
        } else {
            alert("Invalid input data");
        }
    }
}

countDiscount();