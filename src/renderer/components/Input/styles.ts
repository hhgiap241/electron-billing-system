import { createUseStyles } from 'react-jss';
import { COLOR } from '../../constants/colors';

const useStyles = createUseStyles({
  disabled: {
    backgroundColor: `${COLOR.disabledInput_f4f4f4} !important`,
  },
  disabledInput: {
    backgroundColor: `${COLOR.disabledInput_f4f4f4} !important`,
    color: `${COLOR.disableAnswer} !important`,
  },
});

export default useStyles;
