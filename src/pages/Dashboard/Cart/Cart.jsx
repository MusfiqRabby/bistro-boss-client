import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
   
   const [cart, refetch] = useCart();
   const totalPrice = cart.reduce((total, item) => total + item.price, 0)
   const axiosSecure = UseAxiosSecure();


  const handleDelete = id =>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
        

        axiosSecure.delete(`/carts/${id}`)
        .then(res => {
            console.log(res);
            if(res.data.deletedCount > 0 ){
                refetch();
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
            }
        })
       
        }
      });
  }



    return (
        <div>
      <div className="flex justify-evenly">
      <h2 className="text-4xl font-bold">Items: {cart.length}</h2>
      <h2 className="text-4xl font-bold">Total Price: {totalPrice}</h2>


    { cart.length ? <Link to="/dashboard/payment">
    <button className="btn bg-[#D1A054] text-xl text-white">Pay</button>
    </Link>:
    <button disabled className="btn bg-[#D1A054] text-xl text-white">Pay</button>
    }

      </div>
      {/* Table */}
      <div className="overflow-x-auto mt-8 bg-gray-200 ">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr className="bg-[#D1A054] text-white">
        <th>
          #
        </th>
        <th>ITEM IMAGE</th>
        <th>ITEM NAME</th>
        <th>PRICE</th>
        <th>ACTION</th>
      </tr>
    </thead>
    <tbody>
     {
        cart.map((item, index) => <tr key={item._id}>
            <th>
                {index + 1}
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.image} />
                  </div>
                </div>
              </div>
            </td>
            <td>
             {item.name}
            </td>
            <td>${item.price}</td>
            <th>
              <button
              onClick={() => handleDelete(item._id)}
              className="btn btn-ghost btn-xs bg-[#B91C1C] text-white">
                <FaTrashAlt/>
              </button>
            </th>
          </tr>)
     }
      
    </tbody>
    {/* foot */}
  
    
  </table>
</div>

        </div>
    );
};

export default Cart;