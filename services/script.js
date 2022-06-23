let viewMoreCards = document.getElementById('viewMoreCards');
let seeMoreBtn = document.getElementById('see-more');
let seeLessBtn = document.getElementById('see-less');

function seeMore(){
    viewMoreCards.style.display="flex";
    seeMoreBtn.style.display="none";
    seeLessBtn.style.display="flex";
}
function seeLess(){
    viewMoreCards.style.display="none";
    seeMoreBtn.style.display="flex";
    seeLessBtn.style.display="none";
}