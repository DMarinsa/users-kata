import mongoose from 'mongoose';

export class MongooseDatabase {
  constructor() {}

  connect() {
    const connectionOptions = {
      autoIndex: true,
      autoCreate: true,
    };

    const connectionString = process.env.DB_CONNECTION_STRING ||'';

    mongoose.connect(connectionString, connectionOptions);

    mongoose.connection.on('error', err => {
      console.error(err);
    });
  }

  retrieveConnection() {
    return mongoose.connection;
  }

  disconnect() {
    mongoose.disconnect();
  }
}
