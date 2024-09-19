
// "Async/await is a modern way to handle asynchronous operations in JavaScript. It allows us to write asynchronous code that looks more like synchronous code, improving readability and maintainability. async functions return a Promise, and we can use await to pause execution until the Promise resolves. This eliminates the need for .then() chaining and helps avoid callback hell. Error handling is also simplified by using try/catch blocks."


async function getData() {
    try {
      const response = await fetch('url');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  