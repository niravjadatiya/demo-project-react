import { BaseSyntheticEvent, useState } from 'react';
import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import useStyles from './styles';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import CreateToDoFormDialog from './CreateToDoFormDialog';
import { setIsCreateFormOpen } from './toDoSlice';

const ToDoPage = () => {
    const dispatch = useAppDispatch();
    const classes = useStyles();
    const [todoList, setTodoList] = useState([]);
    const { isCreateFormOpen } = useAppSelector((state: any) => state.toDo);


    // const handleInputChange = (event: any) => {

    // };

    const handleSubmit = async (event: BaseSyntheticEvent) => {
        event.preventDefault();
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
                                <TableCell align="right">Gender</TableCell>
                                <TableCell align="right">Hobby</TableCell>
                                <TableCell align="right">Age</TableCell>
                                <TableCell align="right">Date</TableCell>
                                <TableCell align="right">Task Name</TableCell>
                                <TableCell align="right">Status</TableCell>
                                <TableCell align="right"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {todoList.map((todo: any) => (
                                <TableRow key={todo.name}>
                                    <TableCell component="th" scope="row">
                                        {todo.name}
                                    </TableCell>
                                    <TableCell align="right">{todo.calories}</TableCell>
                                    <TableCell align="right">{todo.fat}</TableCell>
                                    <TableCell align="right">{todo.carbs}</TableCell>
                                    <TableCell align="right">{todo.protein}</TableCell>
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