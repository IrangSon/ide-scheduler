// 주 단위로 간격을 확인하는 함수
const isInterval = (baseDate: Date, currentDate: Date, weeks: number): boolean => {
  const diffTime = Math.abs(currentDate.getTime() - baseDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays % (weeks * 7) === 0;
};

// 3주 간격인지 확인하는 함수
export const isThreeWeekInterval = (baseDate: Date, currentDate: Date): boolean => {
  return isInterval(baseDate, currentDate, 3);
};

// 6주 간격인지 확인하는 함수
export const isSixWeekInterval = (baseDate: Date, currentDate: Date): boolean => {
  return isInterval(baseDate, currentDate, 6);
};

export const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}${month}${day}`;
};
