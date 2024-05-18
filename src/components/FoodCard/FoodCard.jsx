

const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} />
      </figure>
      <p className="absolute mr-4 mt-4 px-4 right-0 bg-slate-900 text-white">${price}</p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline border-0 border-b-4 bg-slate-100  mt-4 border-orange-400 text-orange-400">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;