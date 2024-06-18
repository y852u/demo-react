import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import Title from "./Title"
import QuantityBtn from "./QuantityBtn"
import { useState,useEffect } from "react"

export default function ProductDetail() {

  let params = useParams()
  let [ProductDetail,setProductDetail]=useState(null)
  useEffect(()=>{
    fetch("https://hoyinleung.github.io/demoapi/react-basic-product.json")
      .then(response=>response.json())
      .then(data =>{
        let productInfo = data.find((element)=>{
          return element.id===parseInt(params.id)
        })
        setProductDetail(productInfo)
      })
  },[])
  return (
    <div>
      {
        ProductDetail &&
        <div>
            <Title mainTitle={ProductDetail.name.id+"產品資料"}/>
            <img src={"process.env.PUBLIC_URL+'/images/'+productDetail.image"} alt=
            {ProductDetail.name} width = "400"/>
            <p>名稱:{ProductDetail.name}</p>
            <p>售價:{ProductDetail.price}元</p>
            <p>描述:{ProductDetail.description}</p>
            <QuantityBtn productInfo={ProductDetail}/>
        </div>
      }
      <Link to={"/"}>回到產品列表</Link>
    </div>
  )
}
