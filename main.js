// Determine Letter Grades - Start Code
// A: 80 - 100
// B: 65 - 79
// C: 55 - 64
// D: 50 - 54
// F: 0 - 49

// Determine Letter Grades Click Event
document.getElementById('btn').addEventListener('click', btnClicked);

function btnClicked() {
  // Get Percentage Grades
  let engPercent = +document.getElementById('eng-percent').value;
  let socPercent = +document.getElementById('soc-percent').value;
  let mathPercent = +document.getElementById('math-percent').value;
  let sciPercent = +document.getElementById('sci-percent').value;

  // Calculate & Output Letter Grades
  // English

  document.getElementById('eng-letter').innerHTML = getGrade(engPercent);

  // Social Studies

  document.getElementById('soc-letter').innerHTML = getGrade(socPercent);


  // Mathematics

  document.getElementById('math-letter').innerHTML = getGrade(mathPercent);


  // Science

  document.getElementById('sci-letter').innerHTML = getGrade(sciPercent);

}

function getGrade(percent){
  let letter;
  if (percent >= 80) {
    letter = 'A';
  } else if (percent >= 65) {
    letter = 'B';
  } else if (percent >= 55) {
    letter = 'C';
  } else if (percent >= 50) {
    letter = 'D';
  } else {
    letter = 'F';
  }
  return letter;
}