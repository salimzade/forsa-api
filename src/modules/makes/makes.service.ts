import { Make } from './makes.model';
class MakesService {
  async get() {}
  
  async getAll() {
    try {
      const makes = await Make.find({});
      return { makes };
    } catch (error) {
      console.log(error);
    }
  }

  async create(name: string) {
    try {
      const make = await Make.findOne({ name });

      if (make) throw new Error('Make with this name already exists');

      const slug = name.toLowerCase().replace(/ /g, '-');

      const newMake = await Make.create({ name, slug });

      return {
        newMake
      };
    } catch (error) {
      console.log(error);
    }
  }

  async update(data: any) {
    try {
    } catch (error) {
      console.log(error);
    }
  }

  async delete() {}
}

export default new MakesService();
