import BookingList from '../components/BookingList';

export default function Booking({ bookings, setBookings }) {
  return <BookingList bookings={bookings} setBookings={setBookings} />;
}
