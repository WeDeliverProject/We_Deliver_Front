const storage = sessionStorage;

const saveDataToStorage = (data) => {
  storage.setItem("TOKEN", JSON.stringify(data));
};

const getDataFromStorage = (name = "TOKEN") => {
  const response = storage.getItem(name);

  return JSON.parse(response);
};

const removeDataFromStorage = (name = "TOKEN") => {
  storage.removeItem(name);
};

export { saveDataToStorage, getDataFromStorage, removeDataFromStorage };
