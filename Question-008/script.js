/*Using the function and cats variable from the above question, instead of logging the name property, wrap each name property in an h5 tag, add it to a variable you declare before the loop and return the variable from the function after the loop.

The function should return the following:

<h5>Blob</h5>
<h5>Harold</h5>
<h5>Blurt</h5>*/

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

const wrapHtmlTags = function wrapHtmlTags(catArray) {
  const catTags = [];

  for (var i = 0; i < catArray.length; i++) {
      catTags.push("<h5>" + catArray[i].name + "</h5>")
  }

  return catTags;
}

console.log(wrapHtmlTags(cats));
