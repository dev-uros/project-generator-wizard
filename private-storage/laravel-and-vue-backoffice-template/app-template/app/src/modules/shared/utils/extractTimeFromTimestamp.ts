export function extractTimeFromTimestamp(timestamp: string): string{

// Create a Date object from the timestamp
  const dateObject = new Date(timestamp);

// Extract hours and minutes
  const hours = String(dateObject.getHours()).padStart(2, '0');
  const minutes = String(dateObject.getMinutes()).padStart(2, '0');

// Format the result as "hh:mm"
  return `${hours}:${minutes}`;
}
