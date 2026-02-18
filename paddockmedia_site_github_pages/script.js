// Paddock Media — small JS: menu, filter, lightbox, copy template
(() => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Mobile menu
  const burger = document.getElementById("burger");
  const menu = document.querySelector(".menu");
  if (burger && menu) {
    burger.addEventListener("click", () => {
      const open = menu.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", String(open));
    });
    // Close on click
    menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
      menu.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
    }));
  }

  // Portfolio filters
  const chips = Array.from(document.querySelectorAll(".chip"));
  const cards = Array.from(document.querySelectorAll(".card"));
  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      chips.forEach(c => c.classList.remove("is-active"));
      chip.classList.add("is-active");
      const f = chip.dataset.filter || "all";
      cards.forEach(card => {
        const tags = (card.dataset.tags || "").split(/\s+/).filter(Boolean);
        const show = (f === "all") || tags.includes(f);
        card.style.display = show ? "" : "none";
      });
      chips.forEach(c => c.setAttribute("aria-selected", String(c === chip)));
    });
  });

  // Lightbox
  const lightbox = document.getElementById("lightbox");
  const lbImg = document.getElementById("lbImg");
  const lbCap = document.getElementById("lbCap");
  const lbClose = document.getElementById("lbClose");

  function openLb(src, cap, alt) {
    if (!lightbox || !lbImg || !lbCap) return;
    lbImg.src = src;
    lbImg.alt = alt || "";
    lbCap.textContent = cap || "";
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
  }
  function closeLb() {
    if (!lightbox) return;
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    if (lbImg) lbImg.src = "";
  }

  cards.forEach(card => {
    card.addEventListener("click", () => {
      const img = card.querySelector("img");
      const cap = card.querySelector("figcaption")?.textContent || "";
      if (img) openLb(img.src, cap, img.alt);
    });
  });

  if (lbClose) lbClose.addEventListener("click", closeLb);
  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLb();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeLb();
    });
  }

  // Copy email template
  const copyBtn = document.getElementById("copyEmail");
  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      const code = document.querySelector(".template code");
      if (!code) return;
      try{
        await navigator.clipboard.writeText(code.textContent || "");
        copyBtn.textContent = "Copié ✅";
        setTimeout(() => (copyBtn.textContent = "Copier"), 1400);
      }catch{
        // fallback
        const range = document.createRange();
        range.selectNodeContents(code);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
        copyBtn.textContent = "Sélectionné (Ctrl+C)";
        setTimeout(() => (copyBtn.textContent = "Copier"), 1600);
      }
    });
  }
})();
