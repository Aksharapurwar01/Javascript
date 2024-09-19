function firstCallback(callback) {
    setTimeout(() => {
      console.log("First callback executed.");
      callback(null, "Data from first callback");
    }, 1000);
  }
  
  function secondCallback(data, callback) {
    setTimeout(() => {
      console.log("Second callback executed.");
      if (data === "error") {
        callback("Error occurred in second callback"); // Simulating an error
      } else {
        callback(null, "Data from second callback");
      }
    }, 1000);
  }
  
  function thirdCallback(data, callback) {
    setTimeout(() => {
      console.log("Third callback executed.");
      callback(null, "Data from third callback");
    }, 1000);
  }
  
  // Initiating the callback sequence
  firstCallback((err, firstResult) => {
    if (err) {
      console.error("Error in first callback: ", err);
      return; // Stops further execution
    }
  
    secondCallback("error", (err, secondResult) => {
      if (err) {
        console.error("Error in second callback: ", err);
        return; // Stops further execution
      }
  
      thirdCallback(secondResult, (err, thirdResult) => {
        if (err) {
          console.error("Error in third callback: ", err);
          return;
        }
  
        console.log("Final result: ", thirdResult);
      });
    });
  });
  