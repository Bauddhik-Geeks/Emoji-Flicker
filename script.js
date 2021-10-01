// const closeface = document.querySelector('.closed');
// const openface = document.querySelector('.open');


//event listener
// closeface.addEventListener('click', () => {
//     if(openface.classList.contains('open')){
//         openface.classList.add('active');
//         closeface.classList.remove('active');
//     }
// });

// openface.addEventListener('click', () => {
//     if(closeface.classList.contains('closed')){
//         closeface.classList.add('active');
//         openface.classList.remove('active');
//     }
// });
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

