import React, { useEffect , useState} from 'react';
import { useNavigate } from "react-router-dom";
import { Input , Form, Label, FormGroup, Col , Button } from 'reactstrap';
import { userContext } from '../App';
import { useContext } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { useParams} from 'react-router-dom';
import axios from 'axios';
import { ToastContainer , toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EditOrders() {
    const {orderId} = useParams();
    const product = useContext(userContext);
    const { order, setOrder }= product.state;
    const [productData1, setProductData1] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`https://localhost:7152/api/Order/GetOrderById?Id=${orderId}`);
          const data = response.data;
          setOrder({userid : data[0]?.userId,items : data[0]?.totalItems, total:data[0]?.totalPrice, date: data[0]?.createDate,status : data[0]?.status,paymentstatus:data[0]?.paymentStatus});
          setProductData1(data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    }, [orderId]);
  
    console.log(productData1,"orderData--------------------");
    console.log(order,"orderData1--------------------");


    const onInputChange = (event) => {
        const {name , value} = event.target;
        setOrder( (prev) => {
           return { ...prev, [name] : value };
        });
        console.log(product.state.order)
      };

      const onFormSubmit = async (event) => {
        event.preventDefault();
        console.log(order,"this");
        try{
          const response = await axios.put(`https://localhost:7152/api/Order/PutItems?Id=${orderId}`,{
            "id" : product.state.data.id,
            "status" : product.state.order.status,
            "pickupAddress" : productData1[0]?.pickupAddress,
            "pickupEmail" : productData1[0]?.pickupEmail,
            "pickupPhoneNumber" : productData1[0]?.pickupPhoneNumber

          },);
          const resData = response.data
          console.log(resData);
          setOrder({
            userid : '',
            items : "",
            total : "",
            date : "",
            status : "",
            paymentstatus: ''
        });
          toast.success("Product data has been updated");
        }catch(error){
          console.log(error.response.data);
        }
      };
      const Goback = () =>{
        setOrder({
            userid : '',
            items : "",
            total : "",
            date : "",
            status : "",
            paymentstatus: ''
        });
        navigate("/admin/orderlist")
      }

  return (
    <div style={{marginLeft:250, marginRight:20 , marginTop:60}}>
        <h1 style={{textAlign : 'center' , marginBottom:'1rem'}}>Edit Order Details</h1>
        <div className='d-flex vh-50 justify-content-center '>
            <div style={{width:800}} className='border bg-light p-5 pb-4'>
            <Form onSubmit={onFormSubmit} >
            <FormGroup row>
              <Label
                for="userid"
                sm={2}
              >
              UserId :
              </Label>
              <Col sm={10}>
                <Input
                  name="userid"
                  disabled
                  value={product.state.order.userid}
                  type="text"
                //   onChange={onInputChange}
                //    onChange={(e)=>setProductData({...productdata, id: product.state.id})}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label
                for="items"
                sm={2}
              >
              Items :
              </Label>
              <Col sm={10}>
                <Input
                  name="items"
                  disabled
                  Value={product.state.order.items}
                  type="text"
                  // onChange={(e)=>setData({...data, image : e.target.image })}
                  //onChange={onInputChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label
                for="total"
                sm={2}
              >
              Total :
              </Label>
              <Col sm={10}>
                <Input
                  name="total"
                  disabled
                  type="text"
                  Value={product.state.order.total}
                  //onChange={onInputChange}
                  // onChange={(e)=>setData({...data, title : e.target.title })}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label
                for="date"
                sm={2}
              >
              Date :
              </Label>
              <Col sm={10}>
                <Input
                  name="date"
                  type="text"
                  disabled
                  Value={product.state.order.date}
                  // onChange={(e)=>setData({...data, price : e.target.value })}
                  //onChange={onInputChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label
                for="status"
                sm={2}
              >
              Order Status :
              </Label>
              <Col sm={10}>
                <Input
                  name="status"
                  type="text"
                  defaultValue={product.state.order.status}
                  onChange={onInputChange}
                  // onChange={(e)=>setData({...data, category : e.target.category })}
                //   onChange={(e)=>setProductData({...productdata, Type: product.state.Type})}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label
                for="paymentstatus"
                sm={2}
              >
              Payment Status :
              </Label>
              <Col sm={10}>
                <Input
                  className='mt-3'
                  name="paymentstatus"
                  type="text"
                  disabled
                  Value={product.state.order.paymentstatus}
                  // onChange={(e)=>setData({...data, price : e.target.value })}
                  //onChange={onInputChange}
                />
              </Col>
            </FormGroup>
            <FormGroup
              check
              row
              >
              <Col
               sm={{
               offset:1,
               size: 10
               }}>
                <div className='d-flex justify-content-center '>
             <Button>
               Submit
             </Button>
             <Button  style={{marginLeft : "20px"}} onClick={()=>Goback()}>
             <AiFillHome />
             </Button>
             </div>
             </Col>
            </FormGroup>
          </Form>
            </div>
        </div>
        </div>
  )
}

export default EditOrders
