import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface SidePanelDataState {
  sidePanelData: {
    name: string;
    content: string;
    showSidePanel: boolean;
    sidePanelType: number;
    showMediaPanel: boolean;
  };
}

const initialState: SidePanelDataState = {
  sidePanelData: {
    name: "",
    content: "",
    showSidePanel: false,
    sidePanelType: 0,
    showMediaPanel: false,
  },
};

export const sidePanel = createSlice({
  name: "sidePanelData",
  initialState,
  reducers: {
    updateSidePanel: (state, action: PayloadAction<any>) => {
      state = { ...state, ...action.payload };
      return state;
    },
    clearState: (state) => {
      state = initialState;
      return state;
    },
  },
});

export const { updateSidePanel, clearState } = sidePanel.actions;

export default sidePanel.reducer;
