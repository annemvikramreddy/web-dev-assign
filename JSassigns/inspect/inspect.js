// Request returned image +xml

fetch('https://api.github.com/users/octocat')
  .then(response => {
    if (!response.ok) throw new Error('Network error');
    return response.json();
  })
  .then(data => {
    console.log('User login:', data.login);         
    console.log('Avatar URL:', data.avatar_url);
  })
  .catch(err => console.error('Fetch failed:', err));

// Request Line: Specifies the method, the path, and the HTTP version.


// Headers: Key–value pairs that give metadata (e.g., content types, authentication, host).

// Blank Line: A single empty line that separates headers from the body.

// Body: Carries data for methods like POST or PUT (e.g., form data, JSON payload).

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(res => res.json())
  .then(post => {
    console.log('Post Title:', post.title);
    console.log('Post Body:', post.body);
  })
  .catch(err => console.error(err));

  fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
  .then(res => res.json())
  .then(comments => {
    console.log('Comments for Post 1:');
    comments.forEach(c =>
      console.log(`- ${c.name} (${c.email}): ${c.body}`)
    );
  })
  .catch(err => console.error(err));
