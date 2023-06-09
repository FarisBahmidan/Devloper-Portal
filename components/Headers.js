import Image from 'next/image'
import styles from '@/styles/scss/Layout/mian.module.scss'


// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {
    faArrowDown,
    faeject

} from "@fortawesome/free-solid-svg-icons";

// imges
import logoo from '../public/myicon.ico'
// imges


export default function Headers() {
    return (
        <>


            <headers className={styles.headrests}>
                <div className={styles.container}>
                    <Image className={styles.logoo} src={logoo} alt="Picture of the author" />
                    <nav>
                        <ul>
                            <li><a className={styles.active} href='#Home'>Home </a></li>
                            <li><a href='#About'>About us</a></li>
                            <li><a href='#Member'>Member</a></li>
                            <li><a href='#Project'>Project</a></li>
                            <li><a href='#Contact'>Contact</a></li>
                        </ul>
                    </nav>


                </div>
            </headers>
        </>
    )
}
