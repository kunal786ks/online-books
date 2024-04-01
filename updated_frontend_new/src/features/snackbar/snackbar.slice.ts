import { createSlice } from "@reduxjs/toolkit";
import { type RootState } from "@/store/store";
const initialState: ModalState = {
  isOpen: false,
  reason: "modal reason",
  severity: "success",
};
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.reason = action.payload.reason;
      state.severity = action.payload.severity;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});
export const { openModal, closeModal } = modalSlice.actions;
export const modalSelector = (state: RootState) => state.modalReducer;
export default modalSlice.reducer;
