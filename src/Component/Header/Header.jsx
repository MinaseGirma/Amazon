import { BsSearch } from "react-icons/bs"
import { BiCart } from "react-icons/bi"
import { SlLocationPin } from "react-icons/sl"
import styles from "./header.module.css"
import Headerbottom from "./Headerbottom.jsx"

const Header = () => {
  return (
    <>
    <section className={styles.header}>
      <section className={styles.headerContainer}>
        <div className={styles.headerLeft}>
          {/* logo */}
          <a href="" className={styles.logo}>
            <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
          </a>
          {/* delivery location */}
          <div className={styles.location}>
            <span className={styles.locationIcon}>
              <SlLocationPin />
            </span>
            <div className={styles.locationText}>
              <p>Deliver to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>

        <div className={styles.headerSearch}>
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" name="" id="" placeholder="Search Amazon" />
          {/* search icon */}
          <span className={styles.searchIcon}>
            <BsSearch />
          </span>
        </div>

        <div className={styles.headerRight}>
          {/* language selector */}
          <div className={styles.language}>
            <img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" alt="US flag" />
            <select name="" id="">
              <option value="">EN</option>
            </select>
          </div>

          {/* sign in */}
          <a href="" className={styles.headerLink}>
            <p>Hello, Sign in</p>
            <span>Account & Lists</span>
          </a>

          {/* orders */}
          <a href="" className={styles.headerLink}>
            <p>Returns</p>
            <span>& Orders</span>
          </a>

          {/* cart */}
          <a href="/cart" className={styles.cart}>
            <span className={styles.cartIcon}>
              <BiCart />
            </span>
            <span>Cart</span>
          </a>
        </div>
      </section>
    </section>
    <Headerbottom />
    </>
  )
}

export default Header
