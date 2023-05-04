import IVehicle from '../Interfaces/IVehicle';

export default class Vehicle {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean;
  protected buyValue: number;
  
  constructor({ id, model, year, color, status, buyValue }: IVehicle) {
    this.id = id;
    this.model = model;
    this.year = year;
    this.color = color;
    this.status = status || false;
    this.buyValue = buyValue;
  }
  
  public getId(): string | undefined {
    return this.id;
  }
  
  public setId(id: string): void {
    this.id = id;
  }
  
  public getModel(): string {
    return this.model;
  }
  
  public setModel(model: string): void {
    this.model = model;
  }
  
  public getYear(): number {
    return this.year;
  }
  
  public setYear(year: number): void {
    this.year = year;
  }
  
  public getColor(): string {
    return this.color;
  }
  
  public setColor(color: string): void {
    this.color = color;
  }
  
  public getStatus(): boolean | undefined {
    return this.status;
  }
  
  public setStatus(status: boolean): void {
    this.status = status;
  }
  
  public getBuyValue(): number {
    return this.buyValue;
  }
  
  public setBuyValue(buyValue: number): void {
    this.buyValue = buyValue;
  }
}