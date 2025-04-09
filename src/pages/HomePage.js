import BookingSection from "./BookingSection";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <BookingSection />
      <footer>
        <p>© 2025 Condor Town Car Service | Safe & Reliable Rides</p>
      </footer>
    </div>
  );
};

export default HomePage;
