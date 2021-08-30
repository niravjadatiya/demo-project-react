import { BaseSyntheticEvent, useState } from 'react';
import { Box, Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import useStyles from './styles';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import CreateToDoFormDialog from './CreateToDoFormDialog';
import { deleteTodo, editTodo, setIsCreateFormOpen } from './toDoSlice';

const ToDoPage = () => {
    const dispatch = useAppDispatch();
    const classes = useStyles();
    const { isCreateFormOpen, toDoList } = useAppSelector((state: any) => state.toDo);


    const handleEditClick = (id: any) => () => {
        dispatch(editTodo(id));
    };

    const handleDeleteClick = (id: any) => () => {
        dispatch(deleteTodo(id));
    };

    const toggleCreateModal = (isOpen: boolean) => () => {
        dispatch(setIsCreateFormOpen(isOpen));
    }

    return (
        <Box className={classes.toDoWrapper}>
            {isCreateFormOpen ? <CreateToDoFormDialog /> : null}
            <Box>
                <Button variant='contained' color='primary' onClick={toggleCreateModal(true)} startIcon={<AddIcon />}>
                    Create To Do
                </Button>
            </Box>
            <Box className={classes.tableWrapper}>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>User Name</TableCell>
                                <TableCell>Gender</TableCell>
                                <TableCell>Hobby</TableCell>
                                <TableCell>Age</TableCell>
                                <TableCell>Date</TableCell>
                                <TableCell>Task Name</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {toDoList.length > 0 && toDoList.map((todo: any, index: number) => (
                                <TableRow key={index}>
                                    <TableCell component="th" scope="row">
                                        {todo.userName}
                                    </TableCell>
                                    <TableCell>{todo.gender}</TableCell>
                                    <TableCell>{todo?.hobby?.toString()}</TableCell>
                                    <TableCell>{todo.age}</TableCell>
                                    <TableCell>{todo.date}</TableCell>
                                    <TableCell>{todo.taskName}</TableCell>
                                    <TableCell>{todo.status}</TableCell>
                                    <TableCell>
                                        <IconButton onClick={handleEditClick(todo.id)}>
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton onClick={handleDeleteClick(todo.id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    );
};

export default ToDoPage;