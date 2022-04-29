
import { Link } from "react-router-dom";

const Navigation = () => {

   const cartStyle = {
     backgroundColor:'#f59e0d',

    display: 'flex',
    padding:'6px 12px',
    borderRadius: '50px',


   }


  return (
    <>
       <nav className="container mx-auto flex items-center justify-between py-4">

             <Link to="/">
               <img style={{height: 45}} src="/images/logo.png" alt="logo" />
             </Link>
            <ul className="flex items-center">
                <li><Link to="/">Home</Link></li>
                <li className="ml-5"><Link to="/Products">Products</Link></li>
                <li className="ml-5"> 
                  <Link to="/Cart">

                    <div style={cartStyle}>
                       <span>10</span>
                       <img className="ml-2" src="/images/cart.png" alt="cart-icon" />
                    </div>
           
                  </Link>

                </li>

            </ul>

       </nav>

       {/* { <Link to="/">Home</Link>
        <Link to="/About">About</Link>} */}


    </>
  )
}

export default Navigation