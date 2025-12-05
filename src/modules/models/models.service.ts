import { Model } from './models.model';
class ModelsService {
  async get(makeId: string) {
    try {
      const model = await Model.findById({makeId: makeId}).sort({name: 1});
      return { model };
    } catch (error) {
      console.log(error);
    }
  }

  async getAll() {
    try {
      const models = await Model.find().populate('makeId').sort({ name: 1 });
      return { models };
    } catch (error) {
      console.log(error);
    }
  }
  
  async create(data: { name: string; makeId: string }) {
    try {
      const { name, makeId } = data;

      const make = await Model.findById(makeId);

      if (!make) throw new Error('Make not found');

      const slug = name.toLowerCase().replace(/ /g, '-');

      const newModel = await Model.create({ name, slug, makeId });

      return { newModel };
    } catch (error) {
      console.log(error);
    }
  }
  async update() {}
  async delete() {}
}

export default new ModelsService();
