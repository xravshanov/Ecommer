/* eslint-disable no-unused-vars */

import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Error from './pages/Error';
import Dashboard from './componets/Dashboard';
import ProtectedRoute from './componets/ProtectedRoute';
import { useGlobalContext } from "./Context";
import Layout from './componets/Layout';
import Favourites from './pages/Favourites';
import AllProducts from './pages/AllProducts';
import Basket from './pages/Basket';
import SinglePage from './componets/SinglePage';
import AddCard from './componets/AddCard';


function App() {
  const {user} = useGlobalContext();
  
  

  return (
    <div>
      <Routes>
         <Route path='/' element={user && <Home/>}/>
         <Route path="/" element={<Layout /> }/>
         <Route path="/favourotes" element={
          <ProtectedRoute>
            <Favourites/>
          </ProtectedRoute>
          }/>
         <Route path='/basket' element={
            <ProtectedRoute>
              <Basket/>
            </ProtectedRoute>
         }/>
         <Route path='/signup' element={<SignUp/>}/>
         <Route path='/addcard' element={
            <ProtectedRoute>
              <AddCard/>
            </ProtectedRoute>
         }/>
         <Route path='/allproducts' element={
            <ProtectedRoute>
              <AllProducts/>
            </ProtectedRoute>
         }/>
         <Route path='/single/:id' element={
            <ProtectedRoute>
              <SinglePage/>
            </ProtectedRoute>
          }/>
         <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard/>
            </ProtectedRoute>
          } />
         <Route path='/error' element={<Error/>}/>
      </Routes>
    </div>
  )
}

export default App
