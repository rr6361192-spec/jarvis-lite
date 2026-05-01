import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Product from './Product';
import Navbar from './navbar';
function Landing() {
  return (
    <div>
      
  <Navbar/>
  <div style={{height:'100%',width:'110%',display:'flex',flexDirection:'row',flexWrap:'wrap',gap:'55px',}}>
  
 <Product Product={{image:"https://www.bing.com/th?id=OPAC.Jv9FAbbgId883Q474C474&o=5&pid=21.1&w=140&h=140&rs=1&qlt=100&dpr=1.3&o=2&pcl=f5f5f5",title:"JAAMSO ROYALS",price:"7500",pric:"8500",offer:'40%'}}/>
 <Product Product={{image:"https://cdn.fcglcdn.com/brainbees/images/products/583x720/10717475a.webp",title:" Door Wardrobe With Mirror",price:"7500",pric:'8300',offer:"34%"}}/>
<Product Product={{image:"https://www.bing.com/th?id=OPAC.pTaS%2b5f3dFduEg474C474&o=5&pid=21.1&w=140&h=140&rs=1&qlt=100&dpr=1.3&o=2&c=8&pcl=f5f5f5",title:"Oren Empower Blue Planet  ",price:"5040",pric:"8500",offer:'30%'}}/>
<Product Product={{image:"https://th.bing.com/th/id/OPAC.Hj4v2lZE0EEZMQ474C474?w=592&h=550&o=5&dpr=1.3&pid=21.1",title:"Modern Cubical Wall Shelves  ",price:"5000",pric:"6500",offer:'10%'}}/>
<Product Product={{image:"https://th.bing.com/th/id/OPAC.KKbWs4xnKthgcQ474C474?w=592&h=550&qlt=20&o=5&dpr=1.3&pid=21.1",title:"Joyce 4 Door Wardrobe",price:"3000",pric:"8500",offer:'30%'}}/>
<Product Product={{image:"https://th.bing.com/th?id=OPAC.zUqzG%2fmaFCn48w474C474&w=592&h=550&qlt=20&o=5&dpr=1.3&pid=21.1",title:"  Petra TV Unit",price:"2000",pric:"2500",offer:'10%'}}/>
 <Product Product={{image:"https://th.bing.com/th/id/OPAC.B5V2UFeDDvBbUQ474C474?w=592&h=550&o=5&dpr=1.3&pid=21.1",title:"Modern TV Consoles - Stylo TV",price:"1500",pric:"3500",offer:'60%'}}/>
<Product Product={{image:"https://th.bing.com/th?id=OPAC.useoLxhJ6te%2fmQ474C474&w=140&h=140&dpr=1.3&pid=21.1",title:"Iron Ganesha TLight Candle Stand",price:"4500",pric:"5500",offer:'40%'}}/>
<Product Product={{image:"https://th.bing.com/th/id/OPAC.tSC7TP7YayD5iA474C474?w=592&h=550&o=5&dpr=1.3&pid=21.1",title:"Dijon Sheesham Wood Nesting Coffee Table Set  ",price:"7500",pric:"9500",offer:'40%'}}/>
<Product Product={{image:"https://th.bing.com/th/id/OPAC.c222Uh9Tlg3EFA474C474?w=220&h=220&c=17&o=5&dpr=1.3&pid=21.1",title:"Modern Book Shelves",price:"500"}}/>
 <Product Product={{image:"https://th.bing.com/th?id=OPAC.m45nxdl%2bORHy4Q474C474&w=220&h=220&c=17&o=5&dpr=1.3&pid=21.1",title:"Contemporary Book Shelves ",price:"3500",pric:"4500",offer:'10%'}}/>
<Product Product={{image:"https://th.bing.com/th/id/OPAC.eQ6MhssNYaxbJA474C474?w=592&h=550&qlt=20&o=5&dpr=1.3&pid=21.1",title:"Neo Study Table",price:"14000",pric:"30500",offer:'10%'}}/>
<Product Product={{image:"https://cdn.fcglcdn.com/brainbees/images/products/583x720/15779248a.webp",title:"999Store ",price:"5300",pric:'6500',offer:'20%'}}/>
</div>
</div>
    
  );


  
}

export default Landing;
