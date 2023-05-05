import Vehicle from './Vehicle';
import IMotorcycle from '../Interfaces/IMotorcycle';

class Mortorcycle extends Vehicle {
  private category: string;
  private engineCapacity: number;

  constructor({ id, model, year, color, status, buyValue, category, engineCapacity }: IMotorcycle) {
    super({ id, model, year, color, status, buyValue });
    this.category = category;
    this.engineCapacity = engineCapacity;
  }

  public getCategory(): string {
    return this.category;
  }

  public getEngineCapacity(): number {
    return this.engineCapacity;
  }

  public setCategory(category: string): void {
    this.category = category;
  }

  public setEngineCapacity(engineCapacity: number): void {
    this.engineCapacity = engineCapacity;
  }
}

export default Mortorcycle;