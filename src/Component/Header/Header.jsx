import React from 'react'
import { BsSearch } from 'react-icons/bs';
import { BiCart } from 'react-icons/bi';
import { SlLocationPin } from 'react-icons/sl';

const Header = () => {
  return (
    <section>
        <section>
            <div>
                {/* logo */}
                <a href="">
                    <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" /></a>
                {/* {deli veryLocation} */}
                <span>{<SlLocationPin />}</span>
                <div>
                    <p>Delivered to</p>
                    <span>Ethiopia</span>
                </div>
            </div>
            <div><select name="" id="">
                <option value="">All</option></select> 
                <input type="text" name="" id="" placeholder="Search products" />
                {/* icon */}
                <span>{<BsSearch />}</span>
                </div>
            {/* right side */}
            <div>
                    <img src="" alt="" />
                    <section>
                        <option value="">EN</option>
                    </section>
            </div>
            <div>
                {/* three components */}
                <a href="">
                    <div>
                        <p>Sign In</p>
                        <span>Account & Lists</span>
                    </div>
                </a>
                {/* orders */}
                <a href="">
                    <div>
                        <p>Returns</p>
                        <span>& Orders</span>
                    </div>
                </a>
                {/* cart */}
               <a to={"cart"}>
                   <div>
                       {/* icon */}
                       <span>{<BiCart />}</span>
                       <span>Cart</span>
                   </div>
               </a>
            </div>
        </section>
    </section>
  )
}

export default Header