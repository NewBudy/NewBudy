document.addEventListener("DOMContentLoaded", function() {
    const letterContainer = document.getElementById("letterContainer");
    const mainLetter = document.getElementById("mainLetter");
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
  
    // When the envelope is clicked, hide the envelope animation and show the main letter.
    letterContainer.addEventListener("click", function(e) {
      // Prevent multiple clicks if already open.
      if (mainLetter.style.display === "block") return;
      document.querySelector(".animated-mail").style.display = "none";
      document.querySelector(".shadow").style.display = "none";
      mainLetter.style.display = "block";
    });
  
    // Yes button: update the title, swap the image placeholder, and hide the buttons.
    yesBtn.addEventListener("click", function(e) {
      e.stopPropagation();
      document.getElementById("mainLetterTitle").textContent = "Yay! I love you!";
      // Swap out the image placeholder for a new image (change URL as desired)
      document.querySelector(".image-placeholder img").src =
        "https://via.placeholder.com/300x150?text=Yes+Image+Placeholder";
      document.querySelector(".buttons").style.display = "none";
    });
  
    // No button: cycle through messages and move the button around.
    const messages = [
      "No", 
      "Really?", 
      "Please?", 
      "Considering?", 
      "BABY!!!", 
      "I'm gonna be sad now :(", 
      "Okay I see", 
      "BYE"
    ];
    
    noBtn.addEventListener("click", function(e) {
      e.stopPropagation();
      let currentText = noBtn.textContent;
      let index = messages.indexOf(currentText);
      if (index < messages.length - 1) {
        noBtn.textContent = messages[index + 1];
        const range = 30 + (index * 15);
        const randomX = Math.random() * range * 2 - range;
        const randomY = Math.random() * range * 2 - range;
        noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
      } else {
        // When the text is "BYE", add the move-away class.
        noBtn.classList.add("move-away");
        setTimeout(() => {
          noBtn.style.display = "none";
        }, 2000);
      }
    });
  });
  