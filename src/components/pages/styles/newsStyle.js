import palette from './palette';
const greyDark = palette.greyDark;
const primary = palette.primary;
const white = palette.white;
export default {
  root: {
    '& .title': {
      fontWeight: 300,
      color: greyDark,
      textTransform: 'uppercase',
      padding: 15,
      backgroundColor: white,
    },
    '& .iconWraper': { fontSize: 14, cursor: 'pointer' },
    '& .icon': { color: primary },
    '& .iconTxt': { color: primary },
    '& .paper-container': {
      padding: '0px 15px',
      overflowY: 'auto',
      height: '80vh',
    }
  },
};
