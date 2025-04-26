import { redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

function EventDetailPage() {
  const data = useRouteLoaderData("event-detail");
  console.log(data, "data");

  return <EventItem event={data} />;
}

export default EventDetailPage;

export async function loader({ request, params }) {
  const id = params.eventId;

  const response = await fetch(`http://localhost:8080/events/${id}`);

  if (!response.ok) {
    throw new Response(
      JSON.stringify({
        message: "Could not fetch detailts for selectet event.",
      }),
      {
        status: 500,
        statusText: "Could not fetch event.",
      }
    );
  } else {
    const resData = await response.json();
    return resData.event; // 👈 Make sure this matches your backend response shape
  }
}

export async function action({ request, params }) {
  const id = params.eventId;
  const response = await fetch(`http://localhost:8080/events/${id}`, {
    method: request.method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });
  if (!response.ok) {
    throw new Response(
      JSON.stringify({
        message: "Could not delete event.",
      }),
      {
        status: 500,
        statusText: "Could not delete event.",
      }
    );
  } else {
    return redirect("/events");
  }
}
