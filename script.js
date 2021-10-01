const closeface = document.querySelector('.closed');
const openface = document.querySelector('.open');


//event listener
closeface.addEventListener('click', () => {
    if(openface.classList.contains('open')){
        openface.classList.add('active');
        closeface.classList.remove('active');
    }
});

openface.addEventListener('click', () => {
    if(closeface.classList.contains('closed')){
        closeface.classList.add('active');
        openface.classList.remove('active');
    }
});

const face1 = document.querySelector('.glasses');
const face2 = document.querySelector('.surprise');


//event listener
face1.addEventListener('click', () => {
    if(face2.classList.contains('surprise')){
        face2.classList.add('active');
        face1.classList.remove('active');
    }
});

face2.addEventListener('click', () => {
    if(face1.classList.contains('glasses')){
        face1.classList.add('active');
        face2.classList.remove('active');
    }
});
