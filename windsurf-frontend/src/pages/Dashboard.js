import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { 
  Container, 
  Typography, 
  Button, 
  Box, 
  Paper,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from '@mui/material';
import {
  Person as PersonIcon,
  Email as EmailIcon,
  AdminPanelSettings as AdminIcon,
  Logout as LogoutIcon
} from '@mui/icons-material';

const Dashboard = () => {
  const { user, logout, isAdmin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Welcome to SageIt
          </Typography>
          <Button 
            variant="outlined" 
            color="error" 
            startIcon={<LogoutIcon />}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Box>

        <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
          <Typography variant="h6" gutterBottom>User Information</Typography>
          <Divider sx={{ mb: 2 }} />
          <List>
            <ListItem>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText 
                primary="Username" 
                secondary={user.username} 
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>
              <ListItemText 
                primary="Email" 
                secondary={user.email} 
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AdminIcon />
              </ListItemIcon>
              <ListItemText 
                primary="Role" 
                secondary={isAdmin() ? 'Administrator' : 'User'} 
              />
            </ListItem>
          </List>
        </Paper>

        {isAdmin() && (
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>Admin Panel</Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography>Admin-only content goes here</Typography>
            <Button 
              variant="contained" 
              color="primary" 
              sx={{ mt: 2 }}
            >
              Manage Users
            </Button>
          </Paper>
        )}
      </Box>
    </Container>
  );
};

export default Dashboard;
