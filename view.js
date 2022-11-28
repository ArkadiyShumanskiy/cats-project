const renderApp = () => {
  const app = document.createElement("div");
  app.setAttribute("id", "app");
  const mainDiv = document.querySelector("#root");
  mainDiv.appendChild(app);

  const header = document.createElement("div");
  header.setAttribute("class", "header");

  const headerH1 = document.createElement("h1");
  headerH1.setAttribute("class", "h1");
  headerH1.innerText = "Страница котиков";
  header.appendChild(headerH1);

  const actionBar = document.createElement("div");
  actionBar.setAttribute("id", "actionBar");
  actionBar.setAttribute("class", "actionBar");
  const addCatButton = document.createElement("button");
  addCatButton.setAttribute("id", "addCatButton");
  addCatButton.setAttribute("class", "addCatButton");
  addCatButton.innerText = "ADD CAT";
  actionBar.appendChild(addCatButton);

  header.appendChild(actionBar);

  const cardWrapper = document.createElement("div");
  cardWrapper.setAttribute("class", "cardWrapper");
  cardWrapper.setAttribute("id", "cardWrapper");

  const footer = document.createElement("div");
  footer.setAttribute("class", "footer");
  const footerP = document.createElement("p");
  footerP.setAttribute("class", "footerP");
  footerP.innerText = "©2022 All rights reserved";
  footer.appendChild(footerP);

  app.appendChild(header);
  app.appendChild(cardWrapper);
  app.appendChild(footer);
};

const renderCat = (cat) => {
  const card = document.createElement("div");
  card.setAttribute("class", "card");

  const imgCardWrapper = document.createElement("div");
  imgCardWrapper.setAttribute("class", "imgWrapper");

  const imgCard = document.createElement("img");
  imgCard.setAttribute("class", "img");
  imgCard.setAttribute("src", cat.img_link);
  imgCardWrapper.appendChild(imgCard);

  const nameCard = document.createElement("div");
  nameCard.setAttribute("class", "name");
  nameCard.innerText = cat.name;

  // const descriptCard = document.createElement("div");
  // descriptCard.setAttribute("class", "descript");
  // descriptCard.innerText = cat.description;

  const rateCard = document.createElement("div");
  rateCard.setAttribute("class", "rate");
  rateCard.innerText = `Rate: ${cat.rate}`;

  card.appendChild(imgCardWrapper);
  card.appendChild(nameCard);
  // card.appendChild(descriptCard);
  card.appendChild(rateCard);

  card.onclick = () => {
    openDetailCatInfo(cat);
  };

  document.querySelector("#cardWrapper").appendChild(card);
};

const renderCats = (cats) => {
  cats.forEach((itm) => {
    renderCat(itm);
  });
};

