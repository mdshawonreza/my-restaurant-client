
const FoodCard = ({item}) => {
    const{name,image,price,recipe}=item
    return (
        <div className="card w-[360px] bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute right-0 mr-3 mt-3  bg-slate-900 text-white px-3 py-1 rounded-lg">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
               
                <div className="card-actions justify-end">
                    <button className="btn btn-outline border-0 border-orange-400  border-b-4 bg-gray-300 uppercase">add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;