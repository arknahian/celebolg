'use client'
import styles from './createNewAccount.module.css';
import TextField from '@mui/material/TextField';
import Link from "next/link";

const CreateNewAccount = () => {

    return (
        <div className={styles.container}>
            <div className={styles.greeting}>
                <h2>
                    Welcome To Celebolg
                </h2>
                <p>Lets show the world who you are.</p>
            </div>

            <div className={styles.form}>
                <div><TextField label="@username" variant="outlined" margin="normal" fullWidth /></div>
                <div><TextField label="Email" variant="outlined" margin="normal" fullWidth /></div>
                <div><TextField label="Password" variant="outlined" margin="normal" fullWidth /></div>


                <Link href='verify-email' className='link'>
                    <div className='primary-button' style={{ margin: '10px auto' }}>
                        <span>Create An Account</span>
                    </div>
                </Link>

                <p>Already have an account? <Link href='/sign-in' className='link'><b>Sign in</b> </Link></p>
            </div>
        </div>
    );
};

export default CreateNewAccount;