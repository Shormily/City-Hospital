import React, { useEffect, useState } from 'react';
import useFirebase from '../Hooks/useFirebase';

const Order = () => {
    const [orders, setOrdes] = useState([]);
    const {user} = useFirebase()

    useEffect(() =>{
        fetch(`http://localhost:5000/orders?email=${user.email}`)
        .then(res => res.json())
        .then(data => setOrdes(data))
    },[])
    return (
        <div>
            <h1>My order:{orders.length}</h1>
            {orders.map(order => <div key={order._id}>

                {order.name} : {user.email}
            </div>)}
        </div>
    );
};

export default Order;