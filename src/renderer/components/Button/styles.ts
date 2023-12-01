import { createUseStyles } from 'react-jss';

const styles = (theme: any) => ({
  linkButton: (props: any) => ({
    fontSize: 16,
    fontWeight: props.fontWeight ?? 600,

    '&.ant-btn-link': {
      color: props.color || theme.button,
    },
    '&.ant-btn-link span': {
      textDecoration: props.underlineLink ? 'underline' : 'none',
      textUnderlinePosition: 'under',
    },
  }),
  wrapWord: {
    whiteSpace: 'pre-wrap',
  },
  noPadding: {
    padding: 0,
  },
  textAlign: (props: any) => ({
    textAlign: props?.textAlign || 'center',
  }),
  borderRadius: {
    borderRadius: '10px !important',
  },
});

export const useStyles = createUseStyles(styles);
