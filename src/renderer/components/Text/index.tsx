import { Typography } from 'antd';
import clsx from 'clsx';
import { useTheme } from 'react-jss';
import useStyles from './styles';

const TextAntd = Typography.Text;

function Text(props: any) {
  const theme: any = useTheme();
  const classes = useStyles({ theme });
  const { className, children, ...propsText } = props;
  return (
    <TextAntd
      className={className ? clsx(classes.wrapper, className) : classes.wrapper}
      {...propsText}
    >
      {children}
    </TextAntd>
  );
}

export default Text;
