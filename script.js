// Toggle profile menu
document.getElementById("profileBtn").addEventListener("click", () => {
  document.getElementById("profileMenu").classList.toggle("hidden");
});

// Like button counter
document.querySelectorAll(".like-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    let countSpan = btn.querySelector(".like-count");
    let count = parseInt(countSpan.textContent);
    countSpan.textContent = count + 1;
  });
});
