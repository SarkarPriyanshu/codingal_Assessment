import defaultState from "../../defaultState";

const BasicHandler = (state = defaultState, action) => {
  switch (action.type) {
    case "HANDLE_CLOSE":
      return {
        ...state,
        handlers: {
          ...state.handlers,
          accordian: false,
          textarea: false,
          close: !state.handlers.close,
        },
      };

    case "HANDLE_ACCORDIAN":
      return {
        ...state,
        handlers: { ...state.handlers, accordian: true },
      };

    case "HANDLE_OTHER_REASON":
      return {
        ...state,
        handlers: { ...state.handlers, textarea: true },
      };

    case "HANDLE_DISABLE_OPTIONS":
      return {
        ...state,
        handlers: {
          ...state.handlers,
          accordian: false,
          textarea: false,
          hamburger: true,
        },
      };

    case "END_CLASS":
      if (action.payload !== "") {
        return {
          ...state,
          reason: action.payload,
          handlers: {
            close: true,
          },
        };
      } else {
        return {
          ...state,
          error: "Please Select one option!",
        };
      }

    case "HANDLE_HAMBURGER":
      return {
        ...state,
        handlers: { ...state.handlers, hamburger: !state.handlers.hamburger },
      };

    case "START_TIMER":
      return {
        ...state,
        timer: { m: action.payload.minute, s: action.payload.second },
      };

    case "END_TIMER":
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default BasicHandler;
