import { useState } from "react";
import { supabase } from "../supabase";

function Booking() {
    const [name, setName] = useState("");
    const [guests, setGuests] = useState("");
    const [seating, setSeating] = useState("");
    const [branch, setBranch] = useState("");

    async function handleBooking() {
        if (!name || !guests || !seating || !branch) {
            alert("Please fill all the details");
            return;
        }
        
        const { data, error } = await supabase
            .from("table_bookings")
            .insert([{
                name: name,
                guests: Number(guests),
                seating: seating,
                branch: branch
            }]);

        if (error) {
            console.error(error);
            alert("Reservation failed");
            return;
        }
        alert("Table reserved successfully!");
    }

    return (
        <main className="booking-page">
            <h1>Book Your Table</h1>
            <div className="booking-form">
                <label htmlFor="name">Reservation Name</label>
                <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
                
                <label htmlFor="guests">Number of Guests</label>
                <input id="guests" type="number" min="1" value={guests} onChange={(e) => setGuests(e.target.value)} placeholder="How many guests?" />

                <label htmlFor="seating">Select Seating</label>
                <select id="seating" value={seating} onChange={(e) => setSeating(e.target.value)}>
                    <option value="">-- Select Seating --</option>
                    <option value="Indoor AC">Indoor AC</option>
                    <option value="Outdoor Rooftop">Outdoor Rooftop</option>
                </select>

                <label htmlFor="branch">Select Branch</label>
                <select id="branch" value={branch} onChange={(e) => setBranch(e.target.value)}>
                    <option value="">-- Select Branch --</option>
                    <option value="Downtown Avenue">Downtown Avenue</option>
                    <option value="Marina Bay">Marina Bay</option>
                </select>
                
                <button onClick={handleBooking}>Confirm Reservation</button>
            </div>
            
            <section className="booking-details">
                <h3>Live Reservation Summary</h3>
                <p>Name: <strong>{name || "-"}</strong></p>
                <p>Guests: <strong>{guests || "-"}</strong></p>
                <p>Seating: <strong>{seating || "-"}</strong></p>
                <p>Branch: <strong>{branch || "-"}</strong></p>
            </section>
        </main>
    );
}
export default Booking;
