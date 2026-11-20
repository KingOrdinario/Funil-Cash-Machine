// BUSINESSUP HUB — Funil Cash Machine — Viral
// Checkout is centralized for easy future edits.
const CHECKOUT_URL = "https://go.hotmart.com/R108585614Y";

document.getElementById("year").textContent = new Date().getFullYear();

// Keep every CTA consistent with the centralized checkout configuration.
document.querySelectorAll("[data-cta]").forEach((cta) => {
  cta.href = CHECKOUT_URL;
  cta.addEventListener("click", () => {
    // Optional analytics hooks:
    // window.dataLayer?.push({ event: "cta_click", cta_location: cta.dataset.cta });
    // Meta Pixel: fbq?.("track", "InitiateCheckout");
  });
});

// Accessible FAQ behavior is provided natively by <details>/<summary>.
// Optional analytics hooks can be added without affecting checkout.
document.querySelectorAll(".faq-list details").forEach((item) => {
  item.addEventListener("toggle", () => {
    if (item.open) {
      // Optional: window.dataLayer?.push({ event: "faq_open", faq_question: item.querySelector("summary").textContent.trim() });
    }
  });
});
