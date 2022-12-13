import react from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Navigate} from 'react-router-dom';





import App from './App';
import './index.css';
import { client } from './client';

ReactDOM.render(
<Router>
<App />
</Router>, 
 document.getElementById('root'));

 /*export const createOrgetUser = (response)=>{
    const decoded = jwt_decode(response.credential);

    const {name,picture,sub} = decoded;

    const user={
        _id: sub,
        _type: 'user',
        userName: name,
        image: picture
    }
    client.createIfNotExists(user)
    .then(()=>{
        Navigate('/',{replace:true})
    })
    }*/;