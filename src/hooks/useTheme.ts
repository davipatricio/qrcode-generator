import { create } from "zustand";

type ThemeContext = {
  setTheme(theme: "dark" | "light"): void;
  theme: "dark" | "light";
}

const userPrefersDark = window.matchMedia("(prefers-color-scheme: dark)")

export const useTheme = create<ThemeContext>((set) => ({
  theme: userPrefersDark ? "dark" : "light",
  setTheme: (theme) => set({ theme }),
}));
