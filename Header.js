import styled from "styled-components"
// import {useDispatch,useSelector} from "react-redux";
import{useNavigate} from "react-router-dom"
import { GoogleLogin } from "@react-oauth/google";
import { useGoogleLogin } from '@react-oauth/google';


// import { selectUserName,setUserLoginDetails, selectUserPhoto } from "../features/user/Userslice";



const Header = (props) =>{
//     <GoogleLogin
//   onSuccess={credentialResponse => {
//     console.log(credentialResponse);
//   }}
//   onError={() => {
//     console.log('Login Failed');
//   }}
// />;
// const dispatch = useDispatch()
// const history = useNavigate()
// const userName = useSelector(selectUserName)
// const userPhoto = useSelector(selectUserPhoto)


    

//      const setUser = (user)=>{
// dispatch(setUserLoginDetails({
//     name: user.displayname,
//     email: user.email,
//     photo: user.photoURL

// }))
//      }
    return (
    <Nav>
        <Logo>
            <img src='/images/logo.svg' alt='Disney+'/>
        </Logo>
        
        <NavMenu>
            <a href='Home'>
            <img src ='/images/home-icon.svg' alt='Home'/>
            <span>HOME</span>
       </a>
       <a href='Search'>
            <img src ='/images/search-icon.svg' alt='Search'/>
            <span>SEARCH</span>
       </a>
       <a href="Watchlist" >
            <img src ='/images/watchlist-icon.svg' alt='Watchlist'/>
            <span>WATCHLIST</span>
       </a>
       <a href="Original">
            <img src ='/images/original-icon.svg' alt='Original'/>
            <span>ORIGINAL</span>
       </a>
       <a href="Movie">
            <img src ='/images/movie-icon.svg' alt='Movie'/>
            <span>MOVIE</span>
       </a>
       <a href="Series">
            <img src ='/images/series-icon.svg' alt='Series'/>
            <span>SERIES</span>
       </a>
        </NavMenu>
        <Login onClick={() => Login()}>Login</Login>; .   {/*onClick={handleAuth */}
    </Nav>
);
};

const Nav= styled.nav`
position: fixed;
top: 0px;
left: 0px;
right:0px;
height: 80px;
background-color: #090b13;
display: flex;
justify-content: space-between;
align-iems:center;
padding: 0 36px;
letter-spacing: 16px;
z-index:3;

`;

const Logo = styled.a`
padding:0;
width:100px;
margin-top:4px;
max-height:80px;
font-size:0;
display:inline-block;
img{
    display: block;
    width:100px;

}
`;

const NavMenu = styled.div`
align-items:center;
display: flex;
flex-flow: row nowrap;
height:100%;
justify-content: flex-end;
margin: 0px;
padding:0px;
position: relative;
margin-right:auto;
margin-left:20px;

a{
    display: flex;
    align-items:center;
    padding:0 14px;


img{
height: 20px;
min-width:20px;
width:20px;
z-index:auto;

}
span{
    color: rgb(249,249,249);
    font-size:13px;
    letter-spacing:1.42px;
    line-height: 1.08;
    padding: 2px 0px;
    white-spacing:nowrap;
    position: relative;
}
&:before {
    
    display: block;
    background-color: rgb(249,249,249);
border-radius: 0px 0px 4px 4px;
bottom: -6px;
content:" ";
height:2px;
left:0px;
opacity:0;
position: absolute;
right: 0px;
transform-origin: left center;
transform: scaleX(0);
transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94)
visibility: visible;
width: auto;

}
}
&:hover{
    span: before{
        transform:scaleX(1);
        visibility: visible;
        opacity:1 !important;

    }
}
${'' /* @media (max-width:768px){
    display:none;
} */}

`;

const Login = styled.a`
background-color: rgba(0,0,0,0.6);
border: none;
padding: 19px 20px;
margin: 4px 2px;
text-transform:uppercase;
letter-spacing:1px;
border:1px solid #f9f9f9;
border-radius: 2px;
transition: all 0.2s ease 0s;

&:hover{
    background-color: #f9f9f9;
    color:#000;
border-color: transparent;
}
`;
export default Header;