class User {
    constructor(name, orderTotalPrice, weekendDiscount, nightDiscount) {
        this.name = name;
        this.orderTotalPrice = orderTotalPrice || 0;
        this.weekendDiscount = weekendDiscount || 0;
        this.nightDiscount = nightDiscount || 0;
        this.bonus = 0;
    }
    makeOrder() {
        const priceMinusDiscound = this.orderTotalPrice - this.weekendDiscount - this.nightDiscount;
        return `Price after discount ${ priceMinusDiscound } and including bonuses is  ${ priceMinusDiscound - this.bonus }`;
    }
};

const getDiscount = user => {
    let date = new Date();

    const nightDiscountTime = date.getHours() >= 23 || date.getHours() < 6;
    const weekendDiscountTime = date.getDay() === 6 || date.getDay() === 7;
    const nightDiscount = user.orderTotalPrice * 10 / 100;
    const weekendDiscount =  user.orderTotalPrice * 5 / 100;

    if ( !user.weekendDiscount && !user.nightDiscount) {
        if( nightDiscountTime ) {
            if ( weekendDiscountTime ) {
                user.weekendDiscount = weekendDiscount;
            }
            user.nightDiscount = nightDiscount;
        } else if ( weekendDiscountTime ) {
            user.weekendDiscount = weekendDiscount;
        }
        return 'Discounts are available only at night time and evenings!';
    } else if( user.weekendDiscount && !user.nightDiscount ) {
        user.nightDiscount = nightDiscount;
        return `You already have weekend discount, your night discount is ${user.nightDiscount}`;
    } else if ( user.nightDiscount && !user.weekendDiscount) {
        user.weekendDiscount = weekendDiscount;
        return `You already have night discount, your weekend discount is ${user.weekendDiscount}`;
    } else {
        return 'You already have both night and weekend discounts';
    }
};

const setBonus = user => {
    user.bonus = parseInt(user.orderTotalPrice / 100);
};


    const tom = new User('Tom', 416, 15, 10);
    setBonus(tom); 
    getDiscount(tom);
    tom.makeOrder();
    
    const peter = new User('Peter', 716, 0, 10);
    setBonus(peter); 
    getDiscount(peter);
    peter.makeOrder();
