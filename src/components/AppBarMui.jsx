import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { NavLink } from 'react-router-dom';

// Drawer width configuration
const drawerWidth = 240;

// Your updated navigation items
const navItems = [
  { name: 'Home', path: '/home' },
  { name: 'Resume', path: '/resume' },
  { name: 'Project', path: '/project' },
  { name: 'Contact', path: '/contact' }
];

export default function AppBarMui(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  // Toggle Drawer Function
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Mobile Drawer Component
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" 
      sx={{ my: 2,
          fontFamily: 'Roboto, sans-serif', 
            fontWeight: 'bold',
            fontSize: '24px',
            color: '#fff'
       }}>
      </Typography>
      <Button
        sx={{ color: '#000', width: '100%', mb: 2 }}
        component={NavLink}
        to="/"
        style={({ isActive }) => ({
          color: isActive ? 'blue' : '#000',
        })}
      >
        SIDDHARTH ANBUMANI
      </Button>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <Button
              sx={{ color: '#000', width: '100%' }}
              component={NavLink}
              to={item.path}
              style={({ isActive }) => ({
                color: isActive ? 'blue' : '#000',
              })}
            >
              <ListItemText primary={item.name} />
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      {/* AppBar Section */}
      <AppBar component="nav" sx={{
        backgroundColor: 'rgba(0,0,0)', // Transparent black
        backdropFilter: 'blur(10px)' // Blur effect
      }}>
        <Toolbar>
          {/* Siddharth Anbumani Button on Left for Desktop */}
          <Button
            sx={{ color: '#fff', mr: 2, display: { xs: 'none', sm: 'block' } }}
            component={NavLink}
            to="/"
            style={({ isActive }) => ({
              color: isActive ? 'red' : '#fff',
            })}
          >
            SIDDHARTH ANBUMANI
          </Button>
          
          {/* Mobile Menu Icon */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          
          {/* Desktop Navigation Items with NavLinks aligned to right */}
          <Box sx={{ flexGrow: 1 }}></Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button
                key={item.name}
                sx={{ color: '#fff' }}
                component={NavLink}
                to={item.path}
                style={({ isActive }) => ({
                  color: isActive ? 'red' : '#fff',
                })}
              >
                {item.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer Section */}
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Improves mobile performance
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>     
    </>
  );
}


// import React, { useState } from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import { NavLink } from 'react-router-dom';

// // Drawer width configuration
// const drawerWidth = 240;

// // Your updated navigation items
// const navItems = [
//   { name: 'Home', path: '/home' },
//   { name: 'Resume', path: '/resume' },
//   { name: 'Project', path: '/project' },
//   { name: 'Contact', path: '/contact' }
// ];

// export default function AppBarMui(props) {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = useState(false);

//   // Toggle Drawer Function
//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   // Mobile Drawer Component
//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
//       <Typography variant="h6" sx={{ my: 2 }}>
//         MUI Navbar
//       </Typography>
//       <List>
//         {navItems.map((item) => (
//           <ListItem key={item.name} disablePadding>
//             <Button
//               sx={{ color: '#000', width: '100%' }}
//               component={NavLink}
//               to={item.path}
//               style={({ isActive }) => ({
//                 color: isActive ? 'blue' : '#000',
//               })}
//             >
//               <ListItemText primary={item.name} />
//             </Button>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   const container = window !== undefined ? () => window().document.body : undefined;

//   return (
//     <>
//       {/* AppBar Section */}
//       <AppBar component="nav" sx={{
//         backgroundColor: 'rgba(0,0,0)', // Transparent black
//         backdropFilter: 'blur(10px)' // Blur effect
//       }}>
//         <Toolbar>
//           {/* Siddharth Anbumani Button on Left */}
//           <Button
//             sx={{ color: '#fff', mr: 2 }}
//             component={NavLink}
//             to="/"
//             style={({ isActive }) => ({
//               color: isActive ? 'red' : '#fff',
//             })}
//           >
//             SIDDHARTH ANBUMANI
//           </Button>
          
//           {/* Mobile Menu Icon */}
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>
          
//           {/* Desktop Navigation Items with NavLinks aligned to right */}
//           <Box sx={{ flexGrow: 1 }}></Box>
//           <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
//             {navItems.map((item) => (
//               <Button
//                 key={item.name}
//                 sx={{ color: '#fff' }}
//                 component={NavLink}
//                 to={item.path}
//                 style={({ isActive }) => ({
//                   color: isActive ? 'red' : '#fff',
//                 })}
//               >
//                 {item.name}
//               </Button>
//             ))}
//           </Box>
//         </Toolbar>
//       </AppBar>

//       {/* Mobile Drawer Section */}
//       <nav>
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Improves mobile performance
//           }}
//           sx={{
//             display: { xs: 'block', sm: 'none' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </nav>     
//     </>
//   );
// }

// import React, { useState } from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import { NavLink } from 'react-router-dom';

// // Drawer width configuration
// const drawerWidth = 240;

// // Your updated navigation items
// const navItems = [
//   { name: 'Home', path: '/home' },
//   { name: 'Resume', path: '/resume' },
//   { name: 'Project', path: '/project' },
//   { name: 'Contact', path: '/contact' }
// ];

