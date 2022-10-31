function getWeight() {
	let weight = parseInt(prompt("Enter the weight"));
	while (!weight) {
		alert("Value can't be empty!!!");
		weight = prompt("Enter the weight");
	}
	while (isNaN(weight)) {
		alert("Value isn't number.");
	}
	return weight;
}
