const feeds = [
  'https://www.airbnb.com/calendar/ical/1439815947286857449.ics?t=c09d7f419db343b0aa84c22b2264c022',
  'https://www.vrbo.com/icalendar/30380f21f21f44ecbc8164135976d463.ics?nonTentative'
];

function formatDate(date) {
  return date.toISOString().split('T')[0];
}

function addBookedRange(bookedDates, startText, endText) {
  if (!startText || !endText) return;

  const start = new Date(startText.slice(0, 4), startText.slice(4, 6) - 1, startText.slice(6, 8));
  const end = new Date(endText.slice(0, 4), endText.slice(4, 6) - 1, endText.slice(6, 8));

  const current = new Date(start);

  while (current < end) {
    bookedDates.add(formatDate(current));
    current.setDate(current.getDate() + 1);
  }
}

export default async function handler(req, res) {
  try {
    const bookedDates = new Set();

    for (const feed of feeds) {
      const response = await fetch(feed);
      const text = await response.text();

      const events = text.split('BEGIN:VEVENT');

      for (const event of events) {
        const startMatch = event.match(/DTSTART(?:;VALUE=DATE)?:([0-9]{8})/);
        const endMatch = event.match(/DTEND(?:;VALUE=DATE)?:([0-9]{8})/);

        if (startMatch && endMatch) {
          addBookedRange(bookedDates, startMatch[1], endMatch[1]);
        }
      }
    }

    res.status(200).json({
      bookedDates: Array.from(bookedDates).sort()
    });
  } catch (error) {
    res.status(500).json({
      error: 'Unable to load calendar'
    });
  }
}
