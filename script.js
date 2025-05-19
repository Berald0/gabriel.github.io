// Simula visualmente o envio do formulário (sem enviar de verdade)
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // impede envio real
    alert("Mensagem enviada (simulação visual).");
    form.reset(); // limpa os campos
  });
});
