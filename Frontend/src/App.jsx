
import { useState } from 'react';
import axios from 'axios';

export default function App() {
  const [tracking, setTracking] = useState('');
  const [shipment, setShipment] = useState(null);

  const searchShipment = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/shipments/${tracking}`
      );
      setShipment(res.data);
    } catch (err) {
      alert('Shipment not found');
    }
  };

  return (
    <div className="container">
      <header>
        <h1>FastTrack Courier Services</h1>
        <p>Reliable Global Shipping Solutions</p>
      </header>

      <section className="tracking-box">
        <h2>Track Your Shipment</h2>

        <input
          type="text"
          placeholder="Enter Tracking Number"
          value={tracking}
          onChange={(e) => setTracking(e.target.value)}
        />

        <button onClick={searchShipment}>Track Shipment</button>

        {shipment && (
          <div className="shipment-card">
            <h3>Status: {shipment.status}</h3>
            <p><strong>Sender:</strong> {shipment.sender}</p>
            <p><strong>Receiver:</strong> {shipment.receiver}</p>
            <p><strong>Origin:</strong> {shipment.origin}</p>
            <p><strong>Destination:</strong> {shipment.destination}</p>
          </div>
        )}
      </section>

      <section className="services">
        <h2>Our Services</h2>

        <div className="service-grid">
          <div className="card">
            <h3>Worldwide Shipping</h3>
            <p>Delivering parcels globally with speed.</p>
          </div>

          <div className="card">
            <h3>Express Delivery</h3>
            <p>Same-day and next-day delivery available.</p>
          </div>

          <div className="card">
            <h3>Secure Packaging</h3>
            <p>Your items are safe and protected.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
