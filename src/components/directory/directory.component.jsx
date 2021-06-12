import React from 'react';
//import HomePage from '../../pages/homepage/homepage.component';
//import '../menu-item/menu-item.component';
import MenuItem from '../menu-item/menu-item.component';
import './directory.style.scss';

//import './directory.style.scss';

class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [
                {
                  title: 'Hats',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  linkUrl:'Hats'
                  
                },
                {
                  title: 'Jackets',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  linkUrl:''
                },
                {
                  title: 'Sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl:''
                },
                {
                  title: 'Womens',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl:''
                  
                },
                {
                  title: 'Mens',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl:''
                }
              ]
            // sections: [
            // {
            //     title: 'hats',
            //     imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                
            //     id: 1

            // },
            // {
            //     title: 'Jacket',
            //     imageUrl: 'https://image.shutterstock.com/image-photo/blank-template-black-down-jacket-260nw-1239023359.jpg',
            //     id: 2
            // },
            // {
            //     title: 'Shoes',
            //     imageUrl: 'https://media.istockphoto.com/photos/sport-shoes-on-isolated-white-background-picture-id956501428?k=6&m=956501428&s=612x612&w=0&h=cBcBHYySQGpV5kHPbcXUnpXrgqXrNs0s7cahHBCDsbA=',
            //     id: 3
            // },
            // {
            //     title: 'Womens',
            //     imageUrl: 'https://previews.123rf.com/images/ivastasya/ivastasya1708/ivastasya170800008/85253067-set-of-stylish-clothes-collection-of-women-s-clothing.jpg',
            //     size: 'large',
            //     id: 4
            // },
            // {
            //     title: 'Mens',
            //     imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            //     size: 'large',
            //     id: 5
            // }]
        };


    }
    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({  id, ...otherSectionProps }) => (<MenuItem key={id} {...otherSectionProps} />))
                }
            </div>
        );
    }


}

export default Directory;