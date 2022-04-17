const simpleModalLiveDemoBtn = document.querySelector("#simple-modal-live-demo-btn");
const simpleDialogBtn = document.querySelector("#simple-dialog-live-demo-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");
const modals = document.querySelectorAll(".modal-bg-container");
const [simpleModal, simpleDialogModal] = modals;

simpleModalLiveDemoBtn.addEventListener("click", () => {
    simpleModal.style.display = "flex";
    document.body.style.overflow = "hidden";
});

simpleDialogBtn.addEventListener("click", () => {
    simpleDialogModal.style.display = "flex";
    document.body.style.overflow = "hidden";
});

modalCloseBtns.forEach(closeButton => {
    closeButton.addEventListener("click", () => {
        modals.forEach(modal => {
            modal.style.display = "none";
            document.body.style.overflow = "visible";
        });
    });
});