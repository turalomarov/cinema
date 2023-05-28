const toHoursAndMinutes = (totalMinutes: number = 0) => {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return `${hours > 0 ? `${hours}h` : ''} ${minutes > 0 ? `${minutes}m` : ''}`;
};

const getYear = (date: string = 'N/A') => {
  try {
    return Intl.DateTimeFormat('en-Us', {
      year: 'numeric',
    }).format(new Date(date));
  } catch (err) {
    return 'N/A';
  }
};

export { getYear, toHoursAndMinutes };
