export const getDateValues = (selectedMonth: string, selectedYear: string) => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => ({ label: `${currentYear - i}`, value: `${currentYear - i}` }));
  const months = Array.from({ length: 12 }, (_, i) => ({ label: `${i + 1}`, value: `${i<=8 ? "0" : ""}${i + 1}` }));

  const daysInMonth = new Date(parseInt(selectedYear), parseInt(selectedMonth), 0).getDate();
  const days = Array.from({ length: daysInMonth }, (_, i) => ({ label: `${i + 1}`, value: `${i<=8 ? "0" : ""}${i + 1}` }));
  
  return { days, months, years };
}
