import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme: any) => ({
  wrapper: {
    whiteSpace: 'pre-wrap',
    '&.ant-typography u, .ant-typography ins': {
      textDecoration: 'none !important',
      color: 'black',
    },

    '&.ant-typography, .ant-typography-ellipsis': {
      color: theme.sub,
    },
  },
}));

export default useStyles;
