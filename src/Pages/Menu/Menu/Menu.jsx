import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import img from "../../../assets/menu/banner3.jpg"
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import saladImg from "../../../assets/menu/salad-bg.jpg"
import soupImg from "../../../assets/menu/soup-bg.jpg"

const Menu = () => {
    const [menu]=useMenu()
    const offered=menu.filter(item=>item.category=== "offered")
    const desserts=menu.filter(item=>item.category=== "dessert")
    const pizza=menu.filter(item=>item.category=== "pizza")
    const salad=menu.filter(item=>item.category=== "salad")
    const soup=menu.filter(item=>item.category=== "soup")
    return (
        <div>
            <Helmet>
                <title>My Restaurant | menu</title>
                
            </Helmet>
            <Cover 
                img={img}
                title="OUR MENU"
                description="Would you like to try a dish?"
            ></Cover>
          {/* menu cover */}
            <SectionTitle
                subHeading="Don't miss"
                heading="TODAY'S OFFER"
            ></SectionTitle>
            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu items */}
            <MenuCategory items={desserts} title="DESSERTS" coverImg={dessertImg} ></MenuCategory>
            {/*pizza menu items  */}
            <MenuCategory items={pizza} title={"PIZZA"} coverImg={pizzaImg} ></MenuCategory>
            {/*pizza menu items  */}
            <MenuCategory items={salad} title={"salad"} coverImg={saladImg} ></MenuCategory>
            {/*soup menu items  */}
            <MenuCategory items={soup} title={"salad"} coverImg={soupImg} ></MenuCategory>
           
        </div>
    );
};

export default Menu;