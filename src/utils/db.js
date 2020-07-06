import Dexie from 'dexie';

export const tableName = 'items';

const db = new Dexie('MyQualityWorldDb');
db.version(1).stores({ items: '++id' });

export default db;
