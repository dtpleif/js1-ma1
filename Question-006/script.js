//Question 6

/*Select the div by its class from the HTML below, assign it to a variable called resultsContainer and set its inner HTML to be <p>New paragraph</p>.*/

const div = document.querySelector(".results");
const existingHTML = div.innerHTML;
const newHTML = "<p>New paragraph</p>"
div.innerHTML = newHTML;

console.log(div);
console.dir(div);
