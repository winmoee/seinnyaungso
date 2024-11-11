import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import {useState} from "react";

export default function ProductForm({_id, title:existingTitle, description:existingDescription, price:existingPrice}) {
    const [title, setTitle] = useState(existingTitle || '');
    const [description, setDescription] = useState(existingDescription || '');
    const [price, setPrice] = useState(existingPrice || '');
    const [goToProducts, setGoToProducts] = useState(false);
    const router = useRouter();
    console.log({_id})
    async function createProduct(ev) {
        ev.preventDefault();
        const data = {title, description, price}
        await axios.post('/api/products', data)
        setGoToProducts(true);
    }
    if (goToProducts) {
        router.push('/products');
    }
    return (
            <form onSubmit={createProduct}>
                <label>Product Name</label>
                <input type="text" placeholder="product name" value={title} onChange={ev => setTitle(ev.target.value)}/>

                <label>Description </label>
                <textarea placeholder="description" value={description} onChange={ev => setDescription(ev.target.value)}></textarea>

                <label>Price (MMK)</label>
                <input type="number" placeholder="price" value={price} onChange={ev => setPrice(ev.target.value)}></input>

                <button className="btn-primary">Save</button>

            </form>
    )
}