// export default function AppBarMui(props) {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = useState(false);

//   // Toggle Drawer Function
//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   // Mobile Drawer Component
//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
//       <Typography variant="h6" sx={{ my: 2 }}>
//         Portfolio
//       </Typography>
//       <List>
//         <ListItem disablePadding>
//           <Button
//             sx={{ color: '#000', width: '100%' }}
//             component={NavLink}
//             to="/"
//             style={({ isActive }) => ({
//               color: isActive ? 'blue' : '#000',
//             })}
//           >
//             <ListItemText primary="SIDDHARTH ANBUMANI" />
//           </Button>
//         </ListItem>
//         {navItems.map((item) => (
//           <ListItem key={item.name} disablePadding>
//             <Button
//               sx={{ color: '#000', width: '100%' }}
//               component={NavLink}
//               to={item.path}
//               style={({ isActive }) => ({
//                 color: isActive ? 'blue' : '#000',
//               })}
//             >
//               <ListItemText primary={item.name} />
//             </Button>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   const container = window !== undefined ? () => window().document.body : undefined;

//   return (
//     <>
//       {/* AppBar Section */}
//       <AppBar component="nav" sx={{
//         backgroundColor: 'rgba(0,0,0)', // Transparent black
//         backdropFilter: 'blur(10px)' // Blur effect
//       }}>
//         <Toolbar>
//           {/* Mobile Menu Icon */}
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>

//           {/* App Title on Larger Screens */}
//           <Button
//             sx={{ color: '#fff', mr: 2, display: { xs: 'none', sm: 'block' } }}
//             component={NavLink}
//             to="/"
//             style={({ isActive }) => ({
//               color: isActive ? 'red' : '#fff',
//             })}
//           >
//             SIDDHARTH ANBUMANI
//           </Button>

//           {/* Desktop Navigation Items with NavLinks */}
//           <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
//             {navItems.map((item) => (
//               <Button
//                 key={item.name}
//                 sx={{ color: '#fff' }}
//                 component={NavLink}
//                 to={item.path}
//                 style={({ isActive }) => ({
//                   color: isActive ? 'red' : '#fff',
//                 })}
//               >
//                 {item.name}
//               </Button>
//             ))}
//           </Box>
//         </Toolbar>
//       </AppBar>

//       {/* Mobile Drawer Section */}
//       <nav>
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Improves mobile performance
//           }}
//           sx={{
//             display: { xs: 'block', sm: 'none' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </nav>     
//     </>
//   );
// }

// import React, { useState } from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import { NavLink } from 'react-router-dom';

// // Drawer width configuration
// const drawerWidth = 240;

// // Your updated navigation items
// const navItems = [
//   { name: 'Home', path: '/home' },
//   { name: 'Resume', path: '/resume' },
//   { name: 'Project', path: '/project' },
//   { name: 'Contact', path: '/contact' }
// ];

// export default function AppBarMui(props) {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = useState(false);

//   // Toggle Drawer Function
//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   // Mobile Drawer Component
//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
//       <Typography variant="h6" sx={{ my: 2 }}>
//         MUI Navbar
//       </Typography>
//       <List>
//         {navItems.map((item) => (
//           <ListItem key={item.name} disablePadding>
//             {/* ✅ Mobile NavLink Integration */}
//             <Button
//               sx={{ color: '#000', width: '100%' }}
//               component={NavLink}
//               to={item.path}
//               style={({ isActive }) => ({
//                 color: isActive ? 'blue' : '#000',
//               })}
//             >
//               <ListItemText primary={item.name} />
//             </Button>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   const container = window !== undefined ? () => window().document.body : undefined;

//   return (
//     <>
//       {/* AppBar Section */}
//       <AppBar component="nav" sx={{
//         backgroundColor: 'rgba(0,0,0)', // Transparent black
//         backdropFilter: 'blur(10px)' // Blur effect
//       }}>
//         <Toolbar>
//         <Button
      
//             sx={{ color: '#fff', mr: 2}}
//             component={NavLink}
//             to="/"
//             style={({ isActive }) => ({
//               color: isActive ? 'red' : '#fff',
//             })}
//           >
//             SIDDHARTH ANBUMANI
//           </Button>
//           {/* Mobile Menu Icon */}
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>
          
//           {/* App Title */}
//           <Typography
//             variant="h6"
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
//           >
            
//           </Typography>

//           {/* Desktop Navigation Items with NavLinks */}
//           <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
//             {navItems.map((item) => (
//               <Button
//                 key={item.name}
//                 sx={{ color: '#fff' }}
//                 component={NavLink}
//                 to={item.path}
//                 style={({ isActive }) => ({
//                   color: isActive ? 'red' : '#fff',
//                 })}
//               >
//                 {item.name}
//               </Button>
//             ))}
//           </Box>
//         </Toolbar>
//       </AppBar>

//       {/* Mobile Drawer Section */}
//       <nav>
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Improves mobile performance
//           }}
//           sx={{
//             display: { xs: 'block', sm: 'none' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </nav>     
//     </>
//   );
// }

