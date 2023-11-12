import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';

const AccountItems = () => {
    return (
        <>
            <MenuItem>
                <Avatar /> Profile
            </MenuItem>
            <MenuItem>
                <Avatar /> My account
            </MenuItem>
            <Divider />
            <MenuItem>
                <ListItemIcon>
                    <PersonAdd fontSize="small" />
                </ListItemIcon>
                Add another account
            </MenuItem>
            <MenuItem>
                <ListItemIcon>
                    <Settings fontSize="small" />
                </ListItemIcon>
                Settings
            </MenuItem>
            <MenuItem>
                <ListItemIcon>
                    <Logout fontSize="small" />
                </ListItemIcon>
                Logout
            </MenuItem>
        </>
    );
};

export default AccountItems;