const sm = document.getElementById('small');
const md = document.getElementById('medium');
const bg = document.getElementById('big');
const a = document.getElementById('a');

const clickHandler = (e) => {
    e.stopPropagation();
    if (e.target.tagName === "BUTTON") {
        alert(e.target.id);
    }

};

const clickHandler2 = (e) => {
    console.log(e);
};

/*sm.onclick = clickHandler;
sm.onclick = null;*/

sm.addEventListener('click', clickHandler);
/*sm.addEventListener('click', clickHandler2);*/
/*sm.removeEventListener('click', clickHandler);*/

const currentTargetId = (e) => {
    e.stopPropagation();
    alert(e.currentTarget.id);
}

md.addEventListener('click', currentTargetId);
bg.addEventListener('click', currentTargetId);

a.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Ciao raga!')

})
