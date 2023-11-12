import styles from './profileSetup.module.css';
import TextField from '@mui/material/TextField';
import Link from "next/link";
import Avatar from '@mui/material/Avatar';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';


const ProfileSetup = () => {
    return (
        <div className={styles.container}>
            <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 85, height: 85 }} />
                <br />
            <FormControl>
                <FormLabel sx={{textAlign: 'center'}}>Account Type</FormLabel>
                <RadioGroup row name="row-radio-buttons-group">
                    <FormControlLabel value="personal" control={<Radio />} label="personal" />
                    <FormControlLabel value="business" control={<Radio />} label="business" />
                </RadioGroup>
            </FormControl>
            <TextField label="Your Name" variant="outlined" margin="normal" fullWidth />

            <FormControl fullWidth margin="normal">
                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                <Select label="Gender">
                    <MenuItem value={10}>Male</MenuItem>
                    <MenuItem value={20}>Female</MenuItem>
                    <MenuItem value={30}>Others</MenuItem>
                </Select>
            </FormControl>

            <TextField label="@username" variant="outlined" margin="normal" fullWidth />
            <TextField label="email" variant="outlined" margin="normal" fullWidth />
            <TextField label="Category" variant="outlined" margin="normal" fullWidth />
            <Link href='profile-setup' className='link'>
                <div className='primary-button' style={{ margin: '10px auto' }}>
                    <span>Create Account</span>
                </div>
            </Link>
        </div>
    );
};

export default ProfileSetup;