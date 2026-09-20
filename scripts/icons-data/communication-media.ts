import { RawIconDefinition } from "./types";

export const communicationMediaIcons: RawIconDefinition[] = [
  // Communication
  {
    name: "mail",
    category: "communication",
    title: "Mail",
    tags: ["email", "message", "letter", "inbox", "correspondence"],
    aliases: ["envelope", "email inbox"],
    elements: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>'
  },
  {
    name: "message-square",
    category: "communication",
    title: "Message Square",
    tags: ["chat", "comment", "discussion", "bubble", "feedback"],
    aliases: ["chat bubble", "comment box"],
    elements: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>'
  },
  {
    name: "message-circle",
    category: "communication",
    title: "Message Circle",
    tags: ["chat", "conversation", "round bubble", "sms"],
    aliases: ["round chat", "speech bubble"],
    elements: '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>'
  },
  {
    name: "phone",
    category: "communication",
    title: "Phone",
    tags: ["call", "telephone", "mobile", "support", "hotline"],
    aliases: ["telephone", "hotline call"],
    elements: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>'
  },
  {
    name: "phone-call",
    category: "communication",
    title: "Phone Call Active",
    tags: ["ringing", "incoming", "answering", "dialing"],
    aliases: ["active phone", "ringing handset"],
    elements: '<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>'
  },
  {
    name: "inbox",
    category: "communication",
    title: "Inbox",
    tags: ["mail container", "incoming", "archive", "tray"],
    aliases: ["mail tray", "incoming box"],
    elements: '<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>'
  },
  {
    name: "send",
    category: "communication",
    title: "Send Message",
    tags: ["airplane", "transmit", "dispatch", "deliver", "post"],
    aliases: ["paper plane", "send message"],
    elements: '<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>'
  },
  {
    name: "bell",
    category: "communication",
    title: "Notification Bell",
    tags: ["alert", "chime", "reminder", "alarm", "updates"],
    aliases: ["alert chime", "notification ringer"],
    elements: '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>'
  },
  {
    name: "bell-off",
    category: "communication",
    title: "Bell Mute",
    tags: ["silent", "do not disturb", "mute alerts", "quiet"],
    aliases: ["mute bell", "dnd alert"],
    elements: '<path d="M13.73 21a2 2 0 0 1-3.46 0"/><path d="M18.63 13A17.89 17.89 0 0 1 18 8"/><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"/><path d="M18 8a6 6 0 0 0-9.33-5"/><line x1="1" y1="1" x2="23" y2="23"/>'
  },
  // Media
  {
    name: "play",
    category: "media",
    title: "Play",
    tags: ["start", "video", "audio", "stream", "resume"],
    aliases: ["play triangle", "start media"],
    elements: '<polygon points="5 3 19 12 5 21 5 3"/>'
  },
  {
    name: "pause",
    category: "media",
    title: "Pause",
    tags: ["hold", "freeze", "break", "halt"],
    aliases: ["pause bars", "hold media"],
    elements: '<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>'
  },
  {
    name: "volume-2",
    category: "media",
    title: "Volume High",
    tags: ["loud", "audio", "speaker", "sound", "music"],
    aliases: ["speaker loud", "high audio"],
    elements: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>'
  },
  {
    name: "volume-x",
    category: "media",
    title: "Volume Mute",
    tags: ["silent", "no audio", "quiet", "mute"],
    aliases: ["mute speaker", "sound off"],
    elements: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>'
  },
  {
    name: "video",
    category: "media",
    title: "Video Camera",
    tags: ["movie", "record", "webcam", "film", "stream"],
    aliases: ["camcorder", "video recorder"],
    elements: '<polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>'
  },
  {
    name: "camera",
    category: "media",
    title: "Camera",
    tags: ["photo", "picture", "snapshot", "lens"],
    aliases: ["photo camera", "snapshot lens"],
    elements: '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>'
  },
  {
    name: "image",
    category: "media",
    title: "Image",
    tags: ["photo", "picture", "gallery", "graphic", "wallpaper"],
    aliases: ["gallery photo", "picture card"],
    elements: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>'
  },
  {
    name: "music",
    category: "media",
    title: "Music Note",
    tags: ["sound", "audio", "song", "tune", "melody"],
    aliases: ["quarter note", "melody sound"],
    elements: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>'
  },
  {
    name: "mic",
    category: "media",
    title: "Microphone",
    tags: ["record", "voice", "podcast", "speech", "audio input"],
    aliases: ["voice mic", "speech input"],
    elements: '<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>'
  }
];
