import { Input, InputProps } from 'antd';
import clsx from 'clsx';
import React from 'react';
import useStyles from './styles';

interface Props {
  type?: string;
  prefix?: any;
  placeholder?: string;
  bordered?: boolean;
  disabled?: boolean;
  maxLength?: number;
  className?: string | undefined;
  onChange?: any;
  value?: string;
  useStrictValidate?: boolean;
}

const InputComponent: React.FunctionComponent<Props & InputProps> = (
  props: Props & InputProps,
): React.JSX.Element => {
  const classes = useStyles();
  const {
    type,
    prefix,
    placeholder,
    bordered,
    disabled,
    maxLength,
    className,
    onChange,
    value,
    useStrictValidate,
  } = props;

  const handleKeyDown = (e: any) => {
    const { value } = e.target as HTMLInputElement;
    const { maxLength } = props;
    // Case when use type="number" , props maxLength not work !!! So this will fix it
    if (useStrictValidate && maxLength) {
      if (value.length <= maxLength) {
        if (type === 'positiveNumber')
          if (e.which === 189)
            // prevents minus (-) signs
            e.preventDefault();
        if (type === 'number' || type === 'positiveNumber')
          if (e.which >= 48 && e.which <= 57)
            // prevents non-numeric values
            return;
          else if (!(e.which === '46' || e.which === '8' || e.which === '13'))
            // allows backspace/enter/del
            e.preventDefault();
          else return;
        else return; // if not numbers or positive numbers, do not regard any above rules
      } else if (!(e.which === '46' || e.which === '8' || e.which === '13'))
        // backspace/enter/del
        e.preventDefault();
    }
  };
  switch (type) {
    case 'password':
      return (
        <Input.Password
          {...props}
          prefix={prefix}
          placeholder={placeholder}
          bordered={bordered}
          value={value}
        />
      );
    default:
      return (
        <Input
          {...props}
          className={clsx(disabled && classes.disabledInput, className || '')}
          prefix={prefix}
          placeholder={placeholder}
          bordered={bordered}
          maxLength={maxLength}
          onChange={onChange}
          value={
            !(type === 'number' || type === 'positiveNumber') ||
            value === '' ||
            value === undefined
              ? value
              : Number(value).toString()
          }
          onKeyDown={handleKeyDown}
        />
      );
  }
};

InputComponent.defaultProps = {
  bordered: false,
};

export default InputComponent;
