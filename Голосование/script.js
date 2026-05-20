document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    const submitBtn = document.getElementById("submitBtn");
    const successAlert = document.getElementById("successAlert");
    const votedForSpan = document.getElementById("votedFor");
    
    let selectedUniName = "";
    let hasVoted = false;

    if(!submitBtn) return; // Защита, если скрипт загрузился на другой странице

    cards.forEach(card => {
        card.addEventListener("click", () => {
            if (hasVoted) return;
            cards.forEach(c => c.classList.remove("selected"));
            card.classList.add("selected");
            selectedUniName = card.getAttribute("data-university");
            submitBtn.disabled = false;
        });
    });

    submitBtn.addEventListener("click", () => {
        if (!selectedUniName || hasVoted) return;
        hasVoted = true;
        votedForSpan.innerText = selectedUniName;
        successAlert.style.display = "block";
        submitBtn.disabled = true;
        cards.forEach(card => {
            card.style.opacity = "0.6";
            card.style.cursor = "default";
        });
    });
});