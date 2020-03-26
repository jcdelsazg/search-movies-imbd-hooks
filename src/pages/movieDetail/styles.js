import { makeStyles } from '@material-ui/styles';

const centeredStyleObj = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

export default makeStyles({
  title: {
    ...centeredStyleObj
  }
});
