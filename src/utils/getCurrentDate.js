//utils function for throwing current year
export function getCurrentDate(separator = '') {
	let newDate = new Date();
	let year = newDate.getFullYear();

	return `${year}`;
}
