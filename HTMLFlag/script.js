const countries = [
    { name: "France", flag: "flags/france.jpg" },
    { name: "Germany", flag: "flags/germany.jpg" },
    { name: "Italy", flag: "flags/italy.jpg" },
    { name: "Australia", flag: "flags/aus.jpg" },
    { name: "Brazil", flag: "flags/bra.jpg" },
    { name: "Japan", flag: "flags/japan.jpg" },
    { name: "Canada", flag: "flags/canada.jpg" },
    { name: "China", flag: "flags/china.jpg" },
    { name: "England", flag: "flags/england.jpg" },
    { name: "Korea", flag: "flags/kor.jpg" },
    { name: "Malaysia", flag: "flags/malay.jpg" },
    { name: "Philippines", flag: "flags/ph.jpg" },
    { name: "Thailand", flag: "flags/thai.jpg" },
    { name: "Turkey", flag: "flags/turk.jpg" },
    { name: "UAE", flag: "flags/uae.jpg" },
  ];
  
 
  let currentCountryIndex;
  let correctOptionIndex;
  let timer;
  let timeLeft = 0;
  let difficulty = "easy";
  let score = 0;
  
  
  document.addEventListener("DOMContentLoaded", () => {
    updateScore();
    startGame();
  });
  
  
  function startGame() {
    resetTimer();
    chooseRandomCountry();
    displayOptions();
  }
  
  
  function chooseRandomCountry() {
    currentCountryIndex = Math.floor(Math.random() * countries.length);
    correctOptionIndex = Math.floor(Math.random() * 3);
    const flag = countries[currentCountryIndex].flag;
    document.getElementById("flag").src = flag;
  }
  
  
  function displayOptions() {
    const options = document.querySelectorAll(".option");
    options.forEach((option, index) => {
      if (index === correctOptionIndex) {
        option.textContent = countries[currentCountryIndex].name;
      } else {
        const randomCountryIndex = Math.floor(Math.random() * countries.length);
        option.textContent = countries[randomCountryIndex].name;
      }
    });
  }
  
  
  function checkAnswer(option) {
    const selectedCountry = option.textContent;
    const correctCountry = countries[currentCountryIndex].name;
    if (selectedCountry === correctCountry) {
      document.getElementById("feedback").textContent = "Correct!";
      score++;
      updateScore();
    } else {
      document.getElementById("feedback").textContent = "Incorrect. Try again.";
    }
    startGame();
  }
  
  
  function updateScore() {
    document.getElementById("score").textContent = `Score: ${score}`;
  }
  
  
  function changeDifficulty() {
    difficulty = document.getElementById("difficulty-select").value;
    resetTimer();
    startGame();
  }
  
  
  function resetTimer() {
    clearInterval(timer);
    if (difficulty === "easy") {
      timeLeft = 15;
    } else if (difficulty === "medium") {
      timeLeft = 10;
    } else if (difficulty === "hard") {
      timeLeft = 5;
    }
    document.getElementById("time-left").textContent = timeLeft;
    timer = setInterval(updateTimer, 1000);
  }
  
  
  function updateTimer() {
    timeLeft--;
    document.getElementById("time-left").textContent = timeLeft;
    if (timeLeft === 0) {
      clearInterval(timer);
      document.getElementById("feedback").textContent = "Time's up! Try again.";
      startGame();
    }
  }
  