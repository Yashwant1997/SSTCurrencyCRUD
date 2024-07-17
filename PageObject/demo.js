// Create a Date object with the given date string
var dateString = 'Jul 10, 2024';
console.log(dateString);
var dateObj = new Date(dateString);
console.log(dateObj);
// // Format the date components
// const month = dateObj.toLocaleString('en-US', { month: 'short' }); // Get short month name (e.g., 'Jul')
// const day = dateObj.getDate(); // Get the day of the month (e.g., 10)
// const year = dateObj.getFullYear(); // Get the full year (e.g., 2024)
// // Create the formatted date string
// const formattedDate = `${month} ${day}, ${year}`;
// console.log(formattedDate); // Output: Jul 10, 2024
var currentDate = new Date();
console.log(currentDate);
// Format the date components
var month = currentDate.toLocaleString('en-US', { month: 'short' }); // Get short month name (e.g., 'Jul')
var day = currentDate.getDate(); // Get the day of the month (e.g., 10)
var year = currentDate.getFullYear(); // Get the full year (e.g., 2024)
// Create the formatted date string
var formattedDate = "".concat(month, " ").concat(day, ", ").concat(year);
console.log(formattedDate); // Output: Jul 10, 2024
