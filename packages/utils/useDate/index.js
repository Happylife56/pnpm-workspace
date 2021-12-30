export function useDate() {
  // 获取当前的时间
  const formatTime = (val) => {
    if (val < 10) {
      return `0${val}`;
    }
    return val;
  };
  /**
   *
   * @param {string} type month: 年-月 day：年-月-日
   */
  const getNowTime = (type) => {
    const nowTime = new Date();
    const year = nowTime.getFullYear();
    const month = formatTime(nowTime.getMonth() + 1);
    const day = formatTime(nowTime.getDate());
    const hours = formatTime(nowTime.getHours());
    const minutes = formatTime(nowTime.getMinutes());
    const seconds = formatTime(nowTime.getSeconds());
    if (type === 'month') return `${year}-${month}`;
    if (type === 'day') return `${year}-${month}-${day}`;
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };
  return { getNowTime };
}
