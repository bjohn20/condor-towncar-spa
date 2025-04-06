import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <header>
        <h1>Welcome to Condor Town Car Service</h1>
        <p>Luxury transportation at your fingertips.</p>
      </header>

      <section>
        <h2>Why Ride With Us?</h2>
        <p>
          We provide reliable, comfortable, and professional car services for
          your travel needs.
        </p>
      </section>

      <section>
        <h2>Our Services</h2>
        <ul>
          <li>🚖 Airport Transfers</li>
          <li>🚘 Business Travel</li>
          <li>🎉 Special Events</li>
          <li>🌆 City Rides</li>
        </ul>
        <Link to="/services">
          <button>View Services</button>
        </Link>
      </section>

      <section>
        <h2>Book Your Ride</h2>
        <p>Get started by selecting your pickup location and time.</p>
        <Link to="/booking">
          <button>Book Now</button>
        </Link>
      </section>

      <footer>
        <p>© 2025 Condor Town Car Service | Safe & Reliable Rides</p>
      </footer>
    </div>
  );
};

export default HomePage;
