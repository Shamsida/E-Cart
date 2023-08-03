import React,{ useState , createContext } from 'react';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Cart from './pages/Cart';
import { Routes, Route ,  useLocation } from "react-router-dom";
import { CartProvider } from 'react-use-cart';
import Categories from './Categories/Categories'
import Categories2 from './Categories/Categories2';
import Categories3 from './Categories/Categories3';
import ProductDetails from './pages/ProductDetails';
import Register from './pages/Register';
import Admin from './pages/Admin';
import Users from './AdminPanel/Users';
import Products from './AdminPanel/Products';
import { useEffect } from 'react';
import Header from './components/Header';
import AddProduct from './AdminPanel/AddProduct';
import EditProduct from './AdminPanel/EditProduct';
import UserDetails from './AdminPanel/UserDetails';
import { categories1 , users} from './Data';
import AdminLogin from './AdminPanel/AdminLogin';

const userContext = createContext ();

function App() {
  let location = useLocation();
  const[state1, setState1]=useState(false);
  const[userState, setUserState]=useState('', false);
  const[adminState, setAdminState]=useState(false);
  const [confirm, setConfirm] = useState(false);
  const [input, setInput] = useState({
    id : '',
    firstname : "",
    lastname : "",
    email : "",
    username : "",
    mobilenumber: '',
    imgurl : '',
    password : ""
  });
  const [todos, setTodos] = useState([]);
  const [ productdata , setProductdata ] = useState(categories1);
  const [data, setData] = useState({
    id : "",
    image : "",
    title : "",
    price : "",
    type : ""
  });
  const [adminlog, setAdminlog] = useState([{
    username : "Ashwin",
    password : "ashwin23@gmail.com",
  }]);

  useEffect(()=>{
    if(location.pathname.includes('admin') || location.pathname.includes('login') || location.pathname.includes('register')){
      setState1(true)
    }else{
      setState1(false)
    }
    console.log(state1);
  },[location])

  const state ={
    input:input,
    setInput:setInput,
    todos:todos,
    setTodos:setTodos,
    confirm, setConfirm,
    productdata, setProductdata,
    data, setData,
    adminlog, setAdminlog,
    adminState, setAdminState,
    userState, setUserState
  }

  return (
    <userContext.Provider value={{state}}>
      {state1?null:<Header/>}
    <div className="App">
      <CartProvider>
      <Routes>
          <Route path="babycare" element={<Categories3 />} />
          <Route path="dress" element={<Categories2 />} />
          <Route path="toys" element={<Categories />} />
          <Route path="/" exact element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="cart" element={<Cart />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/adminlogin' element={<AdminLogin /> } />
          <Route element={<Admin/>}>
            <Route path="/admin/users" element={<Users />} />
            <Route path="/admin/userDetails/:userId" element={<UserDetails />} />
            <Route path="/admin/products" element={<Products />} />
            <Route path="/admin/addproducts" element={<AddProduct />} />
            <Route path="/admin/editproducts/:userId" element={<EditProduct />} />
          </Route>
          {/* <Route path="admin" element={<Admin />} /> */}
          <Route path="productdetails/:userId" element={<ProductDetails />} />
      </Routes>
    </CartProvider>
    </div>
    </userContext.Provider>
  );
}

export default App;
export {userContext};
