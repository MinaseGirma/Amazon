import React from 'react'
import { AiOutlineMenu } from "react-icons/ai"
import styles from "./header.module.css"

const HeaderBottom = () => {
  return (
    <div className={styles.headerBottom}>
      <ul>
        <li>
          <AiOutlineMenu className={styles.menuIcon} /> All
        </li>
        <li>Today's Deals</li>
        <li>Customer Service</li>
        <li>Registry</li>
        <li>Gift Cards</li>
        <li>Sell</li>
      </ul>
    </div>
  )
}

export default HeaderBottom
