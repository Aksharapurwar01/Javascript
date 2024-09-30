const promise1 = fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(user => {
        if (user.length) {
            return user;
        } else {
            throw new Error("No data in promise1");
        }
    });

const promise2 = fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(user => {
        if (user.length) {
            return user;
        } else {
            throw new Error("No data in promise2");
        }
    });

const promise3 = fetch("https://jsonplaceholder.typicode.com/comments")
    .then(response => response.json())
    .then(user => {
        if (user.length) {
            return user;
        } else {
            throw new Error("No data in promise3");
        }
    });

Promise.race([promise1, promise2, promise3])
    .then(response => {
        console.log(response);  // Logs the first successful response
    })
    .catch(err => {
        console.error("Error in race: ", err);  // Catches any error from the fastest promise
    });
