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
      let name = catArray [i].name;
      let age = catArray[i].age;

      if (!age) {
        age = 'Age unknown';
      }


      catTags.push("<div><h5>" + name + "</h5>" + "<p>" + age + "</p></div>");
  }


  if (convertToString) {
    return catTags.join('');
  }

    return catTags;
}

div.innerHTML = wrapHtmlTags(cats, true); // Solve task 8
