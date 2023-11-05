/**
 * This helper function is used to format the date object values.
 * @param dateString Date String
 * @returns Formatted date eg: 2022-01-01
 */
export const formatDate = (dateString: string) => {
  const dateValue = new Date(String(dateString));

  const year = dateValue.getFullYear();
  const month = dateValue.getMonth();
  const date = dateValue.getDate();
  return (
    year +
    '-' +
    (month <= 9 ? '0' + month : month) +
    '-' +
    (date <= 9 ? '0' + date : date)
  );
};
