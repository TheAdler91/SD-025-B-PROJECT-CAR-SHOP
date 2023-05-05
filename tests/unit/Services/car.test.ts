import { expect } from 'chai';
import sinon from 'sinon';
import CarODM from '../../../src/Models/CarODM';
import CarService from '../../../src/Services/CarService';
import Car from '../../../src/Domains/Car';
import { carInput, carOutput, carArray } from '../../Mocks/carMock';

describe('Testing CarService', function () {
  afterEach(function () {
    sinon.restore();
  });
  describe('createCar', function () {
    it('Should create a car correctly', async function () {
      sinon.stub(CarODM.prototype, 'create').resolves(carOutput);
      const service = new CarService();
      const result = await service.createCar(carInput);
      expect(result).to.be.deep.equal(carOutput);
    });
  });

  describe('getAllCars', function () {
    it('Should return an array of cars', async function () {
      sinon.stub(CarODM.prototype, 'findAll').resolves(carArray);
      const service = new CarService();
      const result = await service.getAllCars();
      expect(result).to.be.deep.equal(carArray.map((car) => new Car(car)));
    });
  });

  describe('getCarById', function () {
    it('Should return the car with the specified ID', async function () {
      sinon.stub(CarODM.prototype, 'findById').resolves(carOutput);
      const service = new CarService();
      const result = await service.getCarById(carOutput.id);
      expect(result).to.be.deep.equal(new Car(carOutput));
    });

    it('Should throw an error if the car is not found', async function () {
      sinon.stub(CarODM.prototype, 'findById').resolves(null);
      const service = new CarService();
      try {
        await service.getCarById('64491d779158ff9021c96');
      } catch (error) {
        expect(error).to.be.an('error');
      }
    });

    describe('updateCar', function () {
      it('Should update the car with the specified ID', async function () {
        sinon.stub(CarODM.prototype, 'findById').resolves(carOutput);
        sinon.stub(CarODM.prototype, 'update').resolves(carOutput);
        const service = new CarService();
        const result = await service.updateCar(carOutput.id, carInput);
        expect(result).to.be.deep.equal(new Car(carOutput));
      });
      
      it('Should throw an error if trying to update a car with an invalid id', async function () {
        sinon.stub(CarODM.prototype, 'findById').resolves(null);
        const service = new CarService();
        const invalidId = '9898787784656';
      
        try {
          await service.updateCar(invalidId, carInput);
        } catch (error) {
          expect(error).to.be.an('error');
        }
      });
    });
  });
});