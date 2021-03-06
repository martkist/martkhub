import palette from '../../../styles/palette';

const primaryLight = palette.primaryLight;
const gray = palette.grey;
const greyDark = palette.greyDark;

export default {
  root: {
    '& .no-margin': {
      margin: 0,
      '& .heading': {
        fontSize: 20,
        color: greyDark,
        fontWeight: 200
      }
    },
    '& .ownerView': {
      margin: 0,
      marginTop: 30,
      '& .OnTimeOwnerView': {
        flexBasis: '60% !important',
        padding: 0,
        marginLeft: '4%',
        fontSize: 14,
        '& .heading': {
          color: gray,
          fontSize: 14,
          marginBottom: 2
        },
        '& .form': {
          '& .FormGroup': {
            display: 'grid',
            gridTemplateColumns: 'auto auto',
            gridTemplateRows: 'auto',
            alignItems: 'center',
            gridColumnGap: '5px',
            '&.withLink': {
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              gridTemplateRows: 'auto',
              gridColumnGap: '10px'
            },
            '& .input-field': {
              color: primaryLight,
              padding: 5,
              border: '1px solid ' + gray,
              width: '100%'
            },
            '& .input-field::-webkit-input-placeholder': {
              /* Chrome/Opera/Safari */
              color: primaryLight
            },
            '& .input-field::-moz-placeholder': {
              /* Firefox 19+ */
              color: primaryLight
            },
            '& .input-field:-ms-input-placeholder': {
              /* IE 10+ */
              color: primaryLight
            },
            '& .input-field:-moz-placeholder': {
              /* Firefox 18- */
              color: primaryLight
            }
          },
          '& .collateralHashInfo:hover': {
            color: primaryLight,
            cursor: 'pointer'
          }
        }
      }
    }
  },
  mRoot: {
    extend: 'root',
    width: '100%',
    '& .no-margin': {
      '&>p': {
        fontSize: 20
      }
    },
    '& .ownerView': {
      marginTop: 0,
      width: '100%',
      '& .OnTimeOwnerView': {
        maxWidth: '100%',
        width: '100%',
        flexBasis: 'inherit',
        marginLeft: 0,
        padding: '5px 0px',
        '& .heading': {
          fontSize: 17
        },
        '& .form': {
          '& .FormGroup': {
            gridTemplateColumns: 'auto',
            gridTemplateRows: 'auto auto',
            '& .input-field': {
              height: 35,
              width: '100%'
            }
          }
        }
      }
    }
  }
};
