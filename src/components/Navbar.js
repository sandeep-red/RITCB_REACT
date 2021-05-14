import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import InfoIcon from '@material-ui/icons/Info';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import {useHistory,Link} from "react-router-dom";
import RITCB from "../assets/RITCB1.jpeg"
import {Navbar} from 'react-bootstrap'
import '../css/navbar.css'
// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//     marginLeft: theme.spacing(2),
//   },
//   butt:{
//       marginLeft: theme.spacing(2)
//   }
// }));

export default function Nav() {
  // const classes = useStyles();
  const history = useHistory();

  return (
    <Navbar className="navbarpage" bg="dark" expand="lg">
{/* <Navbar.Brand href="/">TalentCruz</Navbar.Brand> */}
<Link className='navbarpage_link' to='/'>
<div className="title_text">
<img src={RITCB} alt="" className="myimg" />
<h1 className="navbarpage_h1">RITCB</h1>
</div>
</Link>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
<div className="navbarpage_ul">
<Link className='navbarpage_link' to='/menu'>
<p className="navbarpage_p">
<RestaurantMenuIcon/>&nbsp;Menu
</p>
</Link> 
<Link className='navbarpage_link' to='/cart'>

<p className="navbarpage_p">
<ShoppingCartIcon/>&nbsp;Cart
</p>
</Link>
<Link className='navbarpage_link' to='/login'>
<p className="navbarpage_p">
<AccountCircleIcon/>&nbsp;Login 
</p>
</Link>
<Link className='navbarpage_link' to='/about'>
<p className="navbarpage_p">
<InfoIcon/>&nbsp;About
</p>
</Link>
<Link className='navbarpage_link' to='/contact'>
<p className="navbarpage_p">
<ContactSupportIcon/>&nbsp;Contact Us
</p>
</Link>
</div>
</Navbar.Collapse>
</Navbar>

)
}
