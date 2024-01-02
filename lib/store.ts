import { createParaply } from "paraply";

let store = createParaply<{theme: 'light' | 'dark'}>({
  theme: "light",
});

export { store };