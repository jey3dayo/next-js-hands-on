// スタイル適用
import Container from '@material-ui/core/container';
import { makeStyles } from '@material-ui/styles';
import { red, blueGrey } from '@material-ui/core/colors';

const useStyles = makeStyles({
  root: {
    background: blueGrey[200],
  },
  title: {
    background: blueGrey[100],
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: red[800],
    paddingTop: '12px',
    paddingBottom: '12px',
  },
  text: {
    fontSize: '1rem',
    paddingTop: '12px',
    paddingBottom: '12px',
  },
});

const Example = () => {
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.root}>
        <div className={classes.title}>スタイル適用のサンプル</div>
        <div className={classes.text}>
          あいうえお
          <br />
          かきくけこ
          <br />
          さしすせそ
        </div>
      </div>

      <div>
        <a href="https://material-ui.com/styles/basics/" target="_blank" rel="noreferrer">
          参考: @material-ui/styles - Material-UI
        </a>
      </div>
      <div>
        <a href="https://material-ui.com/customization/color/#color-palette" target="_blank" rel="noreferrer">
          参考: Color - Material-UI
        </a>
      </div>
    </Container>
  );
};

export default Example;
