import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';

describe('Testing CarService', function () {
  it('Should create a car correctly', async function () {
    const carInput = {
      model: 'HB20',
      year: 2020,
      color: 'Azul',
      status: true,
      buyValue: 50000,
      doorsQty: 4,
      seatsQty: 5,
    };
    
    const carOutput = {
      id: '645413f1ea84abab50e693be',
      model: 'HB20',
      year: 2020,
      color: 'Azul',
      status: true,
      buyValue: 50000,
      doorsQty: 4,
      seatsQty: 5,
    };
    sinon.stub(Model, 'create').resolves(carOutput);
  
    const service = new CarService();
    const result = await service.createCar(carInput);
  
    expect(result).to.be.deep.equal(carOutput);
  });

  afterEach(function () {
    sinon.restore();
  });
});