var bulletPosition = 4;

const spinChamber = () => {
	var chamberPosition = Math.ceil((Math.random() * 6));
	return chamberPosition;
};

const fireGun = (spinnerPosition) => {
    if (bulletPosition == spinnerPosition) return ("You're dead!");
    else return ("Keep playing!");
};

console.log(fireGun(spinChamber()));