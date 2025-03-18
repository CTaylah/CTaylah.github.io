document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const post = urlParams.get('post');

    if (!post) {
        console.error('No post specified');
        return;
    }

    fetch(`static/posts/${post}.md`)
        .then(response => response.text())
        .then(markdown => {
            const postTitle = post.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
            document.getElementById('post-title').textContent = postTitle;
            document.getElementById('post-content').innerHTML = marked.parse(markdown);
            Prism.highlightAll();
        })
        .catch(error => {
            console.error('Error fetching the Markdown file:', error);
        });
});