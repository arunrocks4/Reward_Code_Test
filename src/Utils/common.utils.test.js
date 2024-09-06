import { calculateRewards, getMonthYearFormat } from "./common.utils"

test("Should return proper month and year", () => {
    const jan24 = getMonthYearFormat('01/11/2024');
    expect(jan24).toBe('Jan 2024');
    const feb23 = getMonthYearFormat('02/28/2023');
    expect(feb23).toBe('Feb 2023');
    const nov24 = getMonthYearFormat('11/11/2024');
    expect(nov24).toBe('Nov 2024');
});

test("Should return not valid date if date is wrong", () => {
    const invalidDate = getMonthYearFormat('test');
    expect(invalidDate).toBe('invalid date');
    const blankDate = getMonthYearFormat('');
    expect(blankDate).toBe('date required');
    const nodate = getMonthYearFormat();
    expect(nodate).toBe('date required');
});

test("Should return proper reward point with positive amounts", () => {
    const below50 = calculateRewards(22);
    expect(below50).toBe(0);

    const above50 = calculateRewards(60);
    expect(above50).toBe(10);

    const above100 = calculateRewards(120);
    expect(above100).toBe(90);
})

test("Should return proper reward point with positive floating amounts", () => {
    const below50 = calculateRewards(22.22);
    expect(below50).toBe(0);

    const above50 = calculateRewards(60.77);
    expect(above50).toBe(10);

    const above100 = calculateRewards(120.450);
    expect(above100).toBe(90);
});

test("Should return proper reward point with negetive and zero amount", () => {
    const zero = calculateRewards(0);
    expect(zero).toBe(0);

    const minusabove50 = calculateRewards(-60);
    expect(minusabove50).toBe(0);

    const minusabove100 = calculateRewards(-120.450);
    expect(minusabove100).toBe(0);
});