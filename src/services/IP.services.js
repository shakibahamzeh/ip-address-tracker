// <import handler
import axios from "axios";
import requestModel from "./apiHandlers";
// import handler>

class IPAddress {

    constructor(requestObj) {
        this.requestObj = requestObj;
        this.url = "api/v2/country,city";
    }

    async getIPAddress({params}) {

        const apiObj = {
            url : this.url,
            params
        };

        return await requestModel.response(apiObj);
    };

};

export default IPAddress;


