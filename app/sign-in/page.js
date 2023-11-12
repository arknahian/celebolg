'use client'
import styles from '../create-new-account/createNewAccount.module.css';
import TextField from '@mui/material/TextField';
import Link from "next/link";

const SignIn = () => {
    return (
        <div className={styles.container}>
            <div className={styles.greeting}>
                <h2>
                    Welcome To Celebolg
                </h2>
                <p>Lets show the world who you are.</p>
            </div>

            <div className={styles.form}>
                <div><TextField label="username or email" variant="outlined" margin="normal" fullWidth /></div>
                <div><TextField label="Password" variant="outlined" margin="normal" fullWidth /></div>


                <div className='primary-button' style={{ margin: '10px auto' }}>
                    <span>Sign In</span>
                </div>

                <p>Don't have an account? <Link href='/create-new-account' className='link'><b>Create an account</b> </Link></p>
            </div>
        </div>
    );
};

export default SignIn;