// Configure o número em formato internacional, apenas com dígitos.
// Exemplo: 5511999999999. Deixe vazio até definir o contato oficial.
const WHATSAPP_NUMBER = "";

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
  mainNav?.classList.toggle("is-open", !isOpen);
});

mainNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Abrir menu");
  });
});

document.querySelectorAll("[data-service]").forEach((link) => {
  link.addEventListener("click", () => {
    const serviceSelect = document.querySelector("#player-service");
    if (serviceSelect) serviceSelect.value = link.dataset.service;
  });
});

const form = document.querySelector("#contact-form");
const feedback = document.querySelector("#form-feedback");

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const message = [
    "Olá, GavBoost! Tenho interesse em coaching de Valorant.",
    `Nome: ${data.get("name")}`,
    `Riot ID: ${data.get("riotId")}`,
    `Serviço: ${data.get("service")}`,
  ].join("\n");

  if (!/^\d{10,15}$/.test(WHATSAPP_NUMBER)) {
    feedback.textContent = "O formulário está pronto. Configure o número de WhatsApp no arquivo script.js para receber mensagens.";
    return;
  }

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
});
