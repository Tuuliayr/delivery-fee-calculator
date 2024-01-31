export const calculateFee = (cart: string, distance: string, amount: string, date: string) => {
    // delivery fee max 15 e
    // if cart value >= 200 e, then fee = 0 e
    // if cart value < 10 e, then subscharge = 10 e - cart value
    // if distance <= 1000, then +2 e, else distance - 1000 / 500 = kerroin, always round up, e. 1,6 -> 2
    // amount >= 5, then +0.50 for every added item including the 5th
    // if amount > 12, then +1.20
    // Friday rush, 3 - 7 PM, the delivery fee (the total fee including possible surcharges) will be multiplied by 1.2x
    // CENTS NOT EUROS
    // Convert cart euros to cents
    // Convert back before returning value

    const maxFee = 1500;
    let fee = 0;
    let cartValue = parseInt(cart) * 100;
    let delivDistance = parseInt(distance);
    let itemsAmount = parseInt(amount);

    console.log(date);

    if (cartValue < 20000) {
        if (cartValue < 1000) {
            fee = 1000 - cartValue;
        }

        if (delivDistance <= 1000) {
            fee += 200;
        } else {
            const delivFactor = Math.ceil((delivDistance - 1000) / 500);
            fee += delivFactor * 100;
        }

        if (itemsAmount >= 5) {
            const exceeding = itemsAmount - 4;
            fee += exceeding * 50;

            if (itemsAmount > 12) {
                fee += 120;
            }
        }

        if (fee > maxFee) {
            fee = 1500
        }
    }

    fee = fee / 100;
    return fee.toString();
}
