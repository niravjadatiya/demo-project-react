import { makeStyles, Theme } from "@material-ui/core/styles";

export default makeStyles((theme: Theme) => ({
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
