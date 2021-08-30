import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuid_v4 } from "uuid";
import findIndex from 'lodash/findIndex';

export const notesSlice = createSlice({
  name: 'retro',
  initialState: {
    columnList: [{
      "title": "What went well? ",
      notesList: [{ "comment": "...", "notesId": uuid_v4(), votes: 0 }],
      columnId: uuid_v4()
    }]
  },
  reducers: {
    addColumn: (state, action) => {
      const columnName = action.payload.columnName;
      if(columnName){
        const column = {
          "title": columnName,
          notesList: [{ "comment": "...", "notesId": uuid_v4(), votes: 0 }],
          columnId: uuid_v4()
        };
        return {
          ...state, //spreading the original state
          columnList: [...state.columnList, column] // new todos array
         }
      }
    },
    updateNotes: (state, action) => {

      const columnId = action.payload.columnId;
      const column = state.columnList.find(column => column.columnId === columnId);

      let index = findIndex(column.notesList, function (notes) {
        return notes.notesId == action.payload.notesText.notesId;
      });

      if (column.notesList[index]) {
        column.notesList[index]["comment"] = action.payload.notesText.comment;
      } else {
        column.notesList.push(action.payload.notesText);
      }

    },
    deleteNotes: (state, action)=> {
      const columnId = action.payload.columnId;
      const column = state.columnList.find(column => column.columnId === columnId);

      let index = findIndex(column.notesList, function (notes) {
        return notes.notesId == action.payload.notesId;
      });

      if (column.notesList[index]) {
        column.notesList.splice(index, 1);
      }
    },
    updateVoteCount: (state, action) => {
      const columnId = action.payload.columnId;
      const column = state.columnList.find(column => column.columnId === columnId);

      let index = findIndex(column.notesList, function (notes) {
        return notes.notesId == action.payload.notesId;
      });

      if (column.notesList[index]) {
        column.notesList[index]["votes"] = column.notesList[index]["votes"] + 1;
      }
    }
  }
})

// Action creators are generated for each case reducer function
export const { updateNotes, updateVoteCount, deleteNotes, addColumn } = notesSlice.actions

export default notesSlice.reducer
