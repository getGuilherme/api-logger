// routes/dataRoutes.ts
import express from 'express';
import dataModel from '../controllers/database';
import DataModel from '../controllers/database';

const router = express.Router();

router.post('/save', async (req, res) => {
  try {
    console.log(req.body)
    const requestData = req.body;
    const dataModel = new DataModel()
    await dataModel.saveData(requestData);
    res.status(200).json({ message: 'success', response: req.body});
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Failed to save data' });
  }
});

router.post('/test', async (req, res) => {
  try {
    const data = new dataModel()
    await data.testConnection();
    res.status(200).json({ message: 'Success' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to connect' });
  }
});

export default router;
