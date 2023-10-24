import { useState, useEffect } from "react";
import Costumer from "../CostumerList";

const CostumerPage = (props) => {
    const [costumers, setCostumers] = useState([]);

    useEffect(() => {

        fetch(`https://analyticsbackendort.azurewebsites.net/api/customers?pageSize=${pageSize}"&"page${page}`)
            .then(response => response.json())
            .then(data => {
                setCostumers(data);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <CostumerList Costumers={costumers} />
        </div>
    )
}