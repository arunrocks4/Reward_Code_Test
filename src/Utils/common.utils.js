const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export const getMonthYearFormat = (date) => {
    if(!date) {
        return "date required"
    }
    const d = new Date(date);
    if(isNaN(d.getDate())) {
        return "invalid date"
    }
    return `${months[d.getMonth()]} ${d.getFullYear()}`
}
export const calculateRewards = (amount) => {
    const roundedAmount = Math.floor(amount);
    if (roundedAmount > 100) {
      return (roundedAmount - 100) * 2 + 50; // 2 points for every dollar above 100, 1 point for every dollar above 50
    } else if (roundedAmount > 50) {
      return roundedAmount - 50; // 1 point for every dollar above 50
    } else {
      return 0;
    }
};