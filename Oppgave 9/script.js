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

function wrapHtmlTags(catArray, convertToString = false) {
  const catTags = [];

  for (var i = 0; i < catArray.length; i++) {
      catTags.push("<h5>" + catArray[i].name + "</h5>")
  }

  if (convertToString) {
    return catTags.join('');
  }

  return catTags;
}


div.innerHTML = wrapHtmlTags(cats, true); // Solve task 8
