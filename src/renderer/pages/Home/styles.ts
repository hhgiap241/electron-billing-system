import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(() => ({
  demoLogo: {
    width: '100%',
    height: 'auto',
    borderRadius: 6,
    backgroundSize: 'cover',
    backgroundPosition: 'initial',
    backgroundRepeat: 'no-repeat',
  },
  layout: {
    height: '100%',
  },
  imageWrapper: {
    marginRight: 10,
    verticalAlign: 'middle',
    width: 120,
  },
}));

export default useStyles;
