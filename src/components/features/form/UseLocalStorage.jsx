import React from "react";
import { useState, useEffect } from "react";

const getValue = (key, initVal) => {
  const savedValue = JSON.parse(localStorage.getItem(key));
  if (savedValue) {
    return savedValue;
  } else {
    return initVal;
  }
};

function UseLocalStorage(key, initVal) {
  const [storedValue, setStoredValue] = useState(() => {
    return getValue(key, initVal);
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [storedValue, key]);

  return [storedValue, setStoredValue];
}
export default UseLocalStorage;
