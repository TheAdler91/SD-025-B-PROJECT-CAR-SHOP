import CarODM from '../Models/CarODM';
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import NotFoundError from '../Error/NotFoundError';

class CarService {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async createCar(car: ICar): Promise<Car | null> {
    const carODM = new CarODM();
    const createdCar = await carODM.create(car);
    return this.createCarDomain(createdCar);
  }

  public async getAllCars(): Promise<Car[] | null> {
    const carODM = new CarODM();
    const carsArray = await carODM.findAll();
    const cars = carsArray.map((car: ICar) => this.createCarDomain(car));
    return cars as Car[];
  }

  public async getCarById(id: string): Promise<Car | null> {
    const carODM = new CarODM();
    const car = await carODM.findById(id);
    if (!car) throw new NotFoundError('Car not found');
    return this.createCarDomain(car);
  }

  public async updateCar(id: string, car: ICar): Promise<Car | null> {
    const carODM = new CarODM();
    const findCar = await carODM.findById(id);
    if (!findCar) throw new NotFoundError('Car not found');
    const updatedCar = await carODM.update(id, car);
    return this.createCarDomain(updatedCar);
  }
}

export default CarService;