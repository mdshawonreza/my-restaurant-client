import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import img from "../../../assets/menu/banner3.jpg"

const Menu = () => {
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
            
        </div>
    );
};

export default Menu;