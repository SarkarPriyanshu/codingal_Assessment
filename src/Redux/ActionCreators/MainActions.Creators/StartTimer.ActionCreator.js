export const StartTimer = () => {
  return async function (dispatch, getState) {
    let {
      BasicHandler: {
        timer: { m },
      },
    } = getState();

    let startingTime = m;
    let time = startingTime * 60;

    await setInterval(updateCountdown, 1000);

    function updateCountdown() {
      let minute, second;

      minute = Math.floor(time / 60);
      second = time % 60;

      dispatch({
        type: "START_TIMER",
        payload: { minute, second },
      });
      time++;
    }
  };
};
