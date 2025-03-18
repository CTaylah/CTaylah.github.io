document.addEventListener("DOMContentLoaded", function() {
    const posts = [
        'Rust Teaches',
        'Rust IS Cool',
        'Rust is awesome',
    ];

    const blogListContainer = document.getElementById('blog-list');

    posts.forEach(post => {
        const postTitle = post.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
        const postLink = document.createElement('a');
        postLink.href = `blog-post-template.html?post=${post}`;
        postLink.textContent = postTitle;

        const listItem = document.createElement('li');
        listItem.appendChild(postLink);

        blogListContainer.appendChild(listItem);
    });
});