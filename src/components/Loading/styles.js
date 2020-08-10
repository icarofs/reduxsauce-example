import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  backdrop: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: '#fff',
  },
  textMessage: {
    fontSize: 20,
    paddingTop: theme.spacing(1),
    fontFamily: 'Geomanist-Medium',
  },
}));
