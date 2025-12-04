class AdvertService {
  async createAdvert(userId: string, data: any) {}

  async getAdvertsByUser(userId: string): Promise<any[]> {
    return [];
  }

  async getAdvertById(advertId: string): Promise<any> {
    return null;
  }

  async getAllAdverts(): Promise<any[]> {
    return [];
  }

  async updateAdvert(advertId: string, data: any): Promise<any> {
    return null;
  }

  async deleteAdvert(advertId: string): Promise<void> {}
}

export default new AdvertService();
