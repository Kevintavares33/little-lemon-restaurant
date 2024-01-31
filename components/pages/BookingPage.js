import { useReducer } from "react";
import { fetchAPI } from "../../bookingsAPI";
import ReservationForm from "../sections/reservePages/BookingForm";
import Heading from "../sections/reservePages/Heading";
export default function BookingPage() {
  function updateTimes(date) {
    return fetchAPI(date);
  }

  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);

  return (
    <>
      <Heading />
      <ReservationForm availableTimes={availableTimes} updateTimes={dispatch} />
    </>
  );
}
