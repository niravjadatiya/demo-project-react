import { createSlice } from '@reduxjs/toolkit';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// API ASYNC THUNK CALL EXAMPLE CODE
// const saveTodoAPI = createAsyncThunk('todo/save', async (todo: any, { dispatch, rejectWithValue }) => {
//     try {
//         const response: any = await saveToDo(todo);
//         return response;
//     }
//     catch (err) {
//         console.log('err', err);
//         return rejectWithValue(err);
//     }
// });

export const toDoSlice = createSlice({
    name: 'ToDo',
    initialState: {
        isLoading: false,
        isCreateFormOpen: false,
    },
    reducers: {
        setIsCreateFormOpen: (state, { payload }: any) => {
            console.log(state, payload);
            state.isCreateFormOpen = payload;
            return state;
        },
        handleFormChange: (state, { payload }: any) => {
            console.log(payload);
        },
        saveTodo: (state) => {
            console.log('saveToDo');
            return state;
        },
    },
    // extraReducers: {
    // API CALL ACTIONS THESE THREE ACTIONS IS BUILT IN SUPPORT OF REDUX-TOOLKIT
    // // ========== saveTodo starts ==========
    // [saveTodo.pending.type]: (state) => {
    //     state.isLoading = true;
    //     return state;
    // },
    // [saveTodo.fulfilled.type]: (state) => {
    //     state.isLoading = false;
    //     state.isShowsaveTodoSuccessMsg = true;
    //     return state;
    // },
    // [saveTodo.rejected.type]: (state) => {
    //     state.isLoading = false;
    //     return state;
    // },
    // }
});

export const { saveTodo, setIsCreateFormOpen, handleFormChange } = toDoSlice.actions;

// export { saveTodoAPI };

export default toDoSlice.reducer;
