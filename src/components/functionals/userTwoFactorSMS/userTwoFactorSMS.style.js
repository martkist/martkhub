import palette from '../../../styles/palette';

const primary = palette.primary;
const primaryLight = palette.primaryLight;
const greyDark = palette.greyDark;
const greyLight = palette.greyLight;
const red = palette.red;
const green = palette.green;
const white = palette.white;

export default {
  modalRoot:{
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: `translate(-50%, -50%)`,
    background: white,
    boxShadow: green,
    padding: 0,
    overflow: 'hidden',
    minWidth: 420,
    color:greyDark,
    '& .modalHeaderWrapper': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      padding: '0 0 0 40px',
      backgroundColor: primary,
      '& *': {
        color: white
      }
    },
    '& .closeBtn': {
      alignSelf: 'flex-end'
    },
    '& .phoneWrapper': {
      width:  '100%',
      padding: '40px'
    },
    '& .formPhoneBtn': {
      padding: '0 0 50px 0'
    },
    '& .formControl': {
      margin: '5px 0',
      width:  '100%',
    },
    '& .phoneRow': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    '& .phoneBtn': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '8px 0 0 0px',
      padding: '0',
    },
    '& .deleteBtn': {
      margin: '10px 40px',
      width: '100%',
      '& span': {
        color: red
      }
    },
    '& .rightIcon': {
      margin: '0 0 0 5px',
    },
    '& .phoneNumber': {
      minWidth:  '62%',
    }
  },
  mModalRoot: {
    extend: 'modalRoot',
  },
  root: {
    paddingTop: '20px',
    '& .hide': {
      display: 'none'
    },
    '& .show': {
      display: 1
    },
    '& button span': {
      color: 'white',
      textTransform: 'capitalize'
    },
    '& .userTwoFactor-heading': {
      marginLeft: '20px',
      fontWeight: 'normal',
      fontSize: '21px',
      borderBottom: '0.1px solid ' + greyLight
    },
    '& .heading-2FA': {
      color: primaryLight
    },
    '& .userTwoFactor': {
      marginTop: '-20px',
      marginLeft: 20,
      '& .enable2FA-note': {
        color: primaryLight,
        margin: '20px 0px 10px 0px',
        display: 'block',
        fontWeight: 'normal'
      },
      '& .statusWrapper': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        margin: '12px 0',
        minHeight: '54px',
        '& .statusTextSpan': {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          margin: '0 10px 0 0',
          padding: '0 10px 0 0',
          borderRight: `2px solid ${greyLight}`,
          textAlign: 'left',
          fontSize: '15px',
          color: primary,
        },
        '& .statusEnable': {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          margin: '0 1%',
          color: green,
          fontWeight: 'bold',
          fontSize: '1.3em',
          '& .lowSecuritySpan': {
            color: greyDark,
            margin: '0 1%'
          }
        },
        '& .statusDisable': {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          margin: '0 1%',
          color: red,
          fontWeight: 'bold',
          fontSize: '1.3em',
          '& .lowSecuritySpan': {
            color: greyDark,
            fontWeight: 'normal',
            fontSize: '0.8em',
            margin: '0 1%'
          }
        },
      },
      '& label': {
        fontSize: '15px',
        marginTop: '15px',
        color: primary,
        paddingRight: '0px',
      },
      '& .phoneWrapper': {
        '& .form-group': {
          flexDirection: 'row',
          marginTop: '10px',
          display: 'block',
        },
        '& .phoneCodeSelect': {
          width: '25%'
        },
        '& .phoneInput': {
          width: '30%'
        },
        '& .secret-Input-field': {
          color: primaryLight,
          width: 'calc(50% - 20px)',
          marginLeft: '60px',
          display: 'inline-block',
          border: 'thin solid ' + greyLight,
          padding: '5px',
          '&::before': {
            backgroundColor: 'transparent'
          }
        },
        '& .code-Input-field': {
          color: primaryLight,
          width: 'calc(50% - 20px)',
          marginLeft: '10px',
          display: 'inline-block',
          border: 'thin solid ' + greyLight,
          padding: '5px',
          verticalAlign: 'top',
          marginTop: 20,
          '&::before': {
            backgroundColor: 'transparent'
          }
        }
      },
    },
    '& .form__container': {
      width: '80%',
      marginLeft: 10,
      '& .form-group': {
        display: 'block',
        flexDirection: 'row',
        '& .label': {
          width: '25%',
          display: 'inline-block',
          textAlign: 'right',
          fontSize: '15px',
          marginTop: '15px',
          color: primary,
          paddingRight: '10px',
          fontWeight: 'normal'
        },
        '& .input-field': {
          color: primaryLight,
          width: 'calc(40% - 100px)',
          margin: '0px 10px',
          display: 'inline-block',
          border: 'thin solid ' + greyLight,
          padding: '10px',
          '&::before': {
            backgroundColor: 'transparent'
          }
        }
      },
    },
    '& .twoFactorBtnGrid': {
      padding: '20px 0px',
      '& .twoFactorBtn': {
        borderRadius: 5,
        padding: 8,
        minHeight: 40,
        width: 150,
        fontSize: 16,
        marginLeft: 10
      }
    },
    '& .active': {
      background: primary,
      '&:hover': {
        background: primaryLight
      },
    },
    '& .disabled': {
      background: greyLight,
      cursor: 'not-allowed',
    }
  },
  mRoot: {
    extend: 'root',
    '& .heading-grid': {
      width: '100%',
      '& .userTwoFactor-heading': {
        marginLeft: 5
      }
    },
    '& .userTwoFactor-left-grid': {
      textAlign: 'center',
      marginLeft: 0,
      '& .twoFactorBtnGrid': {
        textAlign: 'center'
      },
      '& .enable2FA-note': {
        margin: '15px 0px 20px 10px'
      },
      '& .reCapthaWraper': {
        margin: 0,
        textAlign: 'center',
        '& div':{
          display: 'inline-block'
        }
      }
    },
    '& .form__container': {
      marginLeft: 0,
      width: '100%',
      '& .ant-form': {
        '& .ant-form-item': {
          '& .label': {
            width: '100%',
            display: 'block',
            fontSize: 17,
            textAlign: 'left',
            paddingLeft: 15
          },
          '& .input-field': {
            width: '100%'
          }
        }
      }
    },
    '& .form-grid-btn': {
      textAlign: 'center'
    }
  }
};
