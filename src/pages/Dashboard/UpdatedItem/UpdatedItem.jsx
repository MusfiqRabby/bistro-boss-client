
import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`


const UpdatedItem = () => {
  
 const {name, category, recipe, price, _id} = useLoaderData();
 const {register,handleSubmit, } = useForm()
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
     price: parseFloat(data.price),
     recipe: data.recipe,
     image: res.data.data.display_url
  }
  // 
  const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
  console.log('with image url', menuRes.data);
  if(menuRes.data.modifiedCount > 0){
     // show success popup
    //  reset();
     Swal.fire({
         position: "top-end",
         icon: "success",
         title: `${data.name} is updated to the menu`,
         showConfirmButton: false,
         timer: 1500
       });
 } 
 }
 console.log(res.data);
 };
console.log(price);
  
    return (
        <div>
        <SectionTitle heading="Updated an Item" subHeading="Refresh Info"></SectionTitle>
        
 <div className="">
<form onSubmit={handleSubmit(onSubmit)}>
<label className="form-control w-full ">
  <div className="label">
    <span className="label-text">Recipe name*</span>
  </div>
  <input type="text" 
  defaultValue={name}
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
  defaultValue={category}
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
  defaultValue={price}
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
  <textarea defaultValue={recipe} {...register("recipe", {required: true})}  className="textarea textarea-bordered h-24 " placeholder="Bio"></textarea>
</div>
        {/* file input */}
        <div className="form-control w-full my-4">
        <input {...register("image", {required: true})} type="file" className="file-input w-full max-w-xs" />
        </div>
        <button className="btn bg-[#B58130] text-white" >
            Update Menu Item
        </button>
         </form>
        </div> 
        </div>
    );
};

export default UpdatedItem;