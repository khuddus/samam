// components/Events/UpcomingEvents.tsx
import { AiOutlineCalendar } from 'react-icons/ai';
import { IEvent } from '~/models/Event';
interface UpcomingEventsProps {
  events: IEvent[]
}
export default function UpcomingEvents({ events }:UpcomingEventsProps) {
  return (
    <div className="events grid grid-cols-1 md:grid-cols-2 gap-4">
      {events?.map((event, index) => (
        <div key={index} className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h3 className="card-title flex items-center">
              <AiOutlineCalendar className="h-6 w-6 mr-2" />
              {event.title}
            </h3>
            <p>{new Date(event.date).toLocaleDateString()}</p>
            <p>{event.description}</p>
            <p>{event.location}</p>
            <a href={event.googleMapsLink} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
          </div>
        </div>
      ))}
    </div>
  );
}
