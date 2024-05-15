/**
 * Format currency
 * @param value
 * @param currency
 * @param locate
 * @returns currency
 * @example
 * formatCurrency(1000000) => "1,000,000 VNĐ"
 * formatCurrency(1000000, "$") => "$1,000,000"
 * formatCurrency(1000000, "$", "en-US") => "$1,000,000"
 * formatCurrency(1000000, "€", "de-DE") => "1.000.000 €"
 */
export const formatCurrency = (
  value: number,
  currency: string = "VNĐ",
  locate: string = "vi-VN"
) => {
  return new Intl.NumberFormat(locate, {
    style: "currency",
    currency: currency,
  }).format(value);
};
