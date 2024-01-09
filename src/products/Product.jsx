import React, { useState } from 'react'
import {Card,Button, Container } from 'react-bootstrap'
import { productData } from './product.data'

function Product() {
    const [items,setItem]=useState(productData)
    const incButton=(id)=>{
        const newQty = items.map((item)=>(
            item.id===id?{...item,qty:item.qty+1}:item
            
        ))
        setItem(newQty)

        
    }

    const decButton=(id)=>{
        const newQty= items.map((item)=>(
            id===item.id &&item.qty>1?{...item,qty:item.qty-1}:item
        ))
        setItem(newQty)
    }
  return (
    <Container>

        <h1 className='bg-info text-white text-center mb-3'>Product</h1>
        {items.map((item)=>(


        <div className='d-inline-flex m-3' key={item.id}>
        <Card style={{ width: '18rem' }}  className='text-center shadow p-3 mb-5 bg-white rounded'>
            <Card.Img variant="top" className='p-3' src={require(`./assets/${item.name}.jpg`)} />
            <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
            {item.desc}
            </Card.Text>
            <Card.Title>₹ {item.price}</Card.Title>
            <p>

            <Button onClick={()=>decButton(item.id)}>-</Button>{item.qty}
            <Button onClick={()=>incButton(item.id)}>+</Button>
            </p>
            <Button variant="primary" >Add to cart</Button>
            </Card.Body>
        </Card>
        </div>
        ))}

    </Container>
  )
}

export default Product