import React from 'react';
import { useParams} from 'react-router-dom';

const Updateuser = () => {
    const {id} = useParams();
    // const [user, setUser] = useState()
    // useEffect(() =>{
    //     const url = `http://localhost:5000/services/${id}`
    //   fetch(url)
    //   .then(res=>res.json())
    //   .then(data =>setUser(data))
    // },[])
    return (
        <div>
           
            <h2>updateuser:{id}</h2>
        </div>
    );
};

export default Updateuser;