// const data = [
//     ["rahul", "delhi", "accounts dept"],
//     ["rajeev", "UP", "sales dept"]
// ];

// let csvContent = "data:text/csv;charset=utf-8,";

// data.forEach(function(rowArray) {
//     let row = rowArray.join(",");
//     csvContent += row + "\r\n";
// });

const data = [
    ["rahul", "delhi", "accounts dept"],
    ["rajeev", "UP", "sales dept"]
];
let csvContent = "data:text/csv;charset=utf-8," 
    + data.map(e => e.join(",")).join("\n");

var encodedUri = encodeURI(csvContent);
// window.open(encodedUri);

console.log(csvContent);

console.log(encodedUri);

