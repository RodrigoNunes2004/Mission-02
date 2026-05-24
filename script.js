/* ========== TOGGLE BUTTON ========== */
const toggleBtn = document.getElementById("toggle-btn");
const navbarLinks = document.getElementById("navbar-links");

toggleBtn.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

/* ========== FUNCTION TO RATE THE SKILLS ========== */
const rateMySkills =() => {

/* ========== GET VALUES FROM INPUT FIELDS ========== */
const html = Number(document.getElementById("htmlScore").value); //
const css = Number(document.getElementById("cssScore").value);
const js = Number(document.getElementById("jsScore").value);

/* ========== ARRAY TO STORE SKILLS OBJECTS WITH SCORES ========== */
const skills = [
  { name: "HTML", score: html },
  { name: "CSS", score: css },
  { name: "JavaScript", score: js }
];


  let totalScore = 0; // VARIABLE TO STORE TOTAL SCORE
  let message = ""; // VARIABLE TO STORE FEEDBACK MESSAGE

  // LOOP TO CALCULATE TOTAL SCORE
  for (let i = 0; i < skills.length; i++) {
    totalScore += skills[i].score; // arithmetic operator to add each skill score to totalScore
  }

  // CONDITIONAL STATEMENTS
  if (totalScore > 20) {
    message = "Excellent! Your skills are strong and getting better.";
  } 
  else if (totalScore === 20) {
    message = "Good job! Your skills are solid, but there's room for improvement.";
  } 
  else {
    message = "Keep practicing! Your skills are developing, but there's still work to be done.";
  }

  // DISPLAY RESULT
  document.getElementById("skillResult").textContent =
    `Total Score: ${totalScore}. ${message}`;
}

/********** EVENT LISTENER FOR THE BUTTON **********/
document.getElementById("rateSkillsBtn").addEventListener("click", rateMySkills);
