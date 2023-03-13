import Carddetails from "./DashboardComponents/Carddetails";
import './Dashboard.css';
import Buttonmenu from "./DashboardComponents/Buttonmenu";
import Header from "./HomeComponents/Header";
import Footer from "./HomeComponents/Footer";
import Convert from "./DashboardComponents/Convert";

function Dashboard(){
    return(
        <>
<Header/>
<section id="Dashboard">
<Buttonmenu/>  
<div id="rightcontentdash">
    <Carddetails/>
    <Convert/>
    
</div>
</section>
<Footer/>
</>
    );
}

export default Dashboard;