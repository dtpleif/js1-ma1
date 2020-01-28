const div = document.querySelector(".results");
const existingHTML = div.innerHTML;
const newHTML = "<p>New paragraph</p>";
div.innerHTML = newHTML;

console.dir(div);
