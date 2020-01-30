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
