document.addEventListener("DOMContentLoaded", async () => {
  try {
    const res = await fetch("https://extensionsback.onrender.com/api/report");
    const data = await res.json();

    const container = document.getElementById("report");
    if (data.length === 0) {
      container.textContent = "No data available yet.";
      return;
    }

    data.forEach(entry => {
      const div = document.createElement("div");
      div.className = "site";

      const mins = Math.floor(entry.totalTime / 60);
      const secs = entry.totalTime % 60;

      div.innerHTML = `
        <strong>${entry.website}</strong><br>
        Time Spent: ${mins}m ${secs}s<br>
        Category: <span class="${entry.category}">${entry.category}</span>
      `;
      container.appendChild(div);
    });
  } catch (err) {
    document.getElementById("report").textContent = "Failed to load data.";
    console.error("Error loading report:", err);
  }
});
