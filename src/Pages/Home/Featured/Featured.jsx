import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImage from "../../../assets/home/featured.jpg"
import "./Featured.css"

const Featured = () => {
    return (
        <section className="featured-item text-white pt-8 my-20 bg-fixed">
            <SectionTitle
                subHeading={'Check it out'}
                heading={'FROM OUR MENU'}
            ></SectionTitle>
            <div className="md:flex justify-center items-center pb-20 pt-12 px-36 gap-8 bg-black opacity-60">
                <div>
                    <img  src={featuredImage} alt="" />
                </div>
                <div className="space-y-3">
                    <p>March 20, 2023</p>
                    <p className="uppercase">WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>

                    <button className="btn btn-outline border-0 text-white border-b-4">Order Now</button>
                </div>
            </div>
            
        </section>
    );
};

export default Featured;