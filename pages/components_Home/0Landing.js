import Image from 'next/image'
import styles from '@/styles/scss/Home.module.scss'
import Link from 'next/link'


// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {
    faArrowDown,
    faeject

} from "@fortawesome/free-solid-svg-icons";




// imgs
import log from '../../public/log.svg'

import Eff from '../../public/Eff.png'

import Group from '../../public/Group 10.png'
// imgs




export default function Landing() {


    return (
        <>

            {/* Start Landing */}
            <div className={styles.Landing}>
                <Image className={styles.Group} src={Group} alt="Picture of the author" />
                <div className={styles.container}>

                    <div className={styles.section}>
                        <div className={styles.hello}>
                            <h1 className={styles.Develope1r}>Welcome to <span>Developer portal</span> </h1>

                            <div className={styles.totel}>
                                <span className={`${styles.text} ${styles.first_text}`}>the <span className={styles.colo}>developer universe</span> is a simple  discord server </span>
                                <div className={styles.col}>
                                    <span className={`${styles.text} ${styles.spatiol} flex`}>specialized in </span>  <span className={`${styles.text} ${styles.sec_text} text-white`}> front end</span>
                                </div>
                                <h1 className={styles.ditels}>and we will be  more then happy to help you in these majors</h1>
                            </div>

                        </div>
                        <div className={styles.buttons}>
                            <button>JOIN</button>
                            <Link className={styles.join} href="#">Join the chat</Link>
                        </div>
                    </div>

                    <div className={styles.loggy}>

                        <div className={styles.logo}>
                            <Image className={styles.log} src={log} alt="Picture of the author" />
                            <Image className={styles.Eff} src={Eff} alt="Picture of the author" />
                        </div>

                    </div>

                </div>
            </div>
            {/* End Landing */}

        </>
    )
}
