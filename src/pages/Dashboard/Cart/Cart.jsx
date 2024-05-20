import useCart from "../../../hooks/useCart";

const Cart = () => {
   
   const [cart] = useCart();
   const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    return (
        <div>
      <div className="flex justify-evenly">
      <h2 className="text-4xl font-bold">Items: {cart.length}</h2>
      <h2 className="text-4xl font-bold">Total Price: {totalPrice}</h2>
      <button className="btn bg-[#D1A054] text-xl text-white">Pay</button>
      </div>
      {/* Table */}
      <div className="overflow-x-auto mt-4 ">
  <table className="table">
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
        cart.map(item => <tr key={item._id}>
            <th>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.image} />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Hart Hagerty</div>
                  <div className="text-sm opacity-50">United States</div>
                </div>
              </div>
            </td>
            <td>
              Zemlak, Daniel and Leannon
              <br/>
              <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
            </td>
            <td>Purple</td>
            <th>
              <button className="btn btn-ghost btn-xs">details</button>
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