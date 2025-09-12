document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");
  const results = document.querySelectorAll(".result");

  function performSearch() {
    const query = searchInput.value.trim().toLowerCase();
    let found = false;

    results.forEach(result => {
      const title = result.querySelector("h2").textContent.toLowerCase();
      if (title.includes(query) && query !== "") {
        result.style.display = "block";
        found = true;
      } else {
        result.style.display = "none";
      }
    });

    if (!found && query !== "") {
      alert("No results found. Try another topic!");
    }
  }

  searchBtn.addEventListener("click", performSearch);
  searchInput.addEventListener("keypress", e => {
    if (e.key === "Enter") performSearch();
  });

  // Hide all results initially
  results.forEach(result => result.style.display = "none");
});
