import React, { useState } from "react";
import { ApiEnvios } from "../../../dates/origin/remote/api/apienvios";

const RegiterViewModel = () => {
    const [values, setValues] = useState({
        name: '',
        lastname: '',
        phone: '',
        email: '',
        password: '',
    });

    const onChange = (property: string, value: any) =>{
        setValues({...values, [property]: value})
    }

    const register = async () => {
        try {
            const response = await ApiEnvios.post('/users/create', values);
            console.log('RESPONDE: ' + JSON.stringify(response));
        } catch (error) {
            console.log('ERROR: ' + error);
        }
    }

    return {
        ...values,
        onChange,
        register
    }
}

export default RegiterViewModel;