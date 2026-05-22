import { useState } from 'react';
import axios from 'axios';

export default function App() {
  const [tracking, setTracking] = useState('');
  const [shipment, setShipment] = useState(null);

  const searchShipment = async () => {
    try {
      const res = await axios.get(
        `https://courier-website.onrender.com/api/shipments/${tracking}`
      );

      setShipment(res.data);
    } catch (err) {
      alert('Shipment not found');
    }
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial' }}>
      <h1>FastTrack Courier Services</h1>

      <p>Reliable Global Shipping Solutions</p>

      <input
        type="text"
        placeholder="Enter Tracking Number"
        value={tracking}
        onChange={(e) => setTracking(e.target.value)}
        style={{
          padding: '12px',
          width: '300px',
          marginRight: '10px'
        }}
      />

      <button
        onClick={searchShipment}
        style={{
          padding: '12px 20px',
          cursor: 'pointer'
        }}
      >
        Track Shipment
      </button>

      {shipment && (
        <div
          style={{
            marginTop: '30px',
            padding: '20px',
            border: '1px solid #ccc'
          }}
        >
          <h2>Status: {shipment.status}</h2>

          <p>
            <strong>Sender:</strong> {shipment.sender}
          </p>

          <p>
            <strong>Receiver:</strong> {shipment.receiver}
          </p>

          <p>
            <strong>Origin:</strong> {shipment.origin}
          </p>

          <p>
            <strong>Destination:</strong> {shipment.destination}
          </p>
        </div>
      )}
    </div>
  );
}