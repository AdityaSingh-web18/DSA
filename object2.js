//Given an object of student grades and their marks, print highest scored student for each grade with their total marks.
let input = [
    {
      grade: "V",
      students: [
        { name: "Nrupul", marks: [88, 22, 31] },
        { name: "Prateek", marks: [28, 55, 48] },
      ],
    },
    {
      grade: "VI",
      students: [
        { name: "Aman", marks: [11, 28, 31] },
        { name: "Albert", marks: [24, 34, 44] },
      ],
    },
    {
      grade: "VII",
      students: [
        { name: "Max", marks: [100, 80, 70] },
        { name: "Sandhya", marks: [80, 80, 70] },
      ],
    },
  ];
  let sum_Nrupul = 0;
  let sum_prateek = 0;
  let sum_Aman = 0;
  let sum_albert = 0;
  let sum_max = 0;
  let sum_sandhya = 0;
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].students.length; j++) {
      for (let k = 0; k < input[i].students[j].marks.length; k++) {
        if (input[i].students[j].name == "Nrupul") {
          sum_Nrupul = sum_Nrupul + input[i].students[j].marks[k];
        }
        if (input[i].students[j].name == "Prateek") {
          sum_prateek = sum_prateek + input[i].students[j].marks[k];
        }
        if (input[i].students[j].name == "Aman") {
          sum_Aman = sum_Aman + input[i].students[j].marks[k];
        }
        if (input[i].students[j].name == "Albert") {
          sum_albert = sum_albert + input[i].students[j].marks[k];
        }
        if (input[i].students[j].name == "Max") {
          sum_max = sum_max + input[i].students[j].marks[k];
        }
        if (input[i].students[j].name == "Sandhya") {
          sum_sandhya = sum_sandhya + input[i].students[j].marks[k];
        }
      }
    }
  }
  
  if (sum_Nrupul < sum_prateek) {
    console.log(
      input[0].grade + "-" + input[0].students[1].name + "-" + sum_prateek
    );
  } else {
    console.log(
      input[0].grade + "-" + input[0].students[0].name + "-" + sum_Nrupul
    );
  }
  //--
  if (sum_Aman < sum_albert) {
    console.log(
      input[1].grade + "-" + input[1].students[1].name + "-" + sum_albert
    );
  } else {
    console.log(
      input[1].grade + "-" + input[1].students[0].name + "-" + sum_Aman
    );
  }
  //--
  if (sum_max < sum_sandhya) {
    console.log(
      input[2].grade + "-" + input[2].students[1].name + "-" + sum_sandhya
    );
  } else {
    console.log(input[2].grade + "-" + input[2].students[0].name + "-" + sum_max);
  }