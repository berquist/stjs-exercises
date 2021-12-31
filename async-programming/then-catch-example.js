new Promise((resolve, reject) => reject(new Error('failure')))
    .then(err => console.log(err))
    .catch(err => console.log(err));
