import { Link } from 'react-router-dom'
import styles from './ProductList.module.css'
import react,{ useState ,useEffect} from 'react'
import Title from './Title'
import QuantityBtn from './QuantityBtn'

export default function ProductList() {
  let[productList,setProductlist] =useState([])
  let[input,setInput] =useState('')

    useEffect(()=>{
      //1.無第二個參數：compon每次render都會觸發
      //2.dependency array 是空array時：只會在第一次網頁render時會觸發
      //3.dependency array 是有變數時： 第一次網頁render時+指定的變數改變會觸發
      fetch("https://hoyinleung.github.io/demoapi/react-basic-product.json")
        .then(response=>response.json())
        .then(data => setProductlist(data))

      console.log(productList)
    },[])  //《==dependency array

      /*let productList = [
        {"id":1,"name":"茶","price":5,"image":"涼茶.jpeg","description":"清"},
        {"id":2,"name":"茶1","price":4,"image":"涼茶1.jpeg","description":"熱"},
        {"id":3,"name":"茶2","price":3,"image":"涼茶2.jpeg","description":"化"},
        {"id":4,"name":"茶3","price":2,"image":"涼茶3.jpeg","description":"痰"}
    ]  */
    //const[showProduct,setShowProduct]=useState(false)

  return (
    //react Fragment
    <>
     {/* <input type='text' onChange={e=>setInput(e.target.value)}/>
      {showProduct &&<button onClick={() => setShowProduct(false)}>隱藏產品</button>}
  {!showProduct &&<button onClick={() => setShowProduct(true) }>顯示產品</button>}*/}

      <Title mainTitle="請選擇要購買的涼茶"/>
      <div>
            {/*showProduct && */} {productList.map(product=> (
            <react.Fragment className={styles.productBorder} key ={product.id}> 
                    {product.name}<br/>
                    ${product.price}元/件<br/>
                    <Link to={'/product/'+product.id}>
                    <img src={process.env.PUBLIC_URL+'/img/'+product.image}/><br/>
                    </Link>
                    <br/>
                    {product.description}<br/>
                    <QuantityBtn productInfo = {product}/>
                 </react.Fragment>
            ))
        }
      </div>
    </>
  )
}



