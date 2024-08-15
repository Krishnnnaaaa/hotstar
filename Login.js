import styled from 'styled-components';
// import { doSignInWithEmailAndPassword ,doSignInWithGoogle } from '../firebase/auth';
// import { useAuth } from '../context/authcontent';
    
const Login = (props) =>{
    
    // function Login() {
    //   const [email, setEmail] = useState("");
    //   const [password, setPassword] = useState("");
    
    //   const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //       await signInWithEmailAndPassword(auth, email, password);
    //       console.log("User logged in Successfully");
    //       window.location.href = "/profile";
    //       toast.success("User logged in Successfully", {
    //         position: "top-center",
    //       });
    //     } catch (error) {
    //       console.log(error.message);
    
    //       toast.error(error.message, {
    //         position: "bottom-center",
    //       });
    //     }
    //   };
    

      
   
    return(
   
    <container>
   <content>
   <CTA>
    <CTALogoOne src="/images/cta-logo-one.svg" />
   <Signup> Get it all there</Signup>
   <Description> Get premier access to raya nd the last drag with a disney+ hotstar subscription</Description>
   <CTALogoTwo src=" /images/cta-logo-two.png" alt=""   />
   </CTA>
   <BGImage/>
    </content>
 </container>

    );    
};

const container = styled.section` 
overflow: hidden;
display: flex;
flex-direction: column;
text-align: center;
height: 100%;
`;



const content = styled.div`
margin-bottom: 10px;
width: 100%;
position: relative;
min-height: 100%;
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
padding: 80px 40px;
height:100%;
`;

const BGImage = styled.div`
height:100%;
background-position:top;
background-size:cover;
background-repeat:no-repeat;
background-image: url("/images/login-background.jpg");
position: absolute;
top: 0;
left: 0;
right:0;
z-index: -1;
justify-image:center;
`;


const CTA = styled.div`
padding:100px;
margin-bottom: 20px;
max-width: 650px;
flex-wrap: wrap;
display: flex;
flex-direction: column;
justify-content: center;
margin-top: 0;
align-items: center;
text-align: center;
margin-right: auto;
margin-left: auto;
margin-down: auto;
transition-timing-function: ease-out;
transition: opacity 0.2s;
width:100%;
`;



const CTALogoOne = styled.img`
margin-bottom: 12px;
max-width: 600px;
min-height: px ;
display: block;
width: 100%;
align-items: center;
text-align: center;
margin-right: auto;
margin-left: center;
margin-down: auto;


`;

const Signup = styled.a`
font-weight:bold;
color: #f9f9f9;
background-color: #0063e5;
text-align:center;
margin-right:auto;
margin-left:center;
border: none;
border-radius: 4px;
margin-bottom:12px;
width:100%;
letter-spacing:1.5px;
font-size:18px;
padding:16.5px 0;
border: 1px solid transparent;
border-radius: 4px;
&:hover {
    background-color: #0056b3;
}
`;

const Description = styled.p`
color: hsla(0,0%,95.3%,1)
font-size:11px;
margin: 24px;
line-height:1.5;
letter-spacing:1.5px;
text-align:center;
margin-right:auto;
margin-left:center;
`;

const CTALogoTwo = styled.img`
max-width:500px;
margin-bottom:20px;
display:inline-block;
vertical-align:bottom;
`;

export default Login;