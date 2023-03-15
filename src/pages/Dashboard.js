import Carddetails from "./DashboardComponents/Carddetails";
import './Dashboard.css';
import Buttonmenu from "./DashboardComponents/Buttonmenu";
import Header from "./HomeComponents/Header";
import Footer from "./HomeComponents/Footer";
import Convert from "./DashboardComponents/Convert";

function Dashboard(){
    return(
        <div id="Dashboard1">
<Header/>
<section id="Dashboard">
<div><Buttonmenu/>  </div>
<div id="rightcontentdash">
    <Carddetails/>
    <Convert/>
</div>
</section>
<Footer/>
</div>
    );
}

export default Dashboard;