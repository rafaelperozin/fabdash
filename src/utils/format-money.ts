/**
 * Language-sensitive number formatting
 * @param value to convert
 * @param currency E.g.: 'USD' | 'GBP'
 * @returns E.g.: £1,020.50
 */
export const formatMoney = (value: number, currency: string): string => {
  /**
   * NOTE: Locale could be dynamic related to the language picker
   */
  return new Intl.NumberFormat("en-EN", {
    style: "currency",
    currency: currency,
  }).format(value);
};
