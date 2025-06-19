// utils/currency.js
export const detectUserCurrency = async () => {
  try {
    // First try IP-based detection
    const response = await fetch("https://ipapi.co/currency/");

    if (response.ok) {
      const currency = await response.text();
      if (currency && currency.length === 3) {
        return currency; // Returns like "USD", "INR", "EUR"
      }
    }
  } catch (error) {
    console.error("Currency detection failed:", error);
  }

  // Fallback to browser locale detection
  if (typeof window !== "undefined" && navigator?.language) {
    const locale = navigator.language;
    const localeToCurrency = {
      "en-IN": "INR",
      "en-US": "USD",
      "de-DE": "EUR",
      "en-GB": "GBP",
      "ja-JP": "JPY",
    };
    return localeToCurrency[locale] || "USD"; // Default to USD if unknown
  }

  return "USD"; // Final fallback
};

export const formatCurrency = (amount, currency = "USD") => {
  const symbols = {
    USD: "$",
    INR: "₹",
    EUR: "€",
    GBP: "£",
    JPY: "¥",
  };

  try {
    return new Intl.NumberFormat(undefined, {
      style: "currency",
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  } catch (e) {
    // Fallback formatting
    const symbol = symbols[currency] || currency;
    return `${symbol}${amount.toFixed(2)}`;
  }
};
