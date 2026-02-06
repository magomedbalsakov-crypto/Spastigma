const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const titleEl = document.getElementById("title");
const subEl = document.getElementById("sub");
const galleryEl = document.getElementById("gallery");

const item = GALLERY_ITEMS.find(x => x.id === id);

function escapeHtml(str) {
  return String(str).replace(/[<>"']/g, "");
}

if (!item) {
  titleEl.textContent = "Not found";
  subEl.textContent = "That slot doesn’t exist.";
  galleryEl.innerHTML = `<p style="color:#9fb0c8">Go back and pick another tile.</p>`;
} else {
  titleEl.textContent = item.title || "Photos";
  subEl.textContent = `Showing ${item.images.length} images`;

  galleryEl.innerHTML = item.images.map((src, i) => `
    <div class="card">
      <img src="${escapeHtml(src)}" alt="${escapeHtml(item.title)} image ${i + 1}"
        loading="lazy"
        onerror="this.src='assets/placeholder.jpg'; this.onerror=null;">
    </div>
  `).join("");
}
