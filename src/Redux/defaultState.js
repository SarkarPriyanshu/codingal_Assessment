const defaultState = {
  timer: { s: 0, m: 10 },
  isTimerOn: null,
  reason: "",
  loading: true,
  error: "",
  handlers: {
    close: true, //to open and close the model section
    accordian: false, //to open the accordian
    textarea: false, //to open the textarea
    hamburger: window.innerWidth >= 375 ? true : false, //to open and close the hambermenu
  },
};

export default defaultState;
