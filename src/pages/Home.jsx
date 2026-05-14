import Services from '../components/Services';
import Dashboard from '../components/Dashboard';

export default function Home({ bookings }) {
  return (
    <>
      <Services />

      <Dashboard bookings={bookings} />
    </>
  );
}
