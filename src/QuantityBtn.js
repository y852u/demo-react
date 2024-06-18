import {useContext, useState} from 'react'
import { CartContext } from './CartContext'

export default function QuantityBtn({productInfo}) {

    const{cartItems,setCartItems}  =  useContext(CartContext)
    console.log(cartItems)
    //睇下購物車內有冇該產品
    let productIndexIncart =  cartItems.findIndex((element)=>{
        return element.id === productInfo.id
    })

    //findeIndex 如果在購物車內找到該件產品 =>返回索引位置0、1、2、3...
    //該件產品沒有被加入過購物車 => 返回-1

    let [numIncart,setNumIncart] = useState(
        (productIndexIncart===-1) ? 0 : cartItems[productIndexIncart].quantity
    )

    const handleAdd =()=>{
        if(productIndexIncart===-1)
        {
            //購物車本身沒有，在cartItems array中加個新element(object)
            setCartItems([
                {
                    id:productInfo.id,
                    name:productInfo.name,
                    image:productInfo.image,
                    price:productInfo.price,
                    description:productInfo.description,
                    quantity:1,
                },
                ...cartItems
            ])
        }
        else
        {
            //購物車有該產品，只加個quantity
            let newCartArray =[...cartItems]
            newCartArray[productIndexIncart].quantity++
            setCartItems(newCartArray)
        }
        setNumIncart(numIncart+1)
    }
    const handleSubtract =()=>{

        if(cartItems[productIndexIncart].quantity===1)
        {
            //購物車中只剩下一件的話，remove object
            let newCartArray =[...cartItems];
            newCartArray.splice(productIndexIncart,1)
            setCartItems(newCartArray)
        }
        else
        {
            //只減quantity
            let newCartArray =[...cartItems]
            newCartArray[productIndexIncart].quantity--
            setCartItems(newCartArray)
        }

        setNumIncart(numIncart-1)
    }
  return (
    <div>
        {
            (numIncart===0) ?
            <div onClick={()=> {handleAdd()}}>加入{productInfo.name}購物車</div>:
         <div>
            <span onClick={handleSubtract}>-</span>
            {numIncart}件
            <span onClick={handleAdd}>+</span>
        </div>
        }
    </div>
  )
}
