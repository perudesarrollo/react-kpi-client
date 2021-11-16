import axios from "axios";
import swal from "sweetalert";

class ApiService {
  constructor() {
    this.init();
  }

  init() {
    axios.defaults.baseURL = "https://stormy-peak-78483.herokuapp.com";
    axios.defaults.headers.common["Content-Type"] = "application/json";
  }

  setHeader() {}

  removeHeader() {
    axios.defaults.headers.common = {};
  }

  get(resource, params, headers) {
    return axios.get(resource, { params, headers });
  }

  post(resource, data, headers) {
    return axios.post(resource, data, headers);
  }

  put(resource, data, headers) {
    return axios.put(resource, data, headers);
  }

  delete(resource, headers) {
    return axios.delete(resource, headers);
  }

  failed({ response }) {
    if (response.data.message) {
      const {
        data: { message },
      } = response;
      return swal("Error!", message.join(""), "error");
    }

    if (response.status) {
      const { status, statusText } = response;
      return swal("Error!", `${status} - ${statusText}`, "error");
    }
  }

  success(message) {
    return swal("Exito!", message, "success");
  }

  async getCliente() {
    try {
      const {
        payload: { clients },
      } = await this.get("/cliente").then((response) => response.data);

      if (clients !== undefined) {
        return clients;
      }
      return false;
    } catch (error) {
      this.failed(error);
    }
  }

  async getClienteKpi() {
    try {
      const {
        payload: { kpi },
      } = await this.get("/cliente/kpi").then((response) => response.data);

      if (kpi !== undefined) {
        return kpi;
      }
      return false;
    } catch (error) {
      this.failed(error);
    }
  }
}

const Api = new ApiService();
export default Api;
