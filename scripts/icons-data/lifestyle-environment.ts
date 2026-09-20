import { RawIconDefinition } from "./types";

export const lifestyleEnvironmentIcons: RawIconDefinition[] = [
  // Calendar & Time
  {
    name: "calendar",
    category: "calendar",
    title: "Calendar",
    tags: ["date", "month", "schedule", "planner", "event"],
    aliases: ["calendar planner", "monthly schedule"],
    elements: '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>'
  },
  {
    name: "calendar-days",
    category: "calendar",
    title: "Calendar Grid",
    tags: ["days", "timetable", "appointments", "dates"],
    aliases: ["calendar view", "days matrix"],
    elements: '<rect width="18" height="18" x="3" y="4" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"/>'
  },
  {
    name: "calendar-check",
    category: "calendar",
    title: "Calendar Confirmed",
    tags: ["scheduled", "booked", "meeting confirmed"],
    aliases: ["confirmed booking", "scheduled check"],
    elements: '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><polyline points="9 16 11 18 15 14"/>'
  },
  {
    name: "clock",
    category: "calendar",
    title: "Clock",
    tags: ["time", "hours", "watch", "alarm", "schedule"],
    aliases: ["analog clock", "hours watch"],
    elements: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>'
  },
  {
    name: "timer",
    category: "calendar",
    title: "Timer",
    tags: ["stopwatch", "countdown", "chronometer", "duration"],
    aliases: ["stopwatch", "countdown timer"],
    elements: '<line x1="10" y1="2" x2="14" y2="2"/><line x1="12" y1="14" x2="15" y2="11"/><circle cx="12" cy="14" r="8"/>'
  },
  {
    name: "hourglass",
    category: "calendar",
    title: "Hourglass",
    tags: ["waiting", "sand", "duration", "pending", "expire"],
    aliases: ["sand timer", "hourglass pending"],
    elements: '<path d="M5 22h14M5 2h14M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"/>'
  },
  // Weather
  {
    name: "sun",
    category: "weather",
    title: "Sun Clear",
    tags: ["sunny", "day", "warmth", "bright", "forecast"],
    aliases: ["sunny weather", "clear sky"],
    elements: '<circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="6.34" y2="6.34"/><line x1="17.66" y1="17.66" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="6.34" y2="17.66"/><line x1="17.66" y1="6.34" x2="19.07" y2="4.93"/>'
  },
  {
    name: "cloud-rain",
    category: "weather",
    title: "Rain Shower",
    tags: ["precipitation", "drops", "storm", "wet"],
    aliases: ["rain cloud", "precipitation"],
    elements: '<line x1="16" y1="13" x2="16" y2="21"/><line x1="8" y1="13" x2="8" y2="21"/><line x1="12" y1="15" x2="12" y2="23"/><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"/>'
  },
  {
    name: "cloud-lightning",
    category: "weather",
    title: "Thunderstorm",
    tags: ["thunder", "storm", "flash", "tempest"],
    aliases: ["thunderstorm", "lightning cloud"],
    elements: '<path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"/><polyline points="13 11 9 17 15 17 11 23"/>'
  },
  {
    name: "wind",
    category: "weather",
    title: "Wind Breeze",
    tags: ["breeze", "air", "gust", "draft", "blow"],
    aliases: ["gust breeze", "air current"],
    elements: '<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/>'
  },
  {
    name: "umbrella",
    category: "weather",
    title: "Umbrella",
    tags: ["protection", "rain shield", "monsoon", "shelter"],
    aliases: ["rain umbrella", "parasol"],
    elements: '<path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"/>'
  },
  {
    name: "snowflake",
    category: "weather",
    title: "Snowflake",
    tags: ["snow", "winter", "cold", "freezing", "ice"],
    aliases: ["ice crystal", "winter snow"],
    elements: '<line x1="2" y1="12" x2="22" y2="12"/><line x1="12" y1="2" x2="12" y2="22"/><path d="m20 16-4-4 4-4M4 8l4 4-4 4M16 4l-4 4-4-4M8 20l4-4 4 4"/>'
  },
  // Transportation & Travel
  {
    name: "car",
    category: "transportation",
    title: "Automobile Car",
    tags: ["vehicle", "automobile", "drive", "road", "taxi"],
    aliases: ["automobile", "passenger car"],
    elements: '<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C1.4 11.2 1 12 1 12.8V16c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/>'
  },
  {
    name: "bus",
    category: "transportation",
    title: "Transit Bus",
    tags: ["public transit", "commute", "coach", "shuttle"],
    aliases: ["transit bus", "commuter coach"],
    elements: '<path d="M8 6v6M16 6v6M2 12h20"/><rect x="4" y="3" width="16" height="16" rx="2"/><circle cx="7.5" cy="16.5" r="1.5"/><circle cx="16.5" cy="16.5" r="1.5"/><path d="M6 21v1M18 21v1"/>'
  },
  {
    name: "plane",
    category: "transportation",
    title: "Airplane Flight",
    tags: ["aviation", "travel", "flight", "aerospace", "trip"],
    aliases: ["aeroplane", "flight travel"],
    elements: '<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>'
  },
  {
    name: "luggage",
    category: "travel",
    title: "Luggage Suitcase",
    tags: ["baggage", "traveler", "vacation", "trip", "packing"],
    aliases: ["travel suitcase", "baggage trolley"],
    elements: '<rect x="6" y="7" width="12" height="14" rx="2"/><path d="M9 7V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v3"/><line x1="6" y1="12" x2="18" y2="12"/><line x1="6" y1="16" x2="18" y2="16"/><circle cx="9" cy="21" r="1"/><circle cx="15" cy="21" r="1"/>'
  },
  {
    name: "hotel",
    category: "travel",
    title: "Hotel Stay",
    tags: ["accommodation", "hospitality", "lodging", "resort"],
    aliases: ["hotel building", "hospitality lodge"],
    elements: '<path d="M10 22v-6.57H6V22H2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v18h-4v-6.57h-4V22z"/><path d="M6 6h2M6 10h2M16 6h2M16 10h2"/>'
  },
  // Health
  {
    name: "heart-pulse",
    category: "health",
    title: "Heart Pulse",
    tags: ["medical", "cardio", "vitality", "ecg", "healthcare"],
    aliases: ["cardiac pulse", "vital heartbeat"],
    elements: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l1.5-3 2 6 1.5-3h6.28"/>'
  },
  {
    name: "cross",
    category: "health",
    title: "First Aid Cross",
    tags: ["hospital", "clinic", "emergency", "medical center"],
    aliases: ["medical cross", "first aid symbol"],
    elements: '<path d="M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z"/>'
  },
  {
    name: "pill",
    category: "health",
    title: "Pill Medicine",
    tags: ["pharmacy", "capsule", "drug", "tablet", "treatment"],
    aliases: ["medicine capsule", "pharma pill"],
    elements: '<path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><line x1="8.5" y1="8.5" x2="15.5" y2="15.5"/>'
  },
  {
    name: "stethoscope",
    category: "health",
    title: "Stethoscope",
    tags: ["doctor", "physician", "checkup", "diagnostic"],
    aliases: ["doctor tool", "stethoscope diagnostic"],
    elements: '<path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/><path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/><circle cx="20" cy="10" r="2"/>'
  },
  // Food
  {
    name: "coffee",
    category: "food",
    title: "Coffee Cup",
    tags: ["espresso", "tea", "cafe", "hot drink", "break"],
    aliases: ["coffee mug", "hot espresso"],
    elements: '<path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>'
  },
  {
    name: "utensils",
    category: "food",
    title: "Utensils",
    tags: ["dining", "fork", "knife", "restaurant", "meal"],
    aliases: ["fork knife", "dining cutlery"],
    elements: '<path d="M18 2v20M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm-15 7v-7.5a2.5 2.5 0 0 0-2.5-2.5H3V2h2v5h2V2h2v5h2V2h2v5a2.5 2.5 0 0 1-2.5 2.5V22"/>'
  },
  {
    name: "apple",
    category: "food",
    title: "Fresh Apple",
    tags: ["fruit", "healthy", "diet", "nutrition", "snack"],
    aliases: ["fresh fruit", "apple nutrition"],
    elements: '<path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"/><path d="M10 2c1 .5 2 2 2 5"/>'
  },
  // Accessibility
  {
    name: "accessibility",
    category: "accessibility",
    title: "Accessibility Figure",
    tags: ["a11y", "inclusion", "universal design", "assistive"],
    aliases: ["a11y person", "universal access"],
    elements: '<circle cx="16" cy="4" r="1"/><path d="m18 19 1-7-6 1"/><path d="m5 8 3-3 5.5 3-2.36 3.5"/><path d="M4.24 14.5a5 5 0 0 0 6.88 6"/><path d="M13.76 17.5a5 5 0 0 0-1.76-6.5"/>'
  },
  {
    name: "ear",
    category: "accessibility",
    title: "Hearing Assist",
    tags: ["audio", "hearing aid", "deaf", "sound"],
    aliases: ["hearing assist", "ear accessibility"],
    elements: '<path d="M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0"/><path d="M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4"/>'
  }
];
