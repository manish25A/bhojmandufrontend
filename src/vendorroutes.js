import react from 'react'
import { Route, Redirect } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ResDashboard from './components/Body/Admin/dashboard';
import login from './components/Body/Admin/login';
import register from './components/Body/Admin/register';
import AdminProducts from './components/Body/Admin/yourProducts';
import InsertProducts from './components/Body/Admin/insertProduct';
import UpdateProducts from './components/Body/Admin/updateProduct';
const resToken = localStorage.getItem('resToken');

 function vendorroute() {
    return (
        <Router>
            <div className='App'>
             
            </div>
            </Router>
    )}