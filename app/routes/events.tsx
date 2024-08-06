// routes/events.tsx
import { LoaderFunction } from '@remix-run/node';
import { Event } from '~/models/Event';
import { connectToDatabase } from '~/db/connection';
import UpcomingEvents from '~/components/Events/UpcomingEvents';
import { FaCalendarAlt } from 'react-icons/fa';
import { useLoaderData } from '@remix-run/react';

export const loader: LoaderFunction = async () => {
  await connectToDatabase();
  const events = await Event.find().populate('createdBy').exec();
  return { events };
};

export default function Events() {
  const { events } = useLoaderData<typeof loader>();

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4 flex items-center">
        <FaCalendarAlt className="mr-2" /> Events
      </h2>
      <p className="text-lg">
        Stay updated with our upcoming events, seminars, and workshops. Join us to expand your knowledge and network with like-minded individuals.
      </p>
      <div className="mt-4">
        <UpcomingEvents events={events} />
      </div> 
    </div>
  );
}
