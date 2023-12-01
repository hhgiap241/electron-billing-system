import { createUseStyles } from 'react-jss';
import { COLOR } from '../../constants/colors';

const useStyles = createUseStyles({
  backgroundRight: {
    height: '100vh',
    // backgroundImage: `url(${bgLoginRight})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  backgroundLeft: {
    height: '100%',
    width: '100%',
  },
  title: {
    fontSize: 30,
    fontWeight: 600,
    marginBottom: 90,
    color: COLOR.title,
  },
  footer: {
    color: '#555555',
    textAlign: 'center',
    margin: '40px 0',
  },
  itemRight: {
    alignContent: 'space-between',
    height: '100%',
  },
  loginForm: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '90vh',
    flexDirection: 'column',
  },
  removeRequired: {
    '& .ant-form-item-label > label.ant-form-item-required:not(.ant-form-item-required-mark-optional)::before':
      {
        content: '""',
      },
  },
  forgetPasswordForm: {
    margin: '0 0 20px',
    textAlign: 'center',
  },
  formItem: {
    width: '50%',
  },
  forgetPasswordText: {
    color: COLOR.primary,
    fontWeight: 600,
    cursor: 'pointer',
  },
});

export default useStyles;
