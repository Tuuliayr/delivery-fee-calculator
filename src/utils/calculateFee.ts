export const calculateFee = (cart: string, distance: string, amount: string, time: string) => {
    const maxFee = 1500;
    const baseFee = 200;
    const bulkFee = 120;
    const rushHours = [15, 16, 17, 18, 19];
    const orderTime = new Date(time);
    const day = orderTime.getDay();
    const hour = orderTime.getHours();
    let fee = 0;
    let cartValue = parseInt(cart) * 100;
    let delivDistance = parseInt(distance);
    let itemsAmount = parseInt(amount);

    if (cartValue < 20000) {
        if (cartValue < 1000) {
            fee = 1000 - cartValue;
        }

        fee += baseFee;
        if (delivDistance > 1000) {
            const delivFactor = Math.ceil((delivDistance - 1000) / 500);
            fee += delivFactor * 100;
        }

        if (itemsAmount >= 5) {
            const exceeding = itemsAmount - 4;
            fee += exceeding * 50;

            if (itemsAmount > 12) {
                fee += bulkFee;
            }
        }

        if (day === 5 && rushHours.includes(hour)) {
            fee = fee * 1.2;
        }

        if (fee > maxFee) {
            fee = maxFee
        }

        fee = fee / 100;
    }
    
    return fee.toString();
}
