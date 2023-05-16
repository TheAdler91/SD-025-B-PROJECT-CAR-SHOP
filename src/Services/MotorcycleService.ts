import MotorcycleODM from '../Models/MotorcycleODM';
import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import NotFoundError from '../Error/NotFoundError';

const MOTORCYCLE_NOT_FOUND = 'Motorcycle not found';
class MotorcycleService {
  private createMotorcycleDomain(motorcycle: IMotorcycle | null): Motorcycle | null {
    if (motorcycle) {
      return new Motorcycle(motorcycle);
    }
    return null;
  }

  public async createMotorcycle(motorcycle: IMotorcycle): Promise<Motorcycle | null> {
    const motorcycleODM = new MotorcycleODM();
    const createdMotorcycle = await motorcycleODM.create(motorcycle);
    return this.createMotorcycleDomain(createdMotorcycle);
  }

  public async getAllMotorcycles(): Promise<Motorcycle[] | null> {
    const motorcycleODM = new MotorcycleODM();
    const motorcycleArr = await motorcycleODM.findAll();
    const bikes = motorcycleArr.map((bike: IMotorcycle) => this.createMotorcycleDomain(bike));
    return bikes as Motorcycle[];
  }

  public async getMotorcycleById(id: string): Promise<Motorcycle | null> {
    const motorcycleODM = new MotorcycleODM();
    const motorcycle = await motorcycleODM.findById(id);
    if (!motorcycle) throw new NotFoundError(MOTORCYCLE_NOT_FOUND);
    return this.createMotorcycleDomain(motorcycle);
  }

  public async updateMotorcycle(id: string, motorcycle: IMotorcycle): Promise<Motorcycle | null> {
    const motorcycleODM = new MotorcycleODM();
    const motorcycleFound = await motorcycleODM.findById(id);
    if (!motorcycleFound) throw new NotFoundError(MOTORCYCLE_NOT_FOUND);
    const motorcycleUpdated = await motorcycleODM.update(id, motorcycle);
    return this.createMotorcycleDomain(motorcycleUpdated);
  }

  public async deleteMotorcycle(id: string): Promise<void> {
    const motorcycleODM = new MotorcycleODM();
    const motorcycleFound = await motorcycleODM.findById(id);
    if (!motorcycleFound) throw new NotFoundError(MOTORCYCLE_NOT_FOUND);
    await motorcycleODM.delete(id);
  }
}

export default MotorcycleService;