
const MenuItem = ({item}) => {
    const{name,image,price,recipe}=item
    return (
        <div className="flex space-x-3">
            <img style={{borderRadius:"0px 200px 200px 200px"}} className="w-[100px] " src={image} alt="" />
            <div>
                <h2 className="uppercase">{name} ------------</h2>
                <p>{recipe}</p>
            </div>
            <p className="text-[#BB8506]">$ {price}</p>
        </div>
    );
};

export default MenuItem;