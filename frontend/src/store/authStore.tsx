import { create } from "zustand";
import { persist } from "zustand/middleware";



interface AuthStore {
  userLogged: boolean;
  profile: any;
  login: (profile: any) => void;
  logout: () => void;
}

const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      userLogged: false,
      profile: null,
      login: (profile) => set({ userLogged: true, profile }),
      logout: () => set({ userLogged: false, profile: null }),
    }),
    {
      name: "auth"
    }
  )
)

export default useAuthStore;
