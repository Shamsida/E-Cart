import React, { useEffect , useState} from 'react';
import { useNavigate } from "react-router-dom";
import { Input , Form, Label, FormGroup, Col , Button } from 'reactstrap';
import { userContext } from '../App';
import { useContext } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { useParams} from 'react-router-dom';


function EditProduct() {
    const product = useContext(userContext);
    const { data, setData , productdata , setProductdata }= product.state;
    const navigate = useNavigate();

    const {userId} = useParams();
    const [productData1, setProductData1] = useState([]);
    

    const okay=productdata.filter((item)=>{
      return item.id == parseInt(userId)
  });
  const[add,setAdd]=useState( okay[0] );
  const [editdata , setEditdata] = useState(okay[0]);

    // useEffect(() =>{ 
    //     const item = productdata.filter((todo)=> (todo.id)  == parseInt(userId) );
    //     setProductData1( item );
    //     setEditdata (item);
    //     // console.log(typeof(parseInt(userId)))
    //     // console.log(productdata);
    //     // console.log(userId);
    //   },[]);

    const onInputChange =(event) => {
      const {name , value} = event.target;
      setData( (prev) => {
         return { ...prev, [name] : value };
      });
      console.log(product.state.data)
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        console.log(data,"this");
        const newState = productdata.map (obj =>{
          if(obj.id == userId){
            if (product.state.data.image === ''){
              product.state.data.image = editdata.image
            }
            if (product.state.data.title === ''){
              product.state.data.title = editdata.title
            }
            if (product.state.data.price === ''){
              product.state.data.price = editdata.price
            }
            if (product.state.data.type === ''){
              product.state.data.type = editdata.type
            }
            return { image:product.state.data.image, title:product.state.data.title,price:product.state.data.price, type:product.state.data.type ,completed:false};
          }else{
            return obj ;
          }
        });
        setProductdata(newState);
        // setProductdata([...productdata, { image:product.state.data.image, title:product.state.data.title,price:product.state.data.price, type:product.state.data.type ,completed:false}]);
        // setData('');

      };

  return (
    // <div style={{marginLeft:250, marginRight:20 , marginTop:60}}>
    //   {  console.log(productData1)}
    //    {console.log(editdata,"...........")}
    //     <h1 style={{marginLeft:'22rem' , marginBottom:'1rem'}}>Edit Product Details</h1>
    //     <div className='d-flex vh-50 justify-content-center '>
    //         <div style={{width:800}} className='border bg-light p-5'>
    //         {productData1.map((item)=>
    //     ( 
    //         <Form onSubmit={onFormSubmit} >
    //         <FormGroup row>
    //           <Label
    //             for="id"
    //             sm={2}
    //           >
    //           Id :
    //           </Label>
    //           <Col sm={10}>
    //             <Input
    //               name="id"
    //               disabled
    //               value={item.id}
    //               placeholder="Enter id here"
    //               type="text"
    //             //   onChange={onInputChange}
    //             //    onChange={(e)=>setProductData({...productdata, id: product.state.id})}
    //             />
    //           </Col>
    //         </FormGroup>
    //         <FormGroup row>
    //           <Label
    //             for="image"
    //             sm={2}
    //           >
    //           Image :
    //           </Label>
    //           <Col sm={10}>
    //             <Input
    //               name="image"
    //               defaultValue={item.image}
    //               placeholder="Enter image url here"
    //               type="text"
    //               // onChange={(e)=>setData({...data, image : e.target.image })}
    //               onChange={onInputChange}
    //             />
    //           </Col>
    //         </FormGroup>
    //         <FormGroup row>
    //           <Label
    //             for="title"
    //             sm={2}
    //           >
    //           Title :
    //           </Label>
    //           <Col sm={10}>
    //             <Input
    //               name="title"
    //               placeholder="Enter title here"
    //               type="text"
    //               // value={item.title}
    //               defaultValue={item.title}
    //               onChange={onInputChange}
    //               // onChange={(e)=>setData({...data, title : e.target.title })}
    //             />
    //           </Col>
    //         </FormGroup>
    //         <FormGroup row>
    //           <Label
    //             for="price"
    //             sm={2}
    //           >
    //           Price :
    //           </Label>
    //           <Col sm={10}>
    //             <Input
    //               name="price"
    //               placeholder="Enter title here"
    //               type="text"
    //               defaultValue={item.price}
    //               // onChange={(e)=>setData({...data, price : e.target.value })}
    //               onChange={onInputChange}
    //             />
    //           </Col>
    //         </FormGroup>
    //         <FormGroup row>
    //           <Label
    //             for="type"
    //             sm={2}
    //           >
    //           Category :
    //           </Label>
    //           <Col sm={10}>
    //             <Input
    //               name="type"
    //               placeholder="Enter title here"
    //               type="text"
    //               defaultValue={item.type}
    //               onChange={onInputChange}
    //               // onChange={(e)=>setData({...data, category : e.target.category })}
    //             //   onChange={(e)=>setProductData({...productdata, Type: product.state.Type})}
    //             />
    //           </Col>
    //         </FormGroup>
    //         <FormGroup
    //           check
    //           row
    //           >
    //           <Col
    //            sm={{
    //            offset:1,
    //            size: 10
    //            }}>
    //             <div className='d-flex justify-content-center '>
    //          <Button>
    //            Submit
    //          </Button>
    //          <Button  style={{marginLeft : "20px"}} onClick={() => navigate("/admin/products")}>
    //          <AiFillHome />
    //          </Button>
    //          </div>
    //          </Col>
    //         </FormGroup>
    //       </Form>
    //        ) )}
    //         </div>
    //     </div>
    //     </div>
    <div style={{marginLeft:250, marginRight:20 , marginTop:60}}>
      {  console.log(productData1)}
       {console.log(editdata,"...........")}
        <h1 style={{marginLeft:'22rem' , marginBottom:'1rem'}}>Edit Product Details</h1>
        <div className='d-flex vh-50 justify-content-center '>
            <div style={{width:800}} className='border bg-light p-5'>
            <Form onSubmit={onFormSubmit} >
            <FormGroup row>
              <Label
                for="id"
                sm={2}
              >
              Id :
              </Label>
              <Col sm={10}>
                <Input
                  name="id"
                  disabled
                  value={add.id}
                  placeholder="Enter id here"
                  type="text"
                //   onChange={onInputChange}
                //    onChange={(e)=>setProductData({...productdata, id: product.state.id})}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label
                for="image"
                sm={2}
              >
              Image :
              </Label>
              <Col sm={10}>
                <Input
                  name="image"
                  defaultValue={add.image}
                  placeholder="Enter image url here"
                  type="text"
                  // onChange={(e)=>setData({...data, image : e.target.image })}
                  onChange={onInputChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label
                for="title"
                sm={2}
              >
              Title :
              </Label>
              <Col sm={10}>
                <Input
                  name="title"
                  placeholder="Enter title here"
                  type="text"
                  // value={item.title}
                  defaultValue={add.title}
                  onChange={onInputChange}
                  // onChange={(e)=>setData({...data, title : e.target.title })}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label
                for="price"
                sm={2}
              >
              Price :
              </Label>
              <Col sm={10}>
                <Input
                  name="price"
                  placeholder="Enter title here"
                  type="text"
                  defaultValue={add.price}
                  // onChange={(e)=>setData({...data, price : e.target.value })}
                  onChange={onInputChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label
                for="type"
                sm={2}
              >
              Category :
              </Label>
              <Col sm={10}>
                <Input
                  name="type"
                  placeholder="Enter title here"
                  type="text"
                  defaultValue={add.type}
                  onChange={onInputChange}
                  // onChange={(e)=>setData({...data, category : e.target.category })}
                //   onChange={(e)=>setProductData({...productdata, Type: product.state.Type})}
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
             <Button  style={{marginLeft : "20px"}} onClick={() => navigate("/admin/products")}>
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

export default EditProduct