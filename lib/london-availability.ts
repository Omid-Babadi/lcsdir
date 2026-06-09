const LONDON_TIME_ZONE = "Europe/London";

const londonTimeFormatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: LONDON_TIME_ZONE,
  weekday: "short",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
});

const weekdayNames = new Set(["mon", "tue", "wed", "thu", "fri"]);

function getLondonTimeParts(date: Date) {
  const parts = londonTimeFormatter.formatToParts(date);
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));

  return {
    weekday: values.weekday?.toLowerCase(),
    minutes: Number(values.hour) * 60 + Number(values.minute),
  };
}

export function isLondonBusinessHours(date = new Date()) {
  const { weekday, minutes } = getLondonTimeParts(date);
  const open = 8 * 60;

  if (weekday && weekdayNames.has(weekday)) {
    return minutes >= open && minutes < 18 * 60;
  }

  if (weekday === "sat") {
    return minutes >= open && minutes < 15 * 60;
  }

  return false;
}
