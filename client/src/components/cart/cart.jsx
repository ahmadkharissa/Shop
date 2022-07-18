import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LOGIN_SUCCESS } from '../../redux/user/userTypes'
import getData from '../../utils/getData'

//components
import Card from '../ui/card'

//redux

//css
import './cart.css'

function Cart() {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.users)
    const { wishlist } = useSelector((state) => state.users.user)
    let price = 0;
    var userR = {};
    var order = [];

    const product = wishlist?.map((item) => {
        return <Card
            key={item._id}
            id={item._id}
            image={item.images[0]}
            name={item.name}
            price={item.price}
        />
    })

    const coast = wishlist?.map((item) => price += item.price)

    const handelClick = async () => {
        await axios.post(process.env.REACT_APP_API + '/order',
            {
                "name": user.firstName + ' ' + user.lastName,
                "email": user.email,
                "phone": user.phone,
                "order": order
            });
        await axios.patch(process.env.REACT_APP_API + '/user/removeAllWishList');
        getData(localStorage.token).then(response => {
            userR = response;
            dispatch({ type: LOGIN_SUCCESS, payload: userR });
        });
    }

    wishlist?.forEach(o => {
        order.push(o._id)
    });

    return (
        <div className="container">
            <div className='row'>
                {product}
            </div>
            {wishlist?.length > 0 &&
                <div className='order'>
                    <p>Price : <span style={{ color: "red" }}>{coast && coast[coast.length - 1] + " $"}</span></p>
                    <button className='btn btn-primary' style={{ width: "100%" }} onClick={handelClick}>order</button>
                </div>
            }
        </div>
    )
}

export default Cart