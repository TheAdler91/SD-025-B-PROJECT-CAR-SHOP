import { model, Model, Schema, models, isValidObjectId, UpdateQuery } from 'mongoose';
import UnprocessableEntityError from '../Error/UnprocessableEntityError';

abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;
  
  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }
  
  public async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }

  public async findAll(): Promise<T[]> {
    return this.model.find({});
  }

  public async findById(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) throw new UnprocessableEntityError('Invalid mongo id');

    const vehicle = await this.model.findOne({ _id: id });

    return vehicle as T;
  }

  public async update(id: string, obj: T): Promise<T | null> {
    if (!isValidObjectId(id)) throw new UnprocessableEntityError('Invalid mongo id');

    await this.model.findByIdAndUpdate({ _id: id }, { ...obj as UpdateQuery<T> });
    
    return this.findById(id);
  }
}

export default AbstractODM;