import { Helmet } from "react-helmet-async";
import orderCover from "../../../assets/shop/banner2.jpg"
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import FoodCard from "../../../components/FoodCard/FoodCard";


const Order = () => {
    const [tabIndex,setTabIndex]=useState(0)
    const[menu]=useMenu()
    const offered=menu.filter(item=>item.category=== "offered")
    const desserts=menu.filter(item=>item.category=== "dessert")
    const pizza=menu.filter(item=>item.category=== "pizza")
    const salad=menu.filter(item=>item.category=== "salad")
    const soup=menu.filter(item=>item.category=== "soup")
    return (
        

        <div>
            <Helmet>
                <title>My Restaurant | order food</title>

            </Helmet>
            <Cover img={orderCover} title={'OUR Order'} description={'Would you like to try a dish?'}></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {
                            salad.map(item=><FoodCard key={item._id} item={item} ></FoodCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
            </Tabs>


        </div>
    );
};

export default Order;