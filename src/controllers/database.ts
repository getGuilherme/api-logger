// src/models/dataModel.ts
import mariadb from 'mariadb';
import { InsertOneResult, MongoClient } from 'mongodb';

class DataModel {

  async saveData(data: any): Promise<void> {
    let conn: any;
    try {
      conn = await mariadb.createConnection({
        host: '177.67.253.69',
        port: 53306,
        user: '183931',
        password: '183931',
        database: '183931'
    });
    const distanceValue = parseFloat(data.distance);
    const result = await conn.query(`INSERT INTO logger (distance) VALUES (${distanceValue})`);
    return result    
    } catch (error) {
      console.error('Error saving data on MariaDB:', error);
      throw error;
    } finally {
      if (conn) {
        conn.close();
      }
    }
  }

  async saveDataOnMongo(data: any): Promise<InsertOneResult> {
    const client = new MongoClient('mongodb+srv://183931:gremio01@cluster0.lfqfd09.mongodb.net/?retryWrites=true&w=majority', {
      serverApi: {
        version: '1',
        strict: true,
        deprecationErrors: true,
      },
    });

    try {
      await client.connect();
      const database = client.db('logger');
      const collection = database.collection('logger');
      const dadosParaInserir = { distance: data.distance, createdAt: new Date() };

      const resultado = await collection.insertOne(dadosParaInserir);
      return resultado;
    } catch (error) {
      console.error('Error saving data on MongoDB:', error);
      throw error;
    } finally {
      await client.close();
    }
  }
}

export default DataModel;
