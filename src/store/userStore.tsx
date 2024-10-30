import { create } from "zustand";
import { useEffect } from "react";

interface UserState {
  isAuthenticated: boolean;
  role: "Entrenador" | "Jugador" | null;
  name: string | null;
  lastname: string | null;
  username: string | null;
  email: string | null;
  weight: number | null;
  height: number | null;
  position: string | null;
  loginState: (
    role: "Entrenador" | "Jugador",
    name: string,
    lastname: string,
    username: string,
    email: string,
    weight: number,
    height: number,
    position: string
  ) => void;
  logoutState: () => void;
}

const useUserStore = create<UserState>((set) => ({
  isAuthenticated: false,
  role: null,
  name: null,
  lastname: null,
  username: null,
  email: null,
  weight: null,
  height: null,
  position: null,
  loginState: (
    role: "Entrenador" | "Jugador",
    name,
    lastname,
    username,
    email,
    weight,
    height,
    position
  ) => {
    set({ isAuthenticated: true, role });
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("role", role);
    localStorage.setItem("name", name);
    localStorage.setItem("lastname", lastname);
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("weight", String(weight));
    localStorage.setItem("height", String(height));
    localStorage.setItem("position", position);
  },
  logoutState: () => {
    set({
      isAuthenticated: false,
      role: null,
      name: null,
      lastname: null,
      username: null,
      email: null,
      weight: null,
      height: null,
      position: null,
    });
    localStorage.setItem("isAuthenticated", "false");
    localStorage.removeItem("role");
    localStorage.removeItem("name");
    localStorage.removeItem("lastname");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("weight");
    localStorage.removeItem("height");
    localStorage.removeItem("position");
  },
}));

export const useUserStoreLocalStorage = () => {
  const store = useUserStore();

  useEffect(() => {
    const isAuthenticatedFromStorage =
      localStorage.getItem("isAuthenticated") === "true";
    const roleFromStorage = localStorage.getItem("role") as
      | "Entrenador"
      | "Jugador"
      | null;
    const nameFromStorage = localStorage.getItem("name");
    const lastnameFromStorage = localStorage.getItem("lastname");
    const usernameFromStorage = localStorage.getItem("username");
    const emailFromStorage = localStorage.getItem("email");
    const weightFromStorage = localStorage.getItem("weight");
    const heightFromStorage = localStorage.getItem("height");
    const positionFromStorage = localStorage.getItem("position");

    if (
      store.isAuthenticated !== isAuthenticatedFromStorage ||
      store.role !== roleFromStorage ||
      store.name !== nameFromStorage ||
      store.lastname !== lastnameFromStorage ||
      store.username !== usernameFromStorage ||
      store.email !== emailFromStorage ||
      store.weight !== weightFromStorage ||
      store.height !== heightFromStorage ||
      store.position !== positionFromStorage
    ) {
      store.loginState(
        roleFromStorage || "Jugador",
        nameFromStorage || "",
        lastnameFromStorage || "",
        usernameFromStorage || "",
        emailFromStorage || "",
        Number(weightFromStorage) || 0,
        Number(heightFromStorage) || 0,
        positionFromStorage || ""
      );
    }
  }, [
    store.isAuthenticated,
    store.role,
    store.name,
    store.lastname,
    store.username,
    store.email,
    store.weight,
    store.height,
    store.position,
  ]);

  return store;
};
