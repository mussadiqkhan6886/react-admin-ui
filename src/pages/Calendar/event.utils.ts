let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'All-day Event',
    start: todayStr
  },
  {
    id: createEventId(),
    title: 'Project Meeting',
    start: todayStr + 'T09:00:00',
    end: todayStr + 'T10:00:00'
  },
  {
    id: createEventId(),
    title: "Mussadiq's Birthday",
    start: '2025-08-10'
  },
  {
    id: createEventId(),
    title: 'Team Lunch 🍽️',
    start: '2025-08-07T13:00:00',
    end: '2025-08-07T14:00:00'
  },
  {
    id: createEventId(),
    title: 'UI Design Review',
    start: '2025-08-05T15:00:00',
    end: '2025-08-05T16:30:00'
  },
  {
    id: createEventId(),
    title: 'Client Presentation',
    start: '2025-08-12T11:00:00',
    end: '2025-08-12T12:00:00'
  },
  {
    id: createEventId(),
    title: 'Hackathon 💻',
    start: '2025-08-15',
    end: '2025-08-17'
  },
  {
    id: createEventId(),
    title: 'Public Holiday 🇵🇰',
    start: '2025-08-14',
    allDay: true
  },
  {
    id: createEventId(),
    title: 'Product Launch',
    start: '2025-08-09T18:00:00',
    end: '2025-08-09T19:30:00'
  },
  {
    id: createEventId(),
    title: 'Team Retrospective',
    start: '2025-08-08T16:00:00',
    end: '2025-08-08T17:00:00'
  }
]

export function createEventId() {
  return String(eventGuid++)
}
