
let count = 0;
const emoji = document.getElementsByClassName("emoji");
const changeemoji = (e) => {
    if (e.target.classList[1]=="active") {
        count++;
        e.target.classList.toggle("active");
        count = count % emoji.length;
        emoji[count].classList.toggle("active");
    }
}
Array.from(emoji).forEach(element => {
    element.addEventListener("click", changeemoji);
     
});

