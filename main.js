const main = () => {
  renderApp();

  fetchCats()
    .then((response) =>
      response.json().then((respJson) => {
        renderCats(respJson.data);
      })
    )
    .catch((error) => console.log(error));

  document.querySelector("#addCatButton").onclick = () => {
    openCatForm();
  };
};
main();
