function Flights() {
    function calculateNumberOfFlights(passengers, capacity) {
        if (passengers<1 || Math.floor(passengers)!=passengers) throw "The number of passengers must be a positive integer value";
        if (capacity<1 || Math.floor(capacity)!= capacity) throw "The capacity of the flight must be a positive integer value";
        let numberOfFlights = Math.floor(passengers/capacity);
        if (passengers % capacity !=0) {numberOfFlights++};
        return (numberOfFlights)
    }
    function checkAircraftRevision(distanceLimit, distanceArr) {
        let totalDistance = distanceArr.reduce((a, b) => a + b, 0);
        if (totalDistance <= distanceLimit/2) return ("The revision needs to be done within the next 3 months");
        if (totalDistance > distanceLimit/2 && totalDistance <= distanceLimit*0.75) return ("The revision needs to be done within the next 2 months");
        if (totalDistance > distanceLimit*0.74 && totalDistance <= distanceLimit) return ("The revision needs to be done within the next month");
        if (totalDistance > distanceLimit) throw ("Total Distance is more than Distance Limit");
    }

    return {calculateNumberOfFlights, checkAircraftRevision};
}


module.exports = Flights();
