import Layout from "@/components/Layout";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Categories() {
    const [name, setName] = useState('');
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        axios.get('/api/categories').then(result => {
            setCategories(result.data);
        })
    }, []);

    async function saveCategory(ev) {
        ev.preventDefault();
        await axios.post('/api/categories', {name});
        setName('');
    }

    return(
        <Layout>
            <h1>Categories</h1>
            <label>New Category name</label>
            <form onSubmit={saveCategory} class="flex">
                <input 
                type="text" placeholder={'Category name'} 
                onChange={ev => setName(ev.target.value)}
                className="mb-0"></input>
                <button type="submit" className="btn-primary py-1">Save</button>
            </form>
            <table className="basic mt-4">
                <thead>
                    <tr>
                        <td>Category name</td>
                    </tr>
                </thead>
                <tbody>
                    {categories.length > 0 && categories.map
                    (category => (
                        <tr>
                            <td>{category.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Layout>
    )
}