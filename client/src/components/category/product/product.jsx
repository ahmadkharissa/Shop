import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

//components
import Card from "../../ui/card";

//redux
import { getCategory } from "../../../redux/category/categoryAction";
import { getProducts } from "../../../redux/product/productAction";

function Product() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const category = useSelector((state) => state.categories.item);
    const products = useSelector((state) => state.products.items);
    let product;

    useEffect(() => {
        if (id)
            dispatch(getCategory(id));
        else
            dispatch(getProducts());
    }, []);

    if (id)
        product = category?.product?.map((item) => {
            return <Card
                key={item._id}
                id={item._id}
                image={item.images[0]}
                name={item.name}
                price={item.price}
            />
        })
    else
        product = products?.map((item) => {
            return <Card
                key={item._id}
                id={item._id}
                image={item.images[0]}
                name={item.name}
                price={item.price}
            />
        })

    return (
        <div className="container">
            <div className="row">
                {product}
            </div>
        </div>
    )
};

export default Product