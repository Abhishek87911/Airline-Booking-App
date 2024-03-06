const { CityRespository } = require('../repository/index');


class CityService {
    constructor() {
        this.cityRespository = new CityRespository();
    }
    async createCity() {
        try {
            const result = this.cityRespository.createCity(data);
            return result;
            
        } catch (error) {
            console.log("Spmething went wrong at service layer");
            throw {error};
        }
    }


    async deleteCity(cityId) {
        try {
            const response = await this.cityRespository.deleteCity(cityId);
            return response;

        } catch (error) {
            console.log("Spmething went wrong at service layer");
            throw {error};
        }
    }


    async updateCity(cityId,data) {
        try {
            const city  = await this.cityRespository.updateCity(cityId,data);
            return city;
            
        } catch (error) {
            console.log("Spmething went wrong at service layer");
            throw {error};
        }
    }


    async getCity() {
        try {
            const city  = await this.cityRespository.getCity(cityId);
            return city;
            
        } catch (error) {
            console.log("Spmething went wrong at service layer");
            throw {error};
        }
    }

}


module.exports = CityService;