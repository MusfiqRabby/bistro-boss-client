import UseAuth from "../../../hooks/UseAuth";

const UserHome = () => {
  
  const {user} = UseAuth();

    return (
        <div>
           <h2 className="text-3xl">Hi, Welcome</h2> 

        {
            user?.displayName ? user.displayName : 'Back'
        }

        </div>
    );
};

export default UserHome;