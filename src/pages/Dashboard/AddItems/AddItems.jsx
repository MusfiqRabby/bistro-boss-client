import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import Swal from "sweetalert2";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddItems = () => {
    const {register,handleSubmit, reset } = useForm()
    const axiosPublic = useAxiosPublic();
    const axiosSecure = UseAxiosSecure();
    const onSubmit = async (data) => {
    console.log(data);
    // image upload to imgbb and the get an url
    const imageFile = {image: data.image[0]}
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
    if(res.data.success){
    // now send the menu item data to the server with the image
     const menuItem ={
        name: data.name,
        category: data.category,
        price: parseFloat(data.number),
        recipe: data.recipe,
        image: res.data.data.display_url
     }
     
     // 
     const menuRes = await axiosSecure.post('/menu', menuItem);
     console.log('with image url', menuRes.data);
     if(menuRes.data.insertedId){
        // show success popup
        reset();
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${data.name} is added to the menu`,
            showConfirmButton: false,
            timer: 1500
          });
    } 
    }
    console.log(res.data);
    };
    
    return (
        <div>
         <SectionTitle heading="add an item" subHeading="What's new?"></SectionTitle>
         <div className="">
        <form onSubmit={handleSubmit(onSubmit)}>

<label className="form-control w-full ">
  <div className="label">
    <span className="label-text">Recipe name*</span>
  </div>
  <input type="text" 
  placeholder="Recipe name" 
  {...register("name", {required: true})}
  className="input items-center input-bordered w-full " />
</label>


<div className="flex gap-6">
      {/* category */}
    <label className="form-control w-full my-6 ">
  <div className="label">
    <span className="label-text">Category*</span>
  </div>
  <select 
  defaultValue='default'
 {...register("category", {required: true})}
 className="select select-bordered w-full items-center">
  <option disabled value='default'>Select a Category</option>
  <option value='salad'>Salad</option>
  <option value='pizza'>Pizza</option>
  <option value='dessert'>Dessert</option>
  <option value='soup'>Soup</option>
  <option value='drinks'>Drinks</option>
    </select>
</label>
     {/* price */}
<label className="form-control w-full my-6 ">
  <div className="label">
    <span className="label-text">Price*</span>
  </div>
  <input type="number" 
  placeholder="price" 
  {...register("number", {required: true})}
  className="input items-center input-bordered w-full " />
</label>
 </div>

{/* recipe details  */}
<div  className="form-control">
  <div className="label">
    <span className="label-text">Recipe Details</span>
  </div>
  <textarea {...register("recipe", {required: true})}  className="textarea textarea-bordered h-24 " placeholder="Bio"></textarea>
</div>
        {/* file input */}
        <div className="form-control w-full my-4">
        <input {...register("image", {required: true})} type="file" className="file-input w-full max-w-xs" />
        </div>
        <button className="btn bg-[#B58130] text-white" >
            Add Item <FaUtensils className="ml-4"/>
        </button>
         </form>
        </div> 
        </div>
    );
};

export default AddItems;