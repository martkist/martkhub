import constants from '../constants';
import initialState from '../constants/reduxInitialState/appInitalState';

const app = (state = initialState, action) => {
  switch (action.type) {
    case constants.APP_USER_LOGIN:
      return {
        ...state,
        currentUser: action.data
      };

    case constants.APP_USER_LOGOUT:
      return {
        ...state,
        currentUser: action.data,
        showPage: action.goToPage
      };

    case constants.APP_PAGE_SHOW: {
      return {
        ...state,
        showPage: action.data,
        showMenu: false,
        showChat: false
      };
    }

    case constants.APP_CHAT_TOGGLE:
      return {
        ...state,
        showChat: !state.showChat,
        showMenu: false
      };

    case constants.APP_MENU_TOGGLE:
      return {
        ...state,
        showMenu: !state.showMenu,
        showChat: false
      };

    case constants.APP_PLATFORM_GET: {
      return {
        ...state,
        platform: action.data
      };
    }

    case constants.APP_LOADING_GLOBAL:
      return { ...state, loading: action.data };

    case constants.SET_2FA:
      return { ...state, twoFA: action.data };

    case constants.APP_PROPOSAL_CONTAINER:
      return {
        ...state,
        dashBoard: { ...state.dashBoard, showContainer: action.data }
      };

    case constants.APP_PROPOSAL_SHOW:
      return {
        ...state,
        dashBoard: { ...state.dashBoard, selectedProposal: action.data },
        loading: false
      };

    default:
      return state;
  }
};

export default app;
