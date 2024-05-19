import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";



const SignUp = () => {

  const {register, reset, handleSubmit, formState: {errors}} = useForm();
  const {createUser, updateUserProfile} = useContext(AuthContext);
  const navigate = useNavigate();


  const onSubmit = data => {
    console.log(data);
    createUser(data.email, data.password)
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
      .then(() => {
        console.log('user profile info updated');
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User Created Successfully",
          showConfirmButton: false,
          timer: 1500
        });
        navigate('/');
      })
      .catch(error => console.log(error))
    })
  }

    return (
      <>
      <Helmet>
        <title>Bistro Boss || Sign-Up</title>
      </Helmet>
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign-Up now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">name</span>
          </label>
          <input type="text" name="name" placeholder="Name" 
           {...register("name", { required: true })}
          className="input input-bordered"  />
          {errors.name && <span className="text-red-700">Name is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name="photo URL" placeholder="photo URL" 
           {...register("photo URL", { required: true })}
          className="input input-bordered"  />
          {errors.photoURL && <span className="text-red-700">Photo URL is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="name" placeholder="email" 
           {...register("email", { required: true })}
          className="input input-bordered"  />
             {errors.email && <span className="text-red-700">Email Field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" 
           {...register("password", { required: true,
             minLength: 6, maxLength: 20,
            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })}
          className="input 
          input-bordered"  />
     {errors.password?.type === "required" && (
        <p className="text-red-600">Password is required</p>
      )}

     {errors.password?.type === "minLength" && (
        <p className="text-red-600">Password  must be 6 Characters</p>
      )}

     {errors.password?.type === "maxLength" && (
        <p className="text-red-600">Password must be 20 Characters</p>
      )}

     {errors.password?.type === "pattern" && (
        <p className="text-red-600">Password must have one uppercase  one lowercase and special Characters</p>
      )}

          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
        
        <input className="btn bg-[#D1A054] text-white" type="submit" value="Sign-Up" />
        </div>
      </form>
      <p><small>Already have an account? <Link to='/login'> Login </Link> </small></p>
    </div>
  </div>
</div>
</>
    );
};

export default SignUp;