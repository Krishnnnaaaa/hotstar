import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import Viewers from './Viewers'
import Recommends from "./Recommends";
import NewDisney from "./NewDisney";
import Trending from "./Trending";
import Originals from "./Originals";
// import{useEffect} from 'react';
// import{useDispatch,useSelector}from 'react-redux';
// import db from '../firebase' ;
// import { setMovies } from "../features/user/movies/movieSlice";
// import {selectUserName} from '../features/user/Userslice'

const Home = (props) =>{
//     const dispatch = useDispatch();
//     const userName = useSelector(selectUserName);
//     let recommends =[];
//     let newDisney = [];
//     let trending = [];
//     let originals = [];
// // useEffect(()=>{
//     db.collection('movies').onSnapshot((snapshot)=>{
//         snapshot.docs.map((doc) => {
//             switch(doc.data().type) {
//                 case 'recommend':
//                     recommends.push({id:doc.id,...doc.data()})
//                     break;
//                     case 'new':
//                         newDisneys.push({id:doc.id,...doc.data()})
//                         break;
//                         case 'original':
//                         originals.push({id:doc.id,...doc.data()})
//                         break;
//                         case 'trending':
//                         trending.push({id:doc.id,...doc.data()})
//                         break;
                       
    
            
    //         }
    //     });

    // });
//     dispatch(setMovies({
// recommend: recommends,
// newDisney:newDisney,
// original:originals,
// trending:trending
//     })
// )
// },[userName]);

    return <Container>
    <ImageSlider/>
    <Viewers/>
    <Recommends/>
    <NewDisney/>
    <Originals/>
    <Trending/>
    </Container>
}

const Container =  styled.main`
position: relative;
min-height:calc( 350px);
overflow-x:hidden;
display: block;
top:72px;
padding: 0 calc(3.5em + 5px);

&:after{
    background:url('/images/home-background.png')center center / cover no-repeat fixed;
content: '';
position:absolute;
inset:0px;
opacity:1;
z-index:-1;

}
`

export default Home;
