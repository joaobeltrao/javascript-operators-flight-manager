function Passengers() {
    function checkFlightCapacity(flightCapacity, passengersArr) {
        let totalPassengers = passengersArr.reduce((a, b) => a + b, 0);
        if (totalPassengers<flightCapacity) {return (totalPassengers)} else {throw new Error ("The capacity of the flight is exceeded")};
    }

    function distributeAllSeatsToAllPassengers(vipPassengers, regularPassengers, numberOfFlights, businessSeatsPerFlight, economySeatsPerFlight) {
   
        let vipPassengersWithBusinessSeats = 0;
        let vipPassengersWithEconomySeats = 0;
        let regularPassengersWithBusinessSeats = 0;
        let regularPassengersWithEconomySeats = 0;


        let businessSeats=businessSeatsPerFlight*numberOfFlights;
        let economySeats=economySeatsPerFlight*numberOfFlights;
        var vipPassengers = vipPassengers;
        var regularPassengers = regularPassengers;
        
        for (let i=vipPassengers; i>0&&i<=vipPassengers&&businessSeats>0; i--) {
            
            vipPassengersWithBusinessSeats++;
            businessSeats--;
            vipPassengers--;
        }
        for (let i=vipPassengers; i>0&&i<=vipPassengers&&economySeats>0; i--) {
            
            vipPassengersWithEconomySeats++
            economySeats--;
            vipPassengers--;
        }
        for (let i=regularPassengers; i>0&&i<=regularPassengers&&businessSeats>0; i--) {
            
            regularPassengersWithBusinessSeats++
            businessSeats--;
            regularPassengers--;
        }
        for (let i=regularPassengers; i>0&&i<=regularPassengers&&economySeats>0; i--) {
            
            regularPassengersWithEconomySeats++
            economySeats--;
            regularPassengers--;
        }

        let seatsDistribution = {
            vipPassengersWithBusinessSeats: vipPassengersWithBusinessSeats ,
            vipPassengersWithEconomySeats: vipPassengersWithEconomySeats, 
            regularPassengersWithBusinessSeats: regularPassengersWithBusinessSeats,
            regularPassengersWithEconomySeats: regularPassengersWithEconomySeats
        }
        return(seatsDistribution);
      
       
    }


   return {checkFlightCapacity, distributeAllSeatsToAllPassengers}
}
module.exports = Passengers();