const openDetailCatInfo = (cat) => {
  const overlay = document.createElement("div");
  overlay.setAttribute("class", "overlay");
  overlay.setAttribute("id", "overlay");

  const card = document.createElement("div");
  card.setAttribute("class", "cardDetail");

  const imgCardWrapper = document.createElement("div");
  imgCardWrapper.setAttribute("class", "imgWrapperDetail");

  const imgCard = document.createElement("img");
  imgCard.setAttribute("class", "img");
  imgCard.setAttribute("src", cat.img_link);
  imgCardWrapper.appendChild(imgCard);

  const nameCard = document.createElement("div");
  nameCard.setAttribute("class", "nameDetail");
  nameCard.innerText = "name: " + cat.name;

  const ageCard = document.createElement("div");
  ageCard.setAttribute("class", "ageDetail");
  ageCard.innerText = "age: " + cat.age;

  const descriptCard = document.createElement("div");
  descriptCard.setAttribute("class", "descriptDetail");
  descriptCard.innerText = "description: " + cat.description;

  const rateCard = document.createElement("div");
  rateCard.setAttribute("class", "rateDetail");
  rateCard.innerText = `Rate: ${cat.rate}`;

  const changeButton = document.createElement("div");
  changeButton.setAttribute("class", "changeButton");
  const btnChange = document.createElement("button");
  btnChange.setAttribute("id", "btnChange");
  btnChange.innerText = "Change";
  changeButton.appendChild(btnChange);

  const deleteButtonRow = document.createElement("div");
  deleteButtonRow.setAttribute("class", "deleteButton");
  const btnDeleteCat = document.createElement("button");
  btnDeleteCat.setAttribute("id", "btnDeleteCat");
  btnDeleteCat.innerText = "Delete";
  deleteButtonRow.appendChild(btnDeleteCat);

  const closeButton = document.createElement("div");
  closeButton.setAttribute("class", "closeButton");
  const btnClose = document.createElement("button");
  btnClose.setAttribute("id", "btnClose");
  btnClose.innerText = "Close";
  closeButton.appendChild(btnClose);

  card.appendChild(imgCardWrapper);
  card.appendChild(nameCard);
  card.appendChild(ageCard);
  card.appendChild(descriptCard);
  card.appendChild(rateCard);
  card.appendChild(changeButton);
  card.appendChild(deleteButtonRow);
  card.appendChild(closeButton);

  overlay.appendChild(card);

  document.querySelector("#cardWrapper").appendChild(overlay);

  btnClose.onclick = () => {
    // closeCatForm();
    addCat(cat).then(() => {
      closeCatForm();
      fetchCats();
    });
  };

  btnChange.onclick = () => {
    closeDetailsCatInfo();
    openChangeDetailCatInfo(cat);
  };

  btnDeleteCat.onclick = () => {
    deleteCat(cat).then(() => {
      closeDetailsCatInfo();
      fetchCats()
        .then((response) =>
          response.json().then((respJson) => {
            removeCards();
            renderCats(respJson.data);
          })
        )
        .catch((error) => console.log(error));
    });
  };
};

