let questions = [
  {
    question: "Wer hat HTML erfunden?",
    answer_1: "Robbie Williams",
    answer_2: "Lady Gaga",
    answer_3: "Tim Berners-Lee",
    answer_4: "Justin Bieber",
    right_answer: 3,
  },
  {
    question: "Welches ist die schwierigste Programmiersprache?",
    answer_1: "HTML",
    answer_2: "C",
    answer_3: "Python",
    answer_4: "Java",
    right_answer: 2,
  },
  {
    question: "Wie alt ist die Erde?",
    answer_1: "ca. 4,6 Milliarden Jahre",
    answer_2: "ca. 5,6 Milliarden Jahre",
    answer_3: "ca. 6,6 Milliarden Jahre",
    answer_4: "ca. 7,6 Milliarden Jahre",
    right_answer: 1,
  },
  {
    question: "Wie viele Kontinente gibt es?",
    answer_1: "4",
    answer_2: "5",
    answer_3: "6",
    answer_4: "7",
    right_answer: 4,
  },
  {
    question: "Wie viele Einwohner hat die Schweiz?",
    answer_1: "ca. 8 Millionen",
    answer_2: "ca. 9 Millionen",
    answer_3: "ca. 10 Millionen",
    answer_4: "ca. 11 Millionen",
    right_answer: 1,
  },
  {
    question: "welches ist das grösste Land der Welt?",
    answer_1: "China",
    answer_2: "USA",
    answer_3: "Russland",
    answer_4: "Kanada",
    right_answer: 3,
  },
  {
    question: "Welches ist die einfachste Programmiersprache",
    answer_1: "HTML",
    answer_2: "C",
    answer_3: "Python",
    answer_4: "Java",
    right_answer: 1,
  },
  {
    question: "Welches ist ein Programm zum Coden?",
    answer_1: "Word",
    answer_2: "Excel",
    answer_3: "Visual Studio Code",
    answer_4: "Powerpoint",
    right_answer: 3,
  },
  {
    question: "Welches ist die beste Programmierschule?",
    answer_1: "HSG",
    answer_2: "ETH",
    answer_3: "ZHAW",
    answer_4: "Developer Akademie",
    right_answer: 4,
  },
];

let rightQuestions = 0;
let currentQuestion = 0;

function init() {
  document.getElementById("all-questions").innerHTML = questions.length;

  showQuestion();
}

function showQuestion() {
  if (currentQuestion >= questions.length) {
    //TODO: show end screen
    document.getElementById("endScreen").style = '';
    document.getElementById("questionBody").style = 'display: none';
    document.getElementById("amountOfQuestions").innerHTML = questions.length;
    document.getElementById("amountOfRightQuestions").innerHTML = rightQuestions;
  } else {
    let question = questions[currentQuestion];

    document.getElementById("question-number").innerHTML = currentQuestion + 1;
    document.getElementById("questiontext").innerHTML = question["question"];
    document.getElementById("answer_1").innerHTML = question["answer_1"];
    document.getElementById("answer_2").innerHTML = question["answer_2"];
    document.getElementById("answer_3").innerHTML = question["answer_3"];
    document.getElementById("answer_4").innerHTML = question["answer_4"];
  }
}

function answer(selection) {
  let question = questions[currentQuestion];
  let selectedQuestionNumber = selection.slice(-1);
  let idOfRightAnser = `answer_${question["right_answer"]}`;

  if (selectedQuestionNumber == question["right_answer"]) { // Richtige Frage beantwortet
    console.log("Correct answer!");
    document.getElementById(selection).parentNode.classList.add("bg-success");
    rightQuestions++;
  } else {
    console.log("Wrong answer!");
    document.getElementById(selection).parentNode.classList.add("bg-danger");
    document
      .getElementById(idOfRightAnser)
      .parentNode.classList.add("bg-success");
  }
  document.getElementById("next-button").disabled = false;
}

function nextQuestion() {
  currentQuestion++; // z.B von 0 auf 1
  document.getElementById("next-button").disabled = true;
  resetAnswerButtons();
  showQuestion();
}

function resetAnswerButtons() {
  document
    .getElementById(`answer_1`)
    .parentNode.classList.remove("bg-success", "bg-danger");
  document
    .getElementById(`answer_2`)
    .parentNode.classList.remove("bg-success", "bg-danger");
  document
    .getElementById(`answer_3`)
    .parentNode.classList.remove("bg-success", "bg-danger");
  document
    .getElementById(`answer_4`)
    .parentNode.classList.remove("bg-success", "bg-danger");
}
