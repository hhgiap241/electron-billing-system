import { Button as ButtonAnt } from 'antd';
import { ButtonProps } from 'antd/lib/button';
import clsx from 'clsx';
import React from 'react';
import { useTheme } from 'react-jss';
import { useStyles } from './styles';
import { useCommonStyles } from '../../commons/styles';

type ButtonType = {
  noPadding?: boolean;
  underlineLink?: boolean;
  textAlign?: string;
  fontWeight?: string;
  hoverColor?: any;
  marginRght?: any;
  color?: any;
} & ButtonProps;
const Button = (props: Partial<ButtonType>) => {
  const theme: any = useTheme();
  const {
    className,
    noPadding = false,
    underlineLink = true,
    textAlign,
    fontWeight,
    type,
    color,
    hoverColor,
    children,
    marginRght,
    ...propsButton
  } = props;

  const classes = useStyles({
    theme,
    color,
    hoverColor,
    underlineLink,
    fontWeight,
    textAlign,
    marginRght,
  });

  const commonClasses = useCommonStyles();

  return (
    <ButtonAnt
      {...propsButton}
      type={type}
      className={clsx(
        classes.wrapWord,
        type === 'text' && classes.borderRadius,
        type === 'link' ? classes.linkButton : commonClasses.primaryButton,
        noPadding ? classes.noPadding : '',
        textAlign && classes.textAlign,
        className || '',
      )}
    >
      {children}
    </ButtonAnt>
  );
};

export default Button;
