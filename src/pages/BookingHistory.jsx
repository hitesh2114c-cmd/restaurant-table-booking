import { useState } from "react";
import { supabase } from "../supabase";

function BookingHistory() {
  const [bookings, setBookings] = useState([]);

  async function getBookings() {
    // Fetch data from our new restaurant table
    const { data, error } = await supabase
      .from("table_bookings")
      .select("*");
      
    if (error) {
      console.error(error);
      alert("Failed to retrieve reservations");
      return;
    }
    
    // Store the retrieved data in our React state[span_1](start_span)[span_1](end_span)
    setBookings(data);
  }

  return (
    <main className="history-page">
      <h1>Reservation History</h1>
      <button className="history-button" onClick={getBookings}>
        View Reservations
      </button>
      
      <div className="history-table-wrapper">
        <table className="history-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Guests</th>
              <th>Seating</th>
              <th>Branch</th>
            </tr>
          </thead>
          <tbody>
            {/* Loop through the data to generate table rows[span_2](start_span)[span_2](end_span) */}
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.name}</td>
                <td>{booking.guests}</td>
                <td>{booking.seating}</td>
                <td>{booking.branch}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default BookingHistory;
