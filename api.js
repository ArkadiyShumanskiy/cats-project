const addCat = (cat) => {
  return fetch("http://sb-cats.herokuapp.com/api/2/ArkadiyShumanskiy/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cat),
  });
};

const fetchCats = () => {
  return fetch("http://sb-cats.herokuapp.com/api/2/ArkadiyShumanskiy/show", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const editCat = (cat) => {
  return fetch(
    `http://sb-cats.herokuapp.com/api/2/ArkadiyShumanskiy/update/${cat.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cat),
    }
  );
};

const deleteCat = (cat) => {
  return fetch(
    `http://sb-cats.herokuapp.com/api/2/ArkadiyShumanskiy/delete/${cat.id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
