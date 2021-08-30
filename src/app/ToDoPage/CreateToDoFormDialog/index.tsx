import { Box, Button, Checkbox, Dialog, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, Slider, TextField, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { BaseSyntheticEvent } from 'react';
import { useAppDispatch } from '../../../redux/store';
import { setIsCreateFormOpen } from '../toDoSlice';
import useStyles from './styles';

// since we are using redux we don't require props to pass but
// We can also create interface and pass props something like this:

// interface IProps {
//     toggleCreateModal: (isOpen: boolean) => any;
// }
// const CreateToDoFormDialog = ({ toggleCreateModal }: IProps) => {
//

const CreateToDoFormDialog = () => {
    const classes = useStyles();
    const dispatch = useAppDispatch();
    const handleInputChange = (event: any) => {
    };

    const handleSubmit = async (event: BaseSyntheticEvent) => {
        event.preventDefault();
    };

    const handleClose = () => {
        dispatch(setIsCreateFormOpen(false))
    }

    return (
        <Dialog open={true} onClose={handleClose}>
            <Box className={classes.container}>
                <Typography variant='h6' className={classes.formTitle}>
                    Create New To-Do Item
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <TextField
                        id='userName'
                        label='User Name'
                        onChange={handleInputChange}
                        required={true}
                        type={'text'}
                        size='small'
                    />
                    <FormControl component="fieldset" className={'checkbox-radio-control'}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={'Male'} onChange={handleInputChange}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>
                    <FormControl component="fieldset" className={'checkbox-radio-control'}>
                        <FormLabel component="legend">Hobby</FormLabel>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={true}
                                    onChange={handleInputChange}
                                    name="Sports"
                                    color="primary"
                                />
                            }
                            label="Sports"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={true}
                                    onChange={handleInputChange}
                                    name="Reading"
                                    color="primary"
                                />
                            }
                            label="Reading"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={true}
                                    onChange={handleInputChange}
                                    name="Music"
                                    color="primary"
                                />
                            }
                            label="Music"
                        />
                    </FormControl>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Age</FormLabel>
                        <Slider
                            value={8}
                            min={18}
                            step={1}
                            max={55}
                            onChange={handleInputChange}
                            valueLabelDisplay='auto'
                        />
                    </FormControl>
                    <FormControl component="fieldset">
                        <TextField
                            id="date"
                            label="Birthday"
                            type="date"
                            defaultValue="2017-05-24"
                            InputLabelProps={{ shrink: true }}
                            size='small'
                        />
                    </FormControl>
                    <FormControl component="fieldset">
                        <TextField
                            id='taskName'
                            label='Task Name'
                            onChange={handleInputChange}
                            required={true}
                            type={'text'}
                            size='small'
                        />
                    </FormControl>
                    <FormControl>
                        <InputLabel id="demo-simple-select-label">Status</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={'Active'}
                            onChange={handleInputChange}
                        >
                            <MenuItem value={10}>Active</MenuItem>
                            <MenuItem value={20}>InActive</MenuItem>
                        </Select>
                    </FormControl>
                    <Box className={classes.btnsWrapper}>
                        <Button variant='contained' color='secondary' type='reset' onClick={handleClose}>Cancel</Button>
                        <Button variant='contained' color='primary' type='submit' disabled={false} startIcon={<AddIcon />}>Create To Do</Button>
                    </Box>
                </form>
            </Box>
        </Dialog>
    );
};
export default CreateToDoFormDialog;
