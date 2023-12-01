process.on('message', (message) => {
  console.log('message', message);
  let result = 0;
  for (let index = 0; index < 5e9; index++) {
    result += 1;
  }
  process.send(result);
});