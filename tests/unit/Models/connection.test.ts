import { expect } from 'chai';
import mongoose from 'mongoose';
import connectToDatabase from '../../../src/Models/Connection';

describe('Database Connection Layer', function () {
  it('Should connect to the database successfully', async function () {
    const connection = await connectToDatabase();
    expect(connection).to.be.an('object');
    
    const { readyState } = mongoose.connection;
    expect(readyState).to.be.equal(1);

    await mongoose.disconnect();
  });
});
