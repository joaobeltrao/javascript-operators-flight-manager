function Prices() {
    function calculateFinalPrice(basePrice, variationPassengerType, variationFlightType) {
        let MiddlePrice = basePrice + basePrice*(variationPassengerType/100); 
        let finalPrice= MiddlePrice + MiddlePrice*(variationFlightType/100);
        return (finalPrice);
    }

    function calculateDefaultFinalPrice(basePrice, passengerType, flightType) {
        let defaultFinalPrice = basePrice;
        if (passengerType.toLowerCase() == "regular") defaultFinalPrice = defaultFinalPrice*.95;
        if (passengerType.toLowerCase() == "vip") defaultFinalPrice = defaultFinalPrice*1.05;
        if (flightType.toLowerCase() == "economy") defaultFinalPrice = defaultFinalPrice*0.97;
        if (flightType.toLowerCase() == "business") defaultFinalPrice = defaultFinalPrice*1.1;
        defaultFinalPrice = (Math.round(defaultFinalPrice*100))/100;
        return (defaultFinalPrice)
    }

    function calculateTotalFinalPrice(numberOfSeats, passengerType, flightType, basePrice) {
        let totalFinalPrice = numberOfSeats*calculateDefaultFinalPrice(basePrice, passengerType, flightType);
        return totalFinalPrice;
    }

   

    return {calculateFinalPrice, calculateDefaultFinalPrice, calculateTotalFinalPrice}
}
module.exports = Prices();

