import { create } from "zustand";

interface UserSelection {
  id: number;
  name: string;
}

interface UserSelectionState {
  selection: UserSelection | null;
  setSelection: (id: number, name: string) => void;
}

const useQlineStore = create<UserSelectionState>((set) => ({
  selection: null,
  setSelection: (id, name) => set({ selection: { id, name } }),
}));

export default useQlineStore;
