import { ObjectId } from 'mongodb';
import { Model } from './models.model';
import { Make } from '../makes/makes.model';
class ModelsService {
  async get(makeId: string) {
    try {
      const models = await Model.aggregate([
        { $match: { makeId: new ObjectId(makeId) } },
        {
          $lookup: {
            from: 'makes',
            localField: 'makeId',
            foreignField: '_id',
            as: 'make'
          }
        },
        { $unwind: '$make' },
        { $sort: { name: 1 } }
      ]);

      return { models };
    } catch (err) {
      console.log(err);
    }
  }

  async getAll() {
    try {
      const models = await Model.aggregate([
        {
          $lookup: {
            from: 'makes',
            localField: 'makeId',
            foreignField: '_id',
            as: 'make'
          }
        },
        { $unwind: '$make' },
        { $sort: { name: 1 } }
      ]);

      return { models };
    } catch (err) {
      console.log(err);
    }
  }

  async create(data: { name: string; makeId: string }) {
    try {
      const { name, makeId } = data;

      const make = await Model.findById(makeId);
      if (make) throw new Error('Make already exists');

      const slug = name.toLowerCase().replace(/ /g, '-');
      const newModel = await Model.create({ makeId, name, slug });

      return { newModel };
    } catch (error) {
      console.log(error);
    }
  }
  async update(data: { id: string, name: string; makeId?: string }) {
    try {
      interface IUpdateModel {
        name?: string;
        slug?: string;
        makeId?: string;
      }
      const update: IUpdateModel = {};

      if (data.name) {
        update.name = data.name;
        update.slug = data.name.toLowerCase().replace(/ /g, '-');
      }

      if (data.makeId) {
        const make = await Make.findById(data.makeId);
        if (!make) throw new Error('Make not found');
        update.makeId = data.makeId;
      }

      const updateModel = await Model.findOneAndUpdate({ _id: data.id }, update, {
        new: true,
      });
      return { updateModel };

    } catch (error) {
      console.log(error);
    }
  }

  async delete(id: string) {
    try {
      const deleteModel = await Model.findByIdAndDelete(id);
      return { deleteModel };
    } catch (error) {
      console.log(error);
    }
  }
}

export default new ModelsService();
