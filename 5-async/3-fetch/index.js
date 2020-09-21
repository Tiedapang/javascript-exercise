function fetchData(url) {
  // <-- start
  return fetch(url)
    .then(response => {
      if (response.status === 200) {
        return response.json();
      }
      return Promise.reject(new Error('error'));
    })
    .catch(err => {
      console.log(err);
    });
  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(URL)
  .then(result => {
    document.writeln(result.name);
  })
  .catch(error => {
    console.error(error);
  });
