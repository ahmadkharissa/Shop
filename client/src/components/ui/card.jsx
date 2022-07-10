import React from "react";
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { useNavigate } from 'react-router-dom';

//redux
import { addToWishlist, removeFromWishList } from "../../redux/user/userActions";

//css
import "./card.css"

const Card = props => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, isAuthenticated } = useSelector((state) => state.users)

    const handelClickCategory = () => {
        navigate(`/Category/${props.id}`)
    }

    const handelClickAddToCart = async () => {
        if (isAuthenticated) {
            dispatch(addToWishlist(props.id))
        } else {
            navigate("/Login")
        }
    }

    const handelClickRemoveFromCart = async () => {
        if (isAuthenticated) {
            dispatch(removeFromWishList(props.id))
        }
    }

    let img = <></>
    let content = <div className="card-body" style={{ display: "flex", justifyContent: "center", alignItems: "center", cursor: 'pointer' }} onClick={handelClickCategory}>
        <h4>{props.name}</h4>
    </div>
    let cartButton = <></>

    if (props.image) {
        img = <div className="card-header no-bg">
            <img src={process.env.REACT_APP_API + "/products/" + props.image} alt={props.name} width="70%" height="70%" />
        </div>
    }

    if (props.price) {
        content =
            <div className="card-body">
                <h4>{props.name}</h4>
                <p className="price">{props.price + " $"}</p>
            </div>

        cartButton =
            <button type="button" className="btn btn-outline-primary" onClick={handelClickAddToCart}><i className="bi bi-bag-plus-fill"></i></button>

        if (isAuthenticated)
            user.wishlist?.map((item) => {
                if (item._id === props.id)
                    return cartButton =
                        <button type="button" className="btn btn-danger" onClick={handelClickRemoveFromCart}><i className="bi bi-bag-dash"></i></button>
                else
                    return <></>
            })
    }

    return (
        <div className="col-xl-3 col-md-4 col-sm-6" style={{ marginTop: "1.25rem" }}>
            <div className="card" style={{ borderRadius: "1.25rem" }}>
                {img}
                {content}
                {cartButton}
            </div>
        </div>
    )
};

export default Card;