const grid = document.getElementById("grid");

function safeText(str) {
  return String(str).replace(/[<>"']/g, "");
}

function renderGrid(items) {
  // Ensure exactly 50 tiles (5 rows x 10)
  const first50 = items.slice(0, 50);

  grid.innerHTML = first50.map((item, index) => {
    const label = `${item.title || `Slot ${index + 1}`}`;
    return `
      <a class="tile" href="view.html?id=${encodeURIComponent(item.id)}" aria-label="${safeText(label)}">
        <img src="${safeText(item.thumb)}" alt="${safeText(label)}" loading="lazy"
          onerror="this.src='assets/placeholder.jpg'; this.onerror=null;">
        <span class="badge">${safeText(label)}</span>
      </a>
    `;
  }).join("");
}

renderGrid(GALLERY_ITEMS);
