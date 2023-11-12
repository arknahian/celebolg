import Link from "next/link";
import styles from './verifyEmail.module.css';
import TextField from '@mui/material/TextField';

const VerifyEmail = () => {
    return (
        <div className={styles.container}>
            <TextField label="verification code" variant="outlined" margin="normal" fullWidth />
            <Link href='profile-setup' className='link'>
                <div className='primary-button' style={{ margin: '10px auto' }}>
                    <span>Verify</span>
                </div>
            </Link>
        </div>
    );
};

export default VerifyEmail;