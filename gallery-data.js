// Each item = one slot on the homepage.
// id must be unique. thumb is what shows in the grid.
// images is what shows on the second page.

const GALLERY_ITEMS = Array.from({ length: 50 }, (_, i) => {
  const id = `slot-${i + 1}`;

  return {
    id,
    title: `Slot ${i + 1}`,
    // Change these to your own images.
    thumb: `assets/thumbs/${i + 1}.jpg`,
    images: [
      `assets/sets/${i + 1}/1.jpg`,
      `assets/sets/${i + 1}/2.jpg`,
      `assets/sets/${i + 1}/3.jpg`,
      `assets/sets/${i + 1}/4.jpg`,
      `assets/sets/${i + 1}/5.jpg`,
      `assets/sets/${i + 1}/6.jpg`,
    ],
  };
});
