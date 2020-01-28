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

const logCatNames = function(catArray) {
    for (var i = 0; i < catArray.length; i++) {
      console.log(catArray[i].name);
    }

}

const wrapHtmlTags = function wrapHtmlTags(catArray) {
  const catTags = [];

  for (var i = 0; i < catArray.length; i++) {
      catTags.push("<h5>" + catArray[i].name + "</h5>")
  }

  return catTags;
}

// logCatNames(cats); // Solve task 7
console.log(wrapHtmlTags(cats)); // Solve task 8
