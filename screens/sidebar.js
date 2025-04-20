import React,{useState} from "react";
// import css from "./sidebar.css"
//import logo from '../ui/Logo.svg';
function Sidebar()
{
    const [nav,setNav] = useState([
        { label: "Home", slug:"/", icon: ""},
        { label: "About", slug:"/", icon: ""},
        { label: "Categories", slug:"/", icon: ""},
        { label: "Feedback", slug:"/", icon: ""},
    ])
    const [currentPage,setCurrentPage]= useState("/");
    var navigation=[];
    for(let i=0;i<nav.length;i++){
        navigation.push(
            <li key={"nav-" + i + "-" + nav[i].slug}>
                <a href={nav[i].slug} class={"link noul align c333" + (currentPage == nav[i].slug? "on": "")}>
                    <div class={"ico s20" + nav[i].icon}/>
                    <h2 class="lbl s20" >{nav[i].label}</h2>
                </a>
            </li>
        )
    }
    return(
        <div className="sidebar">
            <div>
            <h1> sOlution</h1>
            </div>
            <ul class="nav">
                {navigation}
            </ul>
            
    
        </div>
           
                 
 
    )
}
export default Sidebar;