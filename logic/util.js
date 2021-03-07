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

    return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers}
}
module.exports = Util();
