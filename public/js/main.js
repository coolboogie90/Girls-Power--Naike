document.querySelector("#filter-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    let url =
        "/dashboard?" + new URLSearchParams(new FormData(e.target)).toString();

    let response = await fetch(url, {
        method: "GET",
    });

    let html = await response.text();

    document.querySelector("body").innerHTML = html;

    addColorClasses();
});

/*-----Dialog-----*/
const links = document.querySelectorAll(".more");

links.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const dialogId = "dialog-" + e.target.id.split("-")[1];
        const dialog = document.querySelector("#" + dialogId);
        dialog.showModal();
        dialog.classList.add("open");
    });
});

const closeButtons = document.querySelectorAll(".closeDialog");
closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const openDialog = button.parentElement;
        openDialog.classList.remove("open");
        setTimeout(() => openDialog.close(), 300);
    });
});

/*-----Status Color-----*/
const statusMapping = {
    Interested: 1,
    "Resume sent": 2,
    Interview: 3,
    Negative: 4,
    Archive: 5,
};

const addColorClasses = () => {
    const cards = document.querySelectorAll(".dashboard__card");

    cards.forEach((card) => {
        const offerStatus = card
            .querySelector(".offerStatus")
            .textContent.trim();
        const offerStatusNumber = statusMapping[offerStatus];
        const moreButton = card.querySelector(".more");

        card.classList.add(`offerStatus-${offerStatusNumber}`);
        moreButton.classList.add(`offerStatus-${offerStatusNumber}`);
    });
};

addColorClasses();
