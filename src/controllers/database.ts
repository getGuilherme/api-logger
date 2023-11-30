// src/models/dataModel.ts
import mariadb from 'mariadb';

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
      console.error('Erro ao salvar dados:', error);
      throw error;
    } finally {
      if (conn) {
        conn.close();
      }
    }
  }

  async testConnection(): Promise<void> {
    let conn: any;
    try {
      conn = await mariadb.createConnection({
      host: '177.67.253.69',
      port: 53306,
      user: '183931',
      password: '183931',
      database: '183931'
    });
      console.log('Conexão bem-sucedida!');
    } catch (error) {
      console.error('Erro de conexão:', error);
      throw error;
    } finally {
      if (conn) {
        conn.close();
      }
    }
  }
}

export default DataModel;
