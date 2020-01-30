//Question 1

const cat = {complain};

function complain() {

  console.log("Meow!");
}

complain()


//Question 2

const heading = document.querySelector("h3");

console.log(heading);
console.dir(heading);


//Question 3

const heading = document.querySelector("h3");
heading.style.fontSize = "2em";

console.log(heading);
console.dir(heading);


//Question 4

const heading = document.querySelector("h3");

heading.classList.add("subheading");

console.log(heading);
console.dir(heading);


//Question 5

/*Write code that selects all the p elements on a page and assigns them to a variable called paragraphs.*/

const paragraphs = document.querySelectorAll("p");

console.dir(paragraphs);


//Question 6

const div = document.querySelector(".results");
const existingHTML = div.innerHTML;
const newHTML = "<p>New paragraph</p>"
div.innerHTML = newHTML;

console.log(div);
console.dir(div);


//Question 7

/*Create a function that has one argument called catArray.

Inside the function, loop through the catArray argument and console log the name property in each object.

Call the function and pass in the cats variable below.*/

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

logCatNames(cats);


//Question 8

const wrapHtmlTags = function wrapHtmlTags(catArray) {
  const catTags = [];

  for (var i = 0; i < catArray.length; i++) {
      catTags.push("<h5>" + catArray[i].name + "</h5>")
  }

  return catTags;
}

console.log(wrapHtmlTags(cats));


//Question 9

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
      catTags.push("<h5>" + catArray[i].name + "</h5>")
  }

  return catTags;
}

div.innerHTML = wrapHtmlTags(cats);

console.log(div.innerHTML);


//Question 10

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
