export function formatTimestampToDate(timestampz, optionsDate = 'short') {
  // Create a Date object from the timestamp string
  const date = new Date(timestampz);

  // Check if the date is valid
  if (isNaN(date.getTime())) {
    throw new Error("Invalid date format");
  }

  // Define options for formatting
  const options = {
    day: '2-digit',
    month: optionsDate,
    year: 'numeric'
  };

  // Format the date using toLocaleDateString
  return date.toLocaleDateString('en-GB', options).replace(',', '');
}

export function shortenText(text) {
  // Split the text into an array of words.
  const words = text.split(" ");

  // If the text is less than 20 words, return the original text.
  if (words.length <= 13) {
    return text;
  }

  // Otherwise, return the first 20 words joined by spaces.
  return words.slice(0, 13).join(" ");
}