const offerStatus = document.querySelectorAll('.status');
offerStatus.forEach(element => {
    if (element.innerText == "Interested") {
        element.style.backgroundColor = "#0B4F6C";
    } else if (element.innerText == "CV sent") {
        element.style.backgroundColor = "#A6A15E";
        element.style.color = "#000";
    } else if (element.innerText == "Negative") {
        element.style.backgroundColor = "#C69F89";
        element.style.color = "#000";
    } else if (element.innerText == "Interview") {
        element.style.backgroundColor = "#034C3C";
    } 
})