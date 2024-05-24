import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import useMenu from "../../../hooks/UseMenu";


 

const ManageItems = () => {
   
    const [menu] = useMenu();


    const handleDeleteItem = (item) => {

    }
   
    return (
        <div>
            <SectionTitle heading='Manage All Items' subHeading='Hurry Up!'></SectionTitle>
      
      <div>
      <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
        #
        </th>
        <th>Image</th>
        <th>Item Name</th>
        <th>Price</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
    
    {
        menu.map((item, index) => <tr key={item._id}>
        <td>
        {index + 1}
        </td>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            
          </div>
        </td>
        <td>
            {item.name}
        </td>
        <td className="text-right">${item.price}</td>
        <td>
        <button
          
            className="btn btn-ghost btn-md bg-[#D1A054] ">
            <FaEdit className="text-white text-2xl" />
            </button>
        </td>
        <td>
        <button
              onClick={() => handleDeleteItem(item)}
              className="btn btn-xs bg-[#B91C1C] text-white">
                <FaTrashAlt/>
              </button>
        </td>
      </tr>)
    }
      
    </tbody>
    
  </table>
</div>
      </div>
      
        </div>
    );
};

export default ManageItems;