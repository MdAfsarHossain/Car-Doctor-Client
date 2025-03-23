import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    // baseURL: 'http://localhost:5000',
    baseURL: 'https://car-doctor-server-zeta-bice.vercel.app',
    withCredentials: true,
})

const useAxiosSecure = () => {
    const {logoutUser} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        }, error => {
            console.log('Error tracked in the interceptor: ', error.response);

            if(error.response.status === 401 || error.response.status === 403) {
                console.log('Logout the user');
                logoutUser()
                .then((res) => {
                    navigate('/login');
                })
                .catch(error => console.log(error));
            }
        })
    }, [])

    return axiosSecure;
};

export default useAxiosSecure;