
function goToForums() {
    alert("Forums");
}

function togglePost(post) {
    var content = post.querySelector('.post-content');
    var readMore = post.querySelector('.read-more');
    if (content.classList.contains('expanded')) {
        content.classList.remove('expanded');
        readMore.textContent = 'Read More';
    } else {
        content.classList.add('expanded');
        readMore.textContent = 'Read Less';
    }
}