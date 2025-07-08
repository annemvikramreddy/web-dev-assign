

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return response.json();                   // parse the JSON body
  })
  .then(posts => {
    // posts is an array of post objects; log titles of the first 5
    posts.slice(0, 5).forEach((post, i) => {
      console.log(`Post ${i + 1} Title:`, post.title);
    });
  })
  .catch(err => console.error('Fetch failed:', err));
// Promise {<pending>}
// VM88:9 Post 1 Title: sunt aut facere repellat provident occaecati excepturi optio reprehenderit
// VM88:9 Post 2 Title: qui est esse
// VM88:9 Post 3 Title: ea molestias quasi exercitationem repellat qui ipsa sit aut
// VM88:9 Post 4 Title: eum et est occaecati
// VM88:9 Post 5 Title: nesciunt quas odio
// const newPost = {
//   title: 'My New Title',
//   body: 'Here’s the content of my new post.'
// };

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',                             // 1. specify POST
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(newPost)               // 2. convert object → JSON string
})
  .then(response => {
    console.log('Status Code:', response.status);
    return response.json();
  })
  .then(data => {
    console.log('Response Body:', data);
  })
  .catch(err => console.error('POST failed:', err));

// Promise {<pending>}
// VM92:12 Status Code: 201
// VM92:16 Response Body: {title: 'My New Title', body: 'Here’s the content of my new post.', id: 101}
// const updatedPost = {
//   title: 'Updated Title',
//   body: 'This is the updated content.'
// };

fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',                              // update existing post 1
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(updatedPost)
})
  .then(response => {
    console.log('Status Code:', response.status);
    return response.json();
  })
  .then(data => {
    console.log('Updated Resource:', data);
  })
  .catch(err => console.error('PUT failed:', err));

// Promise {<pending>}
// VM96:12 Status Code: 200
// VM96:16 Updated Resource: {title: 'Updated Title', body: 'This is the updated content.', id: 1}
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE'
})
  .then(response => {
    console.log('Status Code:', response.status);
    // No JSON body expected on successful DELETE
  })
  .catch(err => console.error('DELETE failed:', err));

// Promise {<pending>}
// VM100:5 Status Code: 200
// 1. Create a sample object
const originalObj = { name: 'Raju', age: 30, skills: ['Java', 'Spring'] };

// 2. Object → JSON string
const jsonString = JSON.stringify(originalObj);

// 3. JSON string → JS object
const parsedObj = JSON.parse(jsonString);

// 4. Log all three
console.log('Original Object:', originalObj);
console.log('JSON String:', jsonString);
console.log('Parsed Object:', parsedObj);

// VM104:11 Original Object: {name: 'Raju', age: 30, skills: Array(2)}
// VM104:12 JSON String: {"name":"Raju","age":30,"skills":["Java","Spring"]}
// VM104:13 Parsed Object: {name: 'Raju', age: 30, skills: Array(2)}
// undefined

// 200 OK (2xx Success): The request was successful and the server returned the requested data—“Everything’s fine—here’s the comic book you asked for.”

// 201 Created (2xx Success): The request succeeded and a new resource was created, often with a Location header—“Your new LEGO model was built and placed on the shelf.”

// 204 No Content (2xx Success): The request succeeded but there’s no response body—“I shredded that paper—there’s nothing left to show you.”

// 400 Bad Request (4xx Client Error): The server can’t process the request due to malformed syntax or invalid data—“Your instructions were gibberish—I can’t follow them.”

// 401 Unauthorized (4xx Client Error): Authentication is required and has failed or is missing—“You need a VIP pass to enter this ride.”

// 403 Forbidden (4xx Client Error): The server understood the request but refuses to authorize it—“You have a ticket, but this area is off-limits to you.”

// 404 Not Found (4xx Client Error): The requested resource could not be found (wrong URL or it doesn’t exist)—“That page isn’t in the book—they never wrote it.”

// 500 Internal Server Error (5xx Server Error): A generic error occurred on the server while processing the request—“The theme park’s power went out—something broke backstage.”

// 502 Bad Gateway (5xx Server Error): The server, acting as a gateway, received an invalid response from an upstream server—“Your message got lost between the walkie-talkies.”

// 503 Service Unavailable (5xx Server Error): The server is temporarily unable to handle the request (overloaded or down for maintenance)—“The snack bar is closed for cleaning—try again later.”