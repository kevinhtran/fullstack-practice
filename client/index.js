const results = fetch("http://localhost:3000/about");
results.then((data) => data.json()).then((body) => console.log(body));