const openCatForm = () => {
  const overlay = document.createElement("div");
  overlay.setAttribute("class", "overlay");
  overlay.setAttribute("id", "overlay");

  const formWrapper = document.createElement("div");
  formWrapper.setAttribute("class", "formWrapper");

  const idRow = document.createElement("div");
  idRow.setAttribute("class", "formRowId");
  const idLabel = document.createElement("label");
  idLabel.innerText = "id: ";
  const idInput = document.createElement("input");
  idInput.setAttribute("id", "idInput");
  idInput.setAttribute("class", "input");
  idLabel.appendChild(idInput);
  idRow.appendChild(idLabel);

  const ageRow = document.createElement("div");
  ageRow.setAttribute("class", "formRowAge");
  const ageLabel = document.createElement("label");
  ageLabel.innerText = "age: ";
  const ageInput = document.createElement("input");
  ageInput.setAttribute("id", "ageInput");
  ageInput.setAttribute("class", "input");
  ageLabel.appendChild(ageInput);
  ageRow.appendChild(ageLabel);

  const nameRow = document.createElement("div");
  nameRow.setAttribute("class", "formRowName");
  const nameLabel = document.createElement("label");
  nameLabel.innerText = "name: ";
  const nameInput = document.createElement("input");
  nameInput.setAttribute("id", "nameInput");
  nameInput.setAttribute("class", "input");
  nameLabel.appendChild(nameInput);
  nameRow.appendChild(nameLabel);

  const rateRow = document.createElement("div");
  rateRow.setAttribute("class", "formRowRate");
  const rateLabel = document.createElement("label");
  rateLabel.innerText = "rate: ";
  const rateInput = document.createElement("input");
  rateInput.setAttribute("id", "rateInput");
  rateInput.setAttribute("class", "input");
  rateLabel.appendChild(rateInput);
  rateRow.appendChild(rateLabel);

  const descriptionRow = document.createElement("div");
  descriptionRow.setAttribute("class", "formRowDescrip");
  const descriptionLabel = document.createElement("label");
  descriptionLabel.innerText = "description: ";
  const descriptionInput = document.createElement("input");
  descriptionInput.setAttribute("id", "descriptionInput");
  descriptionInput.setAttribute("class", "input");
  descriptionLabel.appendChild(descriptionInput);
  descriptionRow.appendChild(descriptionLabel);

  const favouriteRow = document.createElement("div");
  favouriteRow.setAttribute("class", "formRowFavour");
  const favouriteLabel = document.createElement("label");
  favouriteLabel.innerText = "favourite ";
  const favouriteInput = document.createElement("input");
  favouriteInput.setAttribute("id", "favouriteInput");
  favouriteInput.setAttribute("class", "input");
  favouriteInput.setAttribute("type", "checkbox");
  favouriteLabel.appendChild(favouriteInput);
  favouriteRow.appendChild(favouriteLabel);

  const imgLinkRow = document.createElement("div");
  imgLinkRow.setAttribute("class", "formRowImgLink");
  const imgLinkLabel = document.createElement("label");
  imgLinkLabel.innerText = "image: ";
  const imgLinkInput = document.createElement("input");
  imgLinkInput.setAttribute("id", "imgLinkInput");
  imgLinkInput.setAttribute("class", "input");
  imgLinkLabel.appendChild(imgLinkInput);
  imgLinkRow.appendChild(imgLinkLabel);

  const btnSaveRow = document.createElement("div");
  btnSaveRow.setAttribute("class", "btnRow");
  const btnSave = document.createElement("button");
  btnSave.setAttribute("id", "btnSave");
  btnSave.innerText = "SAVE";
  btnSaveRow.appendChild(btnSave);

  formWrapper.appendChild(idRow);
  formWrapper.appendChild(ageRow);
  formWrapper.appendChild(nameRow);
  formWrapper.appendChild(rateRow);
  formWrapper.appendChild(descriptionRow);
  formWrapper.appendChild(favouriteRow);
  formWrapper.appendChild(imgLinkRow);
  formWrapper.appendChild(btnSaveRow);

  overlay.appendChild(formWrapper);

  document.querySelector("#cardWrapper").appendChild(overlay);

  btnSave.onclick = () => {
    const cat = {
      id: Number(document.querySelector("#idInput").value),
      age: Number(document.querySelector("#ageInput").value),
      name: document.querySelector("#nameInput").value,
      rate: Number(document.querySelector("#rateInput").value),
      description: document.querySelector("#descriptionInput").value,
      favourite: document.querySelector("#favouriteInput").checked,
      img_link: document.querySelector("#imgLinkInput").value,
    };
    // closeCatForm();
    addCat(cat).then(() => {
      closeCatForm();
      fetchCats()
        .then((response) =>
          response.json().then((respJson) => {
            removeCards();
            renderCats(respJson.data);
          })
        )
        .catch((error) => console.log(error));
    });
  };
};

