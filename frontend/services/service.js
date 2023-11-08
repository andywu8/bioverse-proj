import http from "../http-common";


class Service{
    getAll() {
        return http.get("/tutorials");
      }
}

export default new Service();