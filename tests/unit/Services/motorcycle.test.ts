import { expect } from 'chai';
import sinon from 'sinon';
import MotorcycleODM from '../../../src/Models/MotorcycleODM';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import Motorcycle from '../../../src/Domains/Motorcycle';
import { motorcycleInput, motorcycleOutput, motorcycleArray } from '../../Mocks/motorcycleMock';

describe('Testing MotorcycleService', function () {
  afterEach(function () {
    sinon.restore();
  });
  describe('createMotorcycle', function () {
    it('Should create a motorcycle correctly', async function () {
      sinon.stub(MotorcycleODM.prototype, 'create').resolves(motorcycleOutput);
      const service = new MotorcycleService();
      const result = await service.createMotorcycle(motorcycleInput);
      expect(result).to.be.deep.equal(motorcycleOutput);
    });
  });

  describe('getAllMotorcycles', function () {
    it('Should return an array of motorcycles', async function () {
      sinon.stub(MotorcycleODM.prototype, 'findAll').resolves(motorcycleArray);
      const service = new MotorcycleService();
      const result = await service.getAllMotorcycles();
      expect(result).to.be.deep.equal(motorcycleArray
        .map((motorcycle) => new Motorcycle(motorcycle)));
    });
  });

  describe('getMotorcycleById', function () {
    it('Should return the motorcycle with the specified ID', async function () {
      sinon.stub(MotorcycleODM.prototype, 'findById').resolves(motorcycleOutput);
      const service = new MotorcycleService();
      const result = await service.getMotorcycleById(motorcycleOutput.id);
      expect(result).to.be.deep.equal(new Motorcycle(motorcycleOutput));
    });

    it('Should throw an error if the motorcycle is not found', async function () {
      sinon.stub(MotorcycleODM.prototype, 'findById').resolves(null);
      const service = new MotorcycleService();
      try {
        await service.getMotorcycleById('64491d779158ff9021c96');
      } catch (error) {
        expect(error).to.be.an('error');
      }
    });

    describe('updateMotorcycle', function () {
      it('Should update the motorcycle with the specified ID', async function () {
        sinon.stub(MotorcycleODM.prototype, 'findById').resolves(motorcycleOutput);
        sinon.stub(MotorcycleODM.prototype, 'update').resolves(motorcycleOutput);
        const service = new MotorcycleService();
        const result = await service.updateMotorcycle(motorcycleOutput.id, motorcycleInput);
        expect(result).to.be.deep.equal(new Motorcycle(motorcycleOutput));
      });
    
      it('Should throw an error if update a motorcycle with an invalid id', async function () {
        sinon.stub(MotorcycleODM.prototype, 'findById').resolves(null);
        const service = new MotorcycleService();
        const invalidId = '9898787784656';
          
        try {
          await service.updateMotorcycle(invalidId, motorcycleInput);
        } catch (error) {
          expect(error).to.be.an('error');
        }
      });
    });
  });
});