import { writable, get } from "svelte/store";

const STORAGE_KEY = "demo.name";

const name = writable(loadName());

function loadName() {
  try {
    return localStorage.getItem(STORAGE_KEY) || "";
  } catch {
    return "";
  }
}

function saveName(value) {
  try {
    localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // minimal: ignore
  }
}

export function getName() {
  return get(name);
}

export function setName(value) {
  name.set(value);
  saveName(value);
}

export { name };
