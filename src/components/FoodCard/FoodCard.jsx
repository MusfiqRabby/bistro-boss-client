import Swal from "sweetalert2";
import UseAuth from "../../hooks/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import useCart from "../../hooks/useCart";


const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const {user} = UseAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = UseAxiosSecure();
  const [, refetch] = useCart();

  const handleAddToCart = () => {
    if(user && user.email){
  
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price
      }
      axiosSecure.post('/carts', cartItem)
      .then(res => {
        console.log(res.data);
        if(res.data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 1500
          }); 
          //refetch cart to update the cart items count
          refetch();
        }
      })

    }
    else{
      Swal.fire({
        title: "You're Not Loggin",
        text: "Please Login add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!"
      }).then((result) => {
        if (result.isConfirmed) {
          // send the user to the login page
     navigate('/login', {state: {from: location}})
        }
      });
    }

  }

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
          <button 
          onClick={handleAddToCart}
          className="btn btn-outline border-0 border-b-4 bg-slate-100  mt-4 border-orange-400 text-orange-400">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;