import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({items ,title,coverImg }) => {
    return (
        <div className="my-12">
            {
                title &&  <Cover 
                img={coverImg}
                title={title}
                description="Would you like to try a dish?"
            ></Cover>
            }
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 ">
                {
                    items.map(item=><MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div> 
        </div>
    );
};

export default MenuCategory;