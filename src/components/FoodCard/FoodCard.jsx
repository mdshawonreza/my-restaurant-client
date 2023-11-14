
const FoodCard = ({item}) => {
    const{name,image,price,recipe}=item
    return (
        <div className="card w-[360px] bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute right-0 mr-3 mt-3  bg-slate-900 text-white px-3 py-1 rounded-lg">${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
               
                <div className="card-actions justify-end">
                    <button className="btn btn-primary uppercase">add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;