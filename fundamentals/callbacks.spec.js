const fetchData = (data) => console.log(data);

// // Dont do this!
// test("the data is peanut butter", () => {
//   function callback(data) {
//     expect(data).toBe("peanut butter");
//   }

//   fetchData(callback);
// });

test("the data is peanut butter", (done) => {
  function callback(data) {
    try {
      expect(data).toBe("peanut butter");
      done();
    } catch (err) {
      done(err);
    }
  }

  fetchData(callback);
});
