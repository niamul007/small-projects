const tabBtns = document.querySelectorAll(".tab1");
const tabs = document.querySelectorAll(".tab");

// Function to remove active class from all
function clearActive() {
  tabs.forEach(tab => tab.classList.remove("active"));
  tabBtns.forEach(btn => btn.classList.remove("active"));
}

// Add click event to each button
tabBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    clearActive(); // remove active from all
    btn.classList.add("active"); // mark clicked button as active
    
    // Show corresponding tab
    if (btn.classList.contains("about")) {
      document.querySelector(".aboutTab").classList.add("active");
    } else if (btn.classList.contains("mission")) {
      document.querySelector(".missionTab").classList.add("active");
    } else if (btn.classList.contains("vision")) {
      document.querySelector(".visionTab").classList.add("active");
    }
  });
});

// Optionally, set default active tab on load
tabBtns[0].click();
