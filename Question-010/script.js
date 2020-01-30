//Question 10

/*Using the function from question 8, add a p element containing the age property from each object. If the age property is missing, it should display Age unknown instead.

Wrap the h5 and p in a div.

The function should return the following:

<div>
    <h5>Blob</h5>
    <p>10</p>
</div>
<div>
    <h5>Harold</h5>
    <p>Age unknown</p>
</div>
<div>
    <h5>Blurt</h5>
    <p>21</p>
</div>*/

const div = document.querySelector(".results");

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function wrapHtmlTags(catArray) {
  const catTags = [];

  for (var i = 0; i < catArray.length; i++) {
      let name = catArray [i].name;
      let age = catArray[i].age;

      if (!age) {
        age = 'Age unknown';
      }

      catTags.push("<div><h5>" + name + "</h5>" + "<p>" + age + "</p></div>");
  }

    return catTags;
}

div.innerHTML = wrapHtmlTags(cats);

console.log(div.innerHTML);
