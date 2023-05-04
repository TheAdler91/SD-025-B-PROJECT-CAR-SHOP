import CarODM from '../Models/CarODM';
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';

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
}

export default CarService;