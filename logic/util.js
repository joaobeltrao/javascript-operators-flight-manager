function Util() {
    function calculateTotalDistributedPassengers(obj) {
        
            var sum = 0;
            for( var el in obj ) {
              if( obj.hasOwnProperty( el ) ) {
                sum += parseFloat( obj[el] );
              }
            }
            return sum;
          
    }

    function calculateTotalNumberOfPassengers(arr) {
        let totalNumberOfPassengers = arr.reduce((a, b) => a + b, 0);
        return totalNumberOfPassengers;
    }

    function checkInput(input) {
     
        if (!input || !(Number.isInteger(parseInt(input)))) {throw new Error ("not a number or is empty")} else return true;
    }

    function calculateTotalDistance(arr) {
        let totalDistance = arr.reduce(((r, x) => x > 0 ?  x + r: r), 0);
        return totalDistance;
        }

    function calculateBonusPoints(arrDistanceBusinessSeats, arrDistanceEconomySeats, businessBonusPct, economyBonusPct) {
        let businessPoints = (calculateTotalDistance(arrDistanceBusinessSeats))*(businessBonusPct/100);
        let economyPoints = (calculateTotalDistance(arrDistanceEconomySeats))*(economyBonusPct/100);
        let totalPoints = businessPoints + economyPoints;
        return (totalPoints);
    }

    return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers, checkInput, calculateTotalDistance, calculateBonusPoints}

}
module.exports = Util();
