import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "./setAuthToken";

async function getData(token) {
    const decod = jwt_decode(token);
    setAuthToken(token);
    var user;
    await axios.get(process.env.REACT_APP_API + `/user/${decod.id}`).then(userData => {
        user = {
            firstName: userData.data.firstName,
            lastName: userData.data.lastName,
            email: userData.data.email,
            phone: userData.data.phone,
            role: userData.data.role,
            avatar: userData.data.avatar,
            verified: userData.data.verified,
            wishlist: userData.data.wishlist
        };
    });
    return user;
};

export default getData;