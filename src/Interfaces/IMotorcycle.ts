import IVehicle from './IVehicle';

export default interface ICar extends IVehicle {
  category: string;
  engineCapacity: number;
}