const openChangeDetailCatInfo = (cat) => {
  const overlay = document.createElement("div");
  overlay.setAttribute("class", "overlay");
  overlay.setAttribute("id", "overlay");

  const card = document.createElement("div");
  card.setAttribute("class", "cardDetail");

  const imgCardWrapper = document.createElement("div");
  imgCardWrapper.setAttribute("class", "imgWrapperDetail");

  const imgCard = document.createElement("img");
  imgCard.setAttribute("class", "img");
  imgCard.setAttribute("src", cat.img_link);
  imgCardWrapper.appendChild(imgCard);

  const nameRow = document.createElement("div");
  nameRow.setAttribute("class", "formChangeRowName");
  const nameLabel = document.createElement("label");
  nameLabel.innerText = "name: ";
  const nameInput = document.createElement("input");
  nameInput.setAttribute("id", "nameInput");
  nameInput.setAttribute("class", "input");
  nameInput.setAttribute("value", cat.name);
  nameLabel.appendChild(nameInput);
  nameRow.appendChild(nameLabel);

  const ageRow = document.createElement("div");
  ageRow.setAttribute("class", "formChangeRowAge");
  const ageLabel = document.createElement("label");
  ageLabel.innerText = "age: ";
  const ageInput = document.createElement("input");
  ageInput.setAttribute("id", "ageInput");
  ageInput.setAttribute("class", "input");
  ageInput.setAttribute("value", cat.age);
  ageLabel.appendChild(ageInput);
  ageRow.appendChild(ageLabel);

  const descriptionRow = document.createElement("div");
  descriptionRow.setAttribute("class", "formChangeRowDescrip");
  const descriptionLabel = document.createElement("label");
  descriptionLabel.innerText = "description: ";
  const descriptionInput = document.createElement("input");
  descriptionInput.setAttribute("id", "descriptionInput");
  descriptionInput.setAttribute("class", "input");
  descriptionInput.setAttribute("value", cat.description);
  descriptionLabel.appendChild(descriptionInput);
  descriptionRow.appendChild(descriptionLabel);

  const rateRow = document.createElement("div");
  rateRow.setAttribute("class", "formChangeRowRate");
  const rateLabel = document.createElement("label");
  rateLabel.innerText = "rate: ";
  const rateInput = document.createElement("input");
  rateInput.setAttribute("id", "rateInput");
  rateInput.setAttribute("class", "input");
  rateInput.setAttribute("value", cat.rate);
  rateLabel.appendChild(rateInput);
  rateRow.appendChild(rateLabel);

  const favouriteRow = document.createElement("div");
  favouriteRow.setAttribute("class", "formChangeRowFavour");
  const favouriteLabel = document.createElement("label");
  favouriteLabel.innerText = "favourite ";
  const favouriteInput = document.createElement("input");
  favouriteInput.setAttribute("id", "favouriteInput");
  favouriteInput.setAttribute("class", "input");
  favouriteInput.setAttribute("type", "checkbox");
  if (cat.favourite) {
    favouriteInput.setAttribute("checked", true);
  }
  favouriteLabel.appendChild(favouriteInput);
  favouriteRow.appendChild(favouriteLabel);

  const imgLinkRow = document.createElement("div");
  imgLinkRow.setAttribute("class", "formChangeRowImgLink");
  const imgLinkLabel = document.createElement("label");
  imgLinkLabel.innerText = "image: ";
  const imgLinkInput = document.createElement("input");
  imgLinkInput.setAttribute("id", "imgLinkInput");
  imgLinkInput.setAttribute("class", "input");
  imgLinkInput.setAttribute("value", cat.img_link);
  imgLinkLabel.appendChild(imgLinkInput);
  imgLinkRow.appendChild(imgLinkLabel);

  const saveChangeButton = document.createElement("div");
  saveChangeButton.setAttribute("class", "saveChangeButton");
  const btnSaveChange = document.createElement("button");
  btnSaveChange.setAttribute("id", "btnSaveChange");
  btnSaveChange.innerText = "Save";
  saveChangeButton.appendChild(btnSaveChange);

  card.appendChild(nameRow);
  card.appendChild(ageRow);
  card.appendChild(descriptionRow);
  card.appendChild(rateRow);
  card.appendChild(favouriteRow);
  card.appendChild(imgLinkRow);
  card.appendChild(imgCardWrapper);
  card.appendChild(saveChangeButton);
  overlay.appendChild(card);

  document.querySelector("#cardWrapper").appendChild(overlay);

  btnSaveChange.onclick = () => {
    cat.age = document.querySelector("#ageInput").value;
    cat.name = document.querySelector("#nameInput").value;
    cat.description = document.querySelector("#descriptionInput").value;
    cat.rate = document.querySelector("#rateInput").value;
    cat.favourite = document.querySelector("#favouriteInput").checked;
    cat.img_link = document.querySelector("#imgLinkInput").value;
    editCat(cat).then(() => {
      closeChangeDetailCatInfo();
      fetchCats()
        .then((response) =>
          response.json().then((respJson) => {
            removeCards();
            renderCats(respJson.data);
          })
        )
        .catch((error) => console.log(error));
    });
  };
};

const closeCatForm = () => {
  document.querySelector("#overlay").remove();
};

const closeDetailsCatInfo = () => {
  document.querySelector("#overlay").remove();
};

const closeChangeDetailCatInfo = () => {
  document.querySelector("#overlay").remove();
};

const removeCards = () => {
  document.querySelector("#cardWrapper").innerHTML = "";
};
