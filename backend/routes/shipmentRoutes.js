import express from 'express';
import Shipment from '../models/Shipment.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const shipment = await Shipment.create(req.body);
  res.json(shipment);
});

router.get('/:trackingNumber', async (req, res) => {
  const shipment = await Shipment.findOne({
    trackingNumber: req.params.trackingNumber
  });

  if (!shipment) {
    return res.status(404).json({
      message: 'Shipment not found'
    });
  }

  res.json(shipment);
});

router.put('/:id', async (req, res) => {
  const shipment = await Shipment.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(shipment);
});

export default router;