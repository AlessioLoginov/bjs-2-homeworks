function compareArrays(arr1, arr2) {
	let result = false;
	if (arr1.length == arr2.length) {
		result = arr1.every((element, index) => {
			return element === arr2[index];
		});
	}
	return result; // boolean
}

function getUsersNamesInAgeRange(users, gender) {
	let peoplesFilter = users.filter((user) => user.gender === gender);
	let summAges = peoplesFilter
		.map((user) => user.age)
		.reduce((acc, userAge) => acc + userAge, 0);
	if (isNaN(summAges / peoplesFilter.length)) {
		return 0;
	}
	return summAges / peoplesFilter.length;
}
