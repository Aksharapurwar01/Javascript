function createUserFetcher() {
    let fetchCount = 0; // This variable is in the closure scope

    return async function() {
        fetchCount++; // Increment the fetch count
        console.log(`Fetch attempt: ${fetchCount}`);

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log('Fetched User Data:', data);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };
}

const fetchUserData = createUserFetcher(); // Create a new user fetcher instance

// Call the fetchUserData function every 5 seconds
setInterval(fetchUserData, 5000);
