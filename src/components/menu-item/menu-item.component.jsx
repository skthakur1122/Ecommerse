import React from 'react'
import './menu-item.style.scss';
import {withRouter} from 'react-router-dom';

//import './directory.style.scss';
//import Directory from '../../components/directory/directory.component';

// function MenuItemComponent(props) {
//     console.log(props, 'Propsssssssssss')
//     return (
//         <>

//             <div style={{backgroundImage:`url('${props.imageUrl}')`}} className='menu-iteam'>
//             <div className='content'>
//                 <h1 className='title'> {props.title}</h1>

//                 <span className='sub-title'>SHOPNOW</span>
//             </div>
//         </div>
//         </>

//     )//
// }

//export default MenuItemComponent


// import React from 'react';
// //import HomePage from '../directory/directory.component';

const MenuItem = ({title, imageUrl, size, history, linkUrl, match  }) => (

    <div 
    
    className= {`${size} menu-iteam`} onClick={() => history.push(`${match.url}${linkUrl}`)}> 
      <div
      className='background-image'
      
      style={{backgroundImage:`url('${imageUrl}')`}} 
      
      />

 

    <div className='content'>
        <h1 className='title'> {title.toUpperCase()}</h1>
        <span className='sub-title'>SHOP NOW</span>
    </div>
        </div> 
    // <div 
    
    // className= {`${size} menu-iteam`}> 
    //   <div
    //   className='background-image'
      
    //   style={{backgroundImage:`url('${imageUrl}')`}} 
      
    //   />

 

    // <div className='content'>
    //     <h1 className='title'> {title.toUpperCase()}</h1>
    //     <span className='sub-title'>SHOP NOW</span>
    // </div>
    //     </div> 
    
);

// const MenuItem = ({ title, imageUrl, size }) => (
//     <div 
//     style={{
//         backgroundImage:`url('${imageUrl}')`}} 
//         className={`${size} menu-iteam`}>
      
//       <div className='content'>
//         <h1 className='title'>{title}</h1>
//         <span className='subtitle'>SHOP NOW</span>
//       </div>
//     </div>
//   );
 export default withRouter(MenuItem); 