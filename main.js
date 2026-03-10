// main.js
document.addEventListener("DOMContentLoaded", () => {
    console.log("Site carregado com sucesso!");

    // Exemplo: adicionar efeito de clique nos botões
    document.querySelectorAll(".btn").forEach(btn => {
        btn.addEventListener("click", () => {
            console.log("Botão clicado:", btn);
        });
    });

    // Seleciona o banner
    const banner = document.getElementById("banner");
    if (banner) {
        let offsetX, offsetY, isDragging = false;

        banner.addEventListener("mousedown", (e) => {
            isDragging = true;
            const rect = banner.getBoundingClientRect();
            offsetX = e.clientX - rect.left;
            offsetY = e.clientY - rect.top;

            // garante que o banner esteja em posição absoluta
            banner.style.position = "absolute";
        });

        document.addEventListener("mousemove", (e) => {
            if (isDragging) {
                banner.style.left = (e.clientX - offsetX) + "px";
                banner.style.top = (e.clientY - offsetY) + "px";
            }
        });

        document.addEventListener("mouseup", () => {
            isDragging = false;
        });
    } else {
        console.warn("Elemento #banner não encontrado no DOM.");
    }
});