const studentData = new Promise((resolve, reject) => {
  let responseFromApi=true;
  if (responseFromApi) {
    resolve("success");
  } else {
    reject("error");
  }
});

// studentData.then((res)=>{
// console.log(res)
// })

studentData
  .then((res) => {
    console.log(res); // success
  })
  .catch((err) => {
    console.log(err); // error
  });
