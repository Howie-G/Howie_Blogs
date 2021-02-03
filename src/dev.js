if (module.hot) {
  module.hot.accept((err) => {
    if (err) {
      console.log("err: ", err);
    }
  });
}
