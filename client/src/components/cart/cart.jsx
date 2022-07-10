import axios from 'axios'
import React from 'react'
import { useSelector } from 'react-redux'

//components
import Card from '../ui/card'

//redux

//css
import './cart.css'

function Cart() {
    const { verified, wishlist } = useSelector((state) => state.users.user)
    let price = 0;

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
                "name": "ahmad harissa",
                "email": "ahmadharissa25@gmail.com",
                "phone": "71276017",
                "order": [
                    "62ba120f112fdb7a143aa650"
                ]
            });
        await axios.post(process.env.REACT_APP_API + '/user/removeAllWishList');
    }

    return (
        <div className="container">
            <div className='row'>
                {product}
            </div>
            {verified &&
                <div className='order'>
                    <p>Price : <span style={{ color: "red" }}>{coast && coast[coast.length - 1] + " $"}</span></p>
                    <button className='btn btn-primary' style={{ width: "100%" }} onClick={handelClick}>order</button>
                </div>
            }
        </div>
    )
}

export default Cart