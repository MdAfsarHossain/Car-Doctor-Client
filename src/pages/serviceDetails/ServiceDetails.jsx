import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {id} = useParams();
    const serviceData = useLoaderData();
    return (
        <div>
            <h1>Service Details: {id}</h1>
            <h1>Title: {serviceData.title}</h1>
        </div>
    );
};

export default ServiceDetails;