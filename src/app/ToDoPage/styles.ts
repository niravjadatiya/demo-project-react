import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    toDoWrapper: {
        display: 'flex',
        flexDirection: 'column',
        padding: 20,
    },

    tableWrapper: {
        // width: 650,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    table: {
        minWidth: 650,
    },
}));
