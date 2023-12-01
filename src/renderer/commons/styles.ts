import { createUseStyles } from 'react-jss';
import { COLOR } from '../constants/colors';

const commonStyles = (theme: any) => ({
  bodyTitle: {
    padding: '8px 16px',
    background: '#f7f7f7',
    borderBottom: `solid 1px  ${COLOR.border}`,
    marginBottom: '16px',
    '& > span.ant-typography': {
      padding: '16px 0',
      fontWeight: 'bold',
      fontSize: 20,
    },
  },
  labelRequired: {
    fontSize: '16px !important',

    '&:before': {
      display: 'inline-block',
      marginRight: 4,
      color: COLOR.red,
      fontSize: 16,
      lineHeight: 1,
      content: '"※"',
    },
  },
  formLabelRequired: {
    '& .ant-form-item-label:before': {
      display: 'inline-block',
      marginRight: 4,
      color: COLOR.red,
      fontSize: 14,
      fontFamily: 'SimSun, sans-serif',
      lineHeight: 1,
      content: '"*"',
    },
  },
  addMoreButton: {
    '&.ant-btn.ant-btn-primary': {
      width: 40,
      display: 'block',
      marginLeft: 'auto',
      borderRadius: '50%',
    },
  },
  iconDeleteCommon: {
    color: COLOR.redError,
    width: '20px !important',
    height: 20,
    cursor: 'pointer',
  },
  inputNumberWrapper: {
    '& .ant-input-number': {
      width: '100%',
      border: 'none',
      borderBottom: '1px solid #d9d9d9',
    },
    '& .ant-input-number-handler-wrap': {
      display: 'none',
    },
    '& .ant-input-number:focus, .ant-input-number-focused': {
      boxShadow: 'none',
    },
    '& ~ .ant-form-item-has-error .ant-input-number': {
      borderBottom: '1px solid #ff4d4f',
    },
  },
  inputNumberErrorWrapper: {
    '& .ant-form-item-has-error .ant-input-number': {
      borderBottom: '1px solid #ff4d4f !important',
    },
  },
  linkButtonNormal: {
    marginBottom: 3,

    '& span': {
      fontWeight: 'normal',
    },
  },
  linkButtonBold: {
    marginBottom: 3,

    '& span': {
      fontWeight: 600,
    },
  },
  canClick: {
    cursor: 'pointer',
  },
  display_inline: {
    display: 'inline-flex',
    // maxWidth: "95px",
    // minWidth: "95px",
  },
  marginTop_m15: {
    display: 'inline-flex',
    marginTop: '-15px',
    maxWidth: '95px',
    minWidth: '95px',
  },
  marginTop_m15_dfservice: {
    display: 'inline-flex',
    marginTop: '-15px',
    marginLeft: '-15px',
    maxWidth: '95px',
    minWidth: '95px',
  },
  marginBottom_custom: {
    marginBottom: 0,
    marginLeft: '120px',
  },
  noClick: {
    cursor: 'initial',
  },
  margin_auto: {
    margin: 'auto',
  },
  marginBottom_0: {
    marginBottom: 0,
  },
  marginBottom_10: {
    marginBottom: 10,
  },
  marginBottom_12: {
    marginBottom: '12px !important',
  },
  marginBottom_15: {
    marginBottom: 15,
  },
  marginBottom_20: {
    marginBottom: 20,
  },
  marginTop_10: {
    marginTop: 10,
  },
  marginTop_20: {
    marginTop: 20,
  },
  marginTop_30: {
    marginTop: 30,
  },
  marginLeft_20: {
    marginLeft: 20,
  },
  minWidth_50: {
    minWidth: 50,
  },
  minWidth_70: {
    minWidth: 70,
  },
  minWidth_100: {
    minWidth: 100,
  },
  minWidth_150: {
    minWidth: 150,
  },
  minWidth_200: {
    minWidth: 200,
  },
  minWidth_350: {
    minWidth: 350,
  },
  maxWidth_250: {
    maxWidth: 250,
  },
  maxWidth_300: {
    maxWidth: 300,
  },
  maxWidth_350: {
    maxWidth: 350,
  },
  maxWidth_400: {
    maxWidth: 400,
  },
  maxWidth_600: {
    maxWidth: 600,
  },
  width_100percent: {
    width: '100%',
  },
  height_35: {
    height: 35,
  },
  noteNotMarginBottom: {
    marginBottom: 0,
    '& .ant-form-item-control-input': {
      minHeight: 0,
    },
  },
  noteMarginBottom: {
    '& .ant-form-item-control-input': {
      minHeight: 0,
    },
  },
  containerCampusModal: {
    padding: '0 20px',
  },
  wrapperFormModalCampus: {
    padding: ' 24px 24px 0 24px',
    overflowX: 'hidden',
    maxHeight: 'calc(100vh - 200px)',
  },
  icon_width_14: {
    width: '14px !important',
  },
  icon_width_30: {
    width: '30px !important',
  },
  fontSize_12: {
    fontSize: 12,
  },
  fontWeight_600: {
    fontWeight: 600,
  },
  fontSize_16: {
    fontSize: 16,
  },
  fontSize_15_imp: {
    fontSize: '15px !important',
  },
  fontWeight: {
    fontSize: 16,
    fontWeight: 600,
  },
  text: {
    fontSize: 16,
    color: COLOR.black_333333,
  },
  textBold: {
    fontSize: 16,
    fontWeight: 600,
    color: COLOR.black_333333,
  },
  textBlack: {
    fontSize: 16,
    color: `${COLOR.black} !important`,
  },
  textBlackBold: {
    fontSize: 16,
    fontWeight: 600,
    color: `${COLOR.black} !important`,
  },
  textBlackBold_20: {
    fontSize: 20,
    fontWeight: 600,
    color: COLOR.black,
  },
  textWhite: {
    fontSize: 16,
    color: COLOR.white,
  },
  textCenter: {
    textAlign: 'center',
  },
  formLabel: (props: any) => ({
    '& .ant-form, .ant-form-item-label > label': {
      fontSize: 16,
      color: props?.formLabelColor ?? COLOR.black,
    },
  }),
  formItemWrapperWithoutLabel: {
    alignSelf: 'flex-end',
  },
  cardLabel: {
    fontSize: 20,
    fontWeight: 600,
    whiteSpace: 'normal',
    color: theme?.sub,
  },
  editorContent: {
    '& p': {
      marginBottom: 1,
    },
  },
  a4: {
    backgroundColor: COLOR.white,
    margin: '10px 15px',
    padding: 30,
  },
  a4_portrait: {
    width: '21cm',
    height: '29.7cm',
  },
  a4_landscape: {
    width: '29.7cm',
    height: 'auto', // Preview with fit height, when printing, use page-break
  },
  iconInButton: {
    height: 22,
    width: '20px !important',
    marginRight: 8,
    marginBottom: -3,
  },
  divider: {
    height: 1,
    color: COLOR.divider_dfe2e6,
    margin: '14px 0',
  },
  collapse: {
    visibility: 'collapse',
  },
  display_flex: {
    display: 'flex',
  },
  display_none: {
    display: 'none',
  },
  scroll: {
    overflowY: 'scroll',
    maxHeight: 'calc(100vh - 170px)',
    outline: 'none',
  },
  formLabelNotDot: {
    '& .ant-form-item-label > label::after': {
      content: `" " !important`,
    },
  },
  textThemeSubBold: {
    color: theme.sub,
    fontSize: 16,
    fontWeight: 600,
  },
  collapseBorder: {
    '&.ant-collapse': {
      borderRadius: 10,
    },
    '&.ant-collapse > .ant-collapse-item:last-child, .ant-collapse > .ant-collapse-item:last-child > .ant-collapse-header':
      {
        borderRadius: '0 0 10px 10px',
      },
    '& .ant-collapse-item:last-child > .ant-collapse-content': {
      borderRadius: '0 0 10px 10px',
    },
  },
  preLine: {
    whiteSpace: 'pre-line',
  },
  primaryButton: () => ({
    height: 40,
    fontSize: 16,
    fontWeight: 600,

    '&.ant-btn-primary': {
      background: 'rgb(66, 164, 255)',
      borderColor: 'rgb(66, 164, 255)',
      borderRadius: 10,
      marginRight: 5,
      color: 'rgb(255, 255, 255)',
    },
    '&.ant-btn-primary:hover': {
      background: 'rgb(8, 72, 132)',
      borderColor: 'rgb(8, 72, 132)',
    },
    '&.ant-btn-primary:focus': {
      background: 'rgb(8, 72, 132)',
      borderColor: 'rgb(8, 72, 132)',
    },
    '&.ant-btn-primary[disabled], .ant-btn-primary[disabled]:hover, .ant-btn-primary[disabled]:focus, .ant-btn-primary[disabled]:active':
      {
        color: 'rgba(0, 0, 0, 0.25)',
        background: '#f5f5f5',
        borderColor: '#d9d9d9',
      },
    // "&.ant-btn-dangerous.ant-btn-primary:hover": {
    //   background: COLOR.danger,
    //   borderColor: COLOR.danger,
    // },
    // "&.ant-btn-dangerous.ant-btn-primary:focus": {
    //   background: COLOR.danger,
    //   borderColor: COLOR.danger,
    // },
  }),
});

export const useCommonStyles = createUseStyles(commonStyles);
