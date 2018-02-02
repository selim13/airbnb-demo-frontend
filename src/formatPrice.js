export default function formatPrice(price, currency = 'USD', locale = 'en-US') {
  return price.toLocaleString(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
}
