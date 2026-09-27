function RestaurantCard(props) {
  return (
    <div className="match-card">
      <h2>{props.restaurantName}</h2>
      <p>🍽️ {props.cuisine}</p>
      <p>📍 {props.location}</p>
      <p>⭐ {props.rating}</p>
      <button>Reserve Now</button>
    </div>
  );
}

function Restaurants() {
  return (
    <main className="matches-page">
      <h1>Featured Restaurants</h1>
      <div className="matches-grid">
        <RestaurantCard
          restaurantName="The Spice Symphony"
          cuisine="Indian Fusion"
          location="Downtown Avenue"
          rating="4.8/5"
        />
        <RestaurantCard
          restaurantName="Ocean Blue Seafood"
          cuisine="Seafood & Grill"
          location="Marina Bay"
          rating="4.6/5"
        />
      </div>
    </main>
  );
}
export default Restaurants;
