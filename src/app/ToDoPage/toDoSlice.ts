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
        toDoList: [],
        selectedTodo: null
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

        saveTodo: (state, { payload }: any) => {
            payload.id = new Date().getTime();
            state.toDoList = Object.assign([...state.toDoList, payload]);
            state.isCreateFormOpen = false;
            return state;
        },

        editTodo: (state, { payload }: any) => {
            const toDoObj: any = state.toDoList.find((row: any) => row.id === payload);
            console.log(toDoObj, payload);
            state.selectedTodo = toDoObj;
            state.isCreateFormOpen = true;
            return state;
        },

        updateTodo: (state, { payload }: any) => {
            const toDoList: any = Object.assign([], state.toDoList);
            const i: any = toDoList.findIndex((row: any) => row.id === payload.id);
            toDoList[i] = payload;
            state.toDoList = Object.assign([...toDoList]);
            state.selectedTodo = null;
            state.isCreateFormOpen = false;
            return state;
        },

        deleteTodo: (state, { id }: any) => {
            const toDoList = Object.assign([], state.toDoList);
            const index = toDoList.findIndex((row: any) => row.id === id);
            toDoList.splice(index, 1);
            state.toDoList = [...toDoList];
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

export const { saveTodo, setIsCreateFormOpen, handleFormChange, deleteTodo, editTodo, updateTodo } = toDoSlice.actions;

// export { saveTodoAPI };

export default toDoSlice.reducer;
