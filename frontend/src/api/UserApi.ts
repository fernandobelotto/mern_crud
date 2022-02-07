import axios from "axios";

const baseUrl = "http://localhost:8000";
const path = "/users";
export class UserApi {
  static async create(body: any) {
    const { data } = await axios.post(baseUrl + path, body);
    return data;
  }
  static async fetchById(userId: string) {
    const { data } = await axios.get(baseUrl + path);
    return data;
  }

  static async fetch() {
    const { data } = await axios.get(baseUrl + path);
    return data;
  }

  static async deleteById(id: string) {
    const { data } = await axios.delete(baseUrl + path + `/${id}`);
    return data;
  }

  static async updateById(id: string, body: any) {
    const { data } = await axios.put(baseUrl + path + `/${id}`, body);
    return data;
  }
}
