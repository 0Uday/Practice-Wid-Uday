function joinNow(){
  document.getElementById('join-msg').innerText =
    "Welcome! Our trainer will contact you soon.";
}
function openTnC() {
    document.getElementById("tncModal").style.display = "block";
}

function closeTnC() {
    document.getElementById("tncModal").style.display = "none";
}

window.onclick = function(e) {
  if (e.target == document.getElementById("tncModal")) {
      closeTnC();
  }
}

let scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = function() {
  scrollBtn.style.display = (window.scrollY > 300) ? "block" : "none";
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "☀️ Light Mode";
  } else {
    toggleBtn.textContent = "🌙 Dark Mode";
  }
});


