// <import packages
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from 'react-hot-toast';
// import packages>

const baseUrl = import.meta.env.VITE_PUBLIC_BASE_ROOT;


class ApiHandlersModel {
    

    async createApiCall(requestObj) {

        const {method = "get", url, reqObj = null, params = null, contentType = "application/json"} = requestObj;

        // const token = Cookies.get("token");

        const defaultReqObj = {
            method,
            url : `${baseUrl}${url}`,
            headers : {
                "accept": "application/json",
                "Content-Type": contentType,
            },
            params
        };

        const reqObjWithBody = {...defaultReqObj, data : reqObj};

        return await axios(!reqObj ? defaultReqObj : reqObjWithBody);

    }

    async response(request) {

        try {
            
            const response = await this.createApiCall(request);

                if (response.status === 200 ||response.status === 201 ||response.status === 202) {

                    if (response.data) {

                        return {type : true, message : response.data.message, data : response.data};

                    } else {

                        return {type : false, message : "خطا در بر قراری ارتباط با سرور", data : null };

                    }
                }

        } catch (error) {

            return this.fail(error);

        }

    }

    async fail(e) {

        if (e.code === "ERR_NETWORK") {

            if (import.meta.env.MODE === 'production') {

                window.location.href = "/500";

            } else {

                toast.error(e.message);

            };

        };

        if (e?.response?.status >= 500) {

            toast.error(e.response.data.data);
            
        };

        if(e?.response?.status === 401) {

            Cookies.remove('token');

            window.location.href = "/login";

        }

        if (e?.response?.status === 403) {

            // window.location.href = "/403";

            toast.error(e.response.data.data);

        };

        let message = e?.response?.data?.data;

        return {
            type:false,
            message : message ||  "خطا در بر قراری ارتباط با سرور",
            data : null
        };

    };

};

const requestModel = new ApiHandlersModel();

export default requestModel;