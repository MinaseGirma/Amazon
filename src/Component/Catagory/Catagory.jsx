import { catagoryInfo } from "./Catagoryfullinfo"
import CatagoryCard from "./CatagoryCard"
import classes from "./Catagory.module.css"


const Catagory = () => {
  return (
    <section className={classes.catagory_container}>
      {catagoryInfo.map((info) => (
        <CatagoryCard key={info.name} data={info} />
      ))}
    </section>
  )
}

export default Catagory
