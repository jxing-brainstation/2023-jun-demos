import axios from "axios";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const BASE_URL = "http://localhost:5050"
export default function CookiesPage() {
    const [desserts, setDesserts] = useState();

    useEffect(() => {
        axios.get(`${BASE_URL}/desserts`, { withCredentials: true }).then(resp => {
            console.log(resp.data)
            setDesserts(resp.data)
        })
    }, [])

    function handlePreferenceChange(event) {
        Cookies.set("personalPreference", event.target.value);
        axios.get(`${BASE_URL}/desserts`, { withCredentials: true }).then(resp => {
            setDesserts(resp.data)
        })
    }

    if (!desserts) {
        return <h1>LOADING....</h1>
    }
    return (
        <section>
            <select onChange={handlePreferenceChange}>
                <option disabled>Please Select</option>
                <option value="biscuits">Biscuits</option>
                <option value="cakes">Cakes</option>
            </select>
            <h2>Dessert Menu:</h2>
            {
                desserts.map(dessert => {
                    return (
                        <article key={dessert.id}>
                            <h3>{dessert.name}</h3>
                            <p>Ingredients: {dessert.ingredients}</p>
                            <p>Category: {dessert.category}</p>
                        </article>
                    )
                })
            }
        </section>
    )
}