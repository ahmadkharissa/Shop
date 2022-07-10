import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//components
import Card from "../ui/card";

//redux
import { getCategories } from "../../redux/category/categoryAction";

function Category() {
    const dispatch = useDispatch();
    const { items } = useSelector((state) => state.categories)

    useEffect(() => {
        dispatch(getCategories());
    }, []);

    const categories = items?.map((item) => {
        return <Card
            key={item._id}
            id={item._id}
            name={item.name} />
    })

    return (
        <div className="container">
            <div className="row">
                {categories}
            </div>
        </div>
    )
};

export default Category