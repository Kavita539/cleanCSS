const toasts = document.querySelectorAll(".toast");
const [sampleToast1, sampleToast2, topRightToast, bottomCenterToast] = toasts

const toastDemoBtns = document.querySelectorAll(".toast-demo-btn");
const [topRightDemoBtn, bottomCenterDemoBtn] = toastDemoBtns;

const tostCloseBtns = document.querySelectorAll(".toast-close-btn");
const [topRightCloseBtn, bottomCenterCloseBtn] = tostCloseBtns;

topRightDemoBtn.addEventListener("click", () => {
    topRightToast.style.display = "flex";
    setTimeout(() => {
        topRightToast.style.display = "none";
    }, 2000);
});

bottomCenterDemoBtn.addEventListener("click", () => {
    bottomCenterToast.style.display = "flex";
    setTimeout(() => {
        bottomCenterToast.style.display = "none";
    }, 2000);
});

topRightCloseBtn.addEventListener("click", () => {
    topRightToast.style.display = "none";
});

bottomCenterCloseBtn.addEventListener("click", () => {
    bottomCenterToast.style.display = "none";
});