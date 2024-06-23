function setLocalStorage(key, value) {
  window.localStorage.setItem(key, value);
}

function getLocalStorage(key) {
  return window.localStorage.getItem(key);
}

function removeLocalStorage(key) {
  window.localStorage.removeItem(key);
}

function clearLocalStorage() {
  window.localStorage.clear();
}

function isExistLocalStorage(key) {
  return getLocalStorage(key) ? true : false;
}

export {
  setLocalStorage,
  getLocalStorage,
  removeLocalStorage,
  clearLocalStorage,
  isExistLocalStorage,
};
