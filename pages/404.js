
import Head from 'next/head'
import styles from '@/styles/scss/Layout/error/error.module.scss'



export default function NotFound() {

    return (
        <>
            <Head>
                <title>Developer portal</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <div className={styles.effect_container}>
                <div className={styles.effect}>
                    {/* {/* <span style="--i:23;"></span> */}
                    <span styles={"--i:43;"}></span>
                    <span styles={"--i:23;"}></span>
                    <span styles={"--i:1;"}></span>
                    <span styles={"--i:13;"}></span>
                    <span styles={"--i:63;"}></span>
                </div>
            </div>

            <div className={styles.error}>
                <span></span>
                <div className={styles.continer}>
                    <div className={styles.taitel}>
                        <h1 className={styles.mini}>Developer portal</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat a architecto tempora optio quamvitae, omnis earum veniam officia error?</p>
                    </div>
                    <div className={styles.error_404}>
                        <h1>404</h1>
                    </div>
                </div>
            </div>
        </>
    )
}
