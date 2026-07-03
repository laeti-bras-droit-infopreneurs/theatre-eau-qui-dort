/* =====================================================================
   THÉÂTRE DE L'EAU QUI DORT — Interactions
   Vanilla JS, aucune dépendance. Progressive enhancement.
   ===================================================================== */
(function () {
  "use strict";

  /* ---------- Header : état au scroll ---------- */
  var header = document.querySelector(".site-header");
  function onScroll() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Menu mobile ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
    });
    // Ferme au clic sur un lien
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }

  /* ---------- Reveal on scroll ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------- Filtres agenda ---------- */
  var filterBtns = document.querySelectorAll("[data-filter]");
  if (filterBtns.length) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var f = btn.getAttribute("data-filter");
        filterBtns.forEach(function (b) { b.classList.remove("is-active"); });
        btn.classList.add("is-active");
        document.querySelectorAll("[data-status]").forEach(function (row) {
          var show = f === "all" || row.getAttribute("data-status") === f;
          row.classList.toggle("is-hidden", !show);
        });
      });
    });
  }

  /* ---------- Lightbox galerie ---------- */
  var galFigures = document.querySelectorAll(".gallery figure");
  if (galFigures.length) {
    var lb = document.createElement("div");
    lb.className = "lightbox";
    lb.setAttribute("role", "dialog");
    lb.setAttribute("aria-modal", "true");
    lb.innerHTML =
      '<button class="lightbox__close" aria-label="Fermer">&times;</button>' +
      '<img alt="" />' +
      '<p class="lightbox__cap"></p>';
    document.body.appendChild(lb);
    var lbImg = lb.querySelector("img");
    var lbCap = lb.querySelector(".lightbox__cap");
    var closeBtn = lb.querySelector(".lightbox__close");

    function openLb(src, cap, alt) {
      lbImg.src = src;
      lbImg.alt = alt || "";
      lbCap.textContent = cap || "";
      lb.classList.add("is-open");
      document.body.style.overflow = "hidden";
      closeBtn.focus();
    }
    function closeLb() {
      lb.classList.remove("is-open");
      document.body.style.overflow = "";
      lbImg.src = "";
    }
    galFigures.forEach(function (fig) {
      var img = fig.querySelector("img");
      var cap = fig.querySelector("figcaption");
      fig.setAttribute("tabindex", "0");
      fig.setAttribute("role", "button");
      function trigger() {
        openLb(img.getAttribute("data-full") || img.src, cap ? cap.textContent : "", img.alt);
      }
      fig.addEventListener("click", trigger);
      fig.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); trigger(); }
      });
    });
    closeBtn.addEventListener("click", closeLb);
    lb.addEventListener("click", function (e) { if (e.target === lb) closeLb(); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && lb.classList.contains("is-open")) closeLb();
    });
  }

  /* ---------- Formulaire contact (fallback mailto) ---------- */
  /* Si vous branchez un service (Formspree, etc.), retirez ce bloc
     et remplacez l'attribut action du <form>. Voir README. */
  var form = document.querySelector("[data-mailto]");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var to = form.getAttribute("data-mailto");
      var d = new FormData(form);
      var subject = encodeURIComponent("[Diffusion] Contact site — " + (d.get("nom") || ""));
      var body = encodeURIComponent(
        "Nom : " + (d.get("nom") || "") + "\n" +
        "Structure : " + (d.get("structure") || "") + "\n" +
        "Fonction : " + (d.get("fonction") || "") + "\n" +
        "Email : " + (d.get("email") || "") + "\n" +
        "Téléphone : " + (d.get("telephone") || "") + "\n\n" +
        "Message :\n" + (d.get("message") || "")
      );
      window.location.href = "mailto:" + to + "?subject=" + subject + "&body=" + body;
    });
  }

  /* ---------- Année courante footer ---------- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
