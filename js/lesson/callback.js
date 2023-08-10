let log = console.log;

// Map
//returns a new modified array or array of object

let nums = [2, 3, 4, 5, 6, 7, 8, 9];

let arr = nums.map((n) => {
  return n * 4;
});

let obj = nums.map((n) => {
  return {
    value: n,
    doubled: n * 2,
    isEven: n % 2 === 0,
  };
});

log(arr, "new array with map");
log(obj, "new array object with map");

let data = [
  {
    codevaluejson: [
      {
        description: "Single",
        code: "single",
      },
      {
        description: "Married",
        code: "married",
      },
      {
        description: "Widowed",
        code: "widowed",
      },
      {
        description: "Divorced",
        code: "divorced",
      },
      {
        description: "Separated",
        code: "separated",
      },
    ],
  },
  {
    codevaluejson: [
      {
        description: "Female",
        code: "f",
      },
      {
        description: "Male",
        code: "m",
      },
    ],
  },
  {
    codevaluejson: {
      filename: "sample_file.csv",
    },
  },
  {
    codevaluejson: [
      {
        description: "English",
        code: "english",
      },
      {
        description: "Malay",
        code: "malay",
      },
      {
        description: "Chinese",
        code: "chinese",
      },
    ],
  },
  {
    codevaluejson: {
      filename: "lead_upload_guideline.pdf",
    },
  },
  {
    codevaluejson: [
      {
        description: "Singaporean",
        code: "singaporean",
        order: 1,
      },
      {
        description: "Permanent Resident",
        code: "permanent",
        order: 2,
      },
      {
        description: "Foreigner",
        code: "foreigner",
        order: 3,
      },
    ],
  },
  {
    codevaluejson: [
      {
        description: "Adventurous",
        code: "adventurous",
        order: "4",
      },
      {
        description: "Risk Averse",
        code: "risk_averse",
        order: "1",
      },
      {
        description: "Cautious",
        code: "cautious",
        order: "2",
      },
      {
        description: "Balanced",
        code: "balanced",
        order: "3",
      },
    ],
  },
  {
    codevaluejson: [
      {
        description: "All time of event",
        code: "all",
      },
      {
        description: "15 minutes before",
        code: "before_15",
      },
      {
        description: "10 minutes before",
        code: "before_10",
      },
      {
        description: "5 minutes before",
        code: "before 5",
      },
    ],
  },
  {
    codevaluejson: [
      {
        description: "Annual",
        code: "Annual ",
      },
      {
        description: "Semi-Annual",
        code: "semi-Annual",
      },
      {
        description: "Monthly",
        code: "Monthly",
      },
      {
        description: "Quarterly",
        code: "Quarterly",
      },
    ],
  },
  {
    codevaluejson: [
      {
        description: "Father",
        code: "father",
        order: "1",
      },
      {
        description: "Mother",
        code: "mother",
        order: "2",
      },
      {
        description: "Wife",
        code: "wife",
        order: "4",
      },
      {
        description: "Husband",
        code: "husband",
        order: "3",
      },
      {
        description: "Daughter",
        code: "daughter",
        order: "5",
      },
      {
        description: "Son",
        code: "son",
        order: "5",
      },
      {
        description: "Others",
        code: "others",
        order: "6",
      },
    ],
  },
  {
    codevaluejson: [
      {
        description: "GCE N",
        code: "gce",
      },
      {
        description: "O Level",
        code: "o-level",
      },
      {
        description: "A Level",
        code: "a-level",
      },
      {
        description: "Secondary and below",
        code: "secondary",
      },
      {
        description: "C Level",
        code: "c-level",
      },
      {
        description: "Tertiary and above",
        code: "tertiary",
      },
    ],
  },
];

let formated = [];

for (let dat of data) {
  let temp = dat["codevaluejson"];

  if (temp && temp.length > 1) {
    formated = [
      ...formated,
      //   return spread vlaues form map
      //  example for implict return in arrow skip {}
      ...temp.map((d) => d),
    ];
  } else {
    formated = [...formated, temp];
  }
}

log(formated, "<<---formated");

// making an array of descriptions for formatted

let description = formated.map((des) => {
  return des.description;
});
log(description, "<--description");

// ARRAOW FUNCTION IMPLICIT RETURN
// can skip return key word
// replace { } with ()

let square = (x) => (x ? x * 2 : "no data");

log(square(5), "implicit return ");

//FIND()
// returns  the first record that match the criteria
// find has to be a boolean function

let movies = ["Dr danny", "Mr james and Mrs jenny", "Mrs sun"];

let movie1 = movies.find((m) => m.includes("Mrs"));

log(movie1);

let movie2 = movies.find((m) => m.indexOf("Mrs") === 0);

log(movie2);

let findObj = [
  {
    description: "Single",
    code: "single",
  },
  {
    description: "Married",
    code: "married",
  },
  {
    description: "Widowed",
    code: "widowed",
  },
  {
    description: "Divorced",
    code: "divorced",
  },
  {
    description: "Separated",
    code: "separated",
  },
];

let found = findObj.find((obj) => obj.code === "separated");
log(found);

//FILTER
// returns a new array
// filter has to be a boolean function which returns true or false
let filter = findObj.filter((obj) => obj.code === "separated");
log(filter, "filter");

//EVERY

// tests wether all elements in the array pass the provided function condition
// returns a boolean value

let threeWord = ["dog", "cag", "mag", "sig"];
log(
  threeWord.every((m) => m.length === 3),
  "every"
);
log(threeWord.every((m) => m[m.length - 1] === "g"));

// SOME
// need only one element to return true
// if any if the element pass the test condition will return true

let someExp = ["dog", "example", "jet", "pet"];
log(
  someExp.some((m) => m.length > 4),
  "some example"
);

// SORT
// mutates original value
// only works for string not for number
const price = [32, 42, 242, 5434, 53, 54, 2];

// Note:slice() returns a new array this prevents sort() form mutating the array
// ascending order
log(price.slice().sort((a, b) => a - b));
// descending order
log(price.slice().sort((a, b) => b - a));

// Reduce
// executes a reducer function on each element of the array resulting in a signle value

log(
  price.reduce((total, current) => total * current, 0),
  "multiply with reduce"
);
log(
  price.reduce((total, current) => total - current, 0),
  "subtract with reduce"
);
log(
  price.reduce((total, current) => total + current, 0),
  "add with reduce"
);

// finding maximum value with reduce

log(price.reduce((max, curr) => Math.max(max, curr)));

// inital value with reduce
log(price.reduce((max, curr) => Math.max(max, curr), 9232));
log(price.reduce((max, curr) => max + curr, 9232));

// reduce with objects
let votes = ["y", "n", "y", "y", "y", "n", "n", "n", "y"];

log(votes.reduce((tally, val) => {
  tally[val] = (tally[val] || 0) + 1;
  return tally;
}, {}))
