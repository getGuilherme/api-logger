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

router.post('/saveOnMongo', async (req, res) => {
  try {
    const dataModel = new DataModel()
    const resultado = await dataModel.saveDataOnMongo(req.body);
    res.status(200).json({ message: 'success', response: resultado});
  } catch (error) {
    res.status(500).json({ error: 'Failed to save data on Mongo' });
  }
});

export default router;
