import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

export const timeConverter = (utcTime) => {
  const date = dayjs.utc(utcTime);
  return date.local().format('YYYY-MM-DD');
};
