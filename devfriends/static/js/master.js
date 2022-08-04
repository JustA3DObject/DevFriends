const dropdownMenu = document.querySelector(".dropdown-menu");
const dropdownButton = document.querySelector(".dropdown-button");

if (dropdownButton) {
    dropdownButton.addEventListener("click", () => {
        dropdownMenu.classList.toggle("show");
    });
}

const conversationThread = document.querySelector(".room__box");
if (conversationThread)
    conversationThread.scrollTop = conversationThread.scrollHeight;