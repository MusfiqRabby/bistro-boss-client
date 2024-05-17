
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import useMenu from "../../../hooks/UseMenu";
import MenuItem from "../../../Shear/MenuItem/MenuItem";


const PopularMenu = () => {
   
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')
   
    return (
        <section className="mb-12">
            <SectionTitle
            heading="FROM OUR MENU"
            subHeading="Popular Item"
            ></SectionTitle>
                <div className=" grid md:grid-cols-2 gap-10">
                    {
                        popular.map(item => <MenuItem 
                        key={item._id}
                        item={item}>
                        </MenuItem> )
                    }
                </div>
               <div className="justify-end">
               <button className="btn btn-outline border-0 border-b-4 mt-4">View Full Menu</button>
               </div>
        </section>
    );
};

export default PopularMenu;