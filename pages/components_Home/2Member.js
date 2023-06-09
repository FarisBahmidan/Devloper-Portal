import Image from 'next/image'
import styles from '@/styles/scss/Home.module.scss'


// import the icons you need
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowDown,
    faeject

} from "@fortawesome/free-solid-svg-icons";
// import the icons you need

// imgs
import back3D from '../../public/back3D.png'
import Purple3DIcons from '../../public/Purple 3D Icons - Copy@2-1920x950 1.png'
import fox from '../../public/fox (1) 1.png'
import Hunter from '../../public/Hunter.jpg'
// imgs





export default function Member() {
    
    
    return (
        <>

            {/* Start Member */}
            <div className={styles.Member}>
                <Image className={styles.back3D} src={back3D} alt="Picture of the author" />

                <div className={styles.contactTitel}>
                    <div className={styles.title}>
                        <h1>Member</h1>
                        <div className={styles.discord}>
                            <button>Login Discord</button>
                        </div>
                    </div>

                    <Image className={styles.Purple3DIcons} src={Purple3DIcons} alt="Picture of the author" />
                </div>

                <div className={styles.container}>
                    <div className={styles.cards}>
                        <div className={styles.box}>
                            {/* <div className={styles.backer3D}>
                                    <Image className={styles.boxBackg} src={boxBackg} alt="Picture of the author" />
                                    <Image className={styles.boxBackg1} src={boxBackg1} alt="Picture of the author" />
                                </div> */}
                            <Image className={styles.MemberImg} src={fox} alt="Picture of the author" />
                            <div className={styles.names}>
                                <h1>ANAS</h1>
                                <p>script text Anas devloper  portal discord figma  ux ui script text Anas devloper  portal discord figma  ux ui</p>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.backer3D}>
                                {/* <Image className={styles.boxBackg} src={boxBackg} alt="Picture of the author" />
                                    <Image className={styles.boxBackg1} src={boxBackg1} alt="Picture of the author" /> */}
                            </div>
                            <Image className={styles.MemberImg} src={Hunter} alt="Picture of the author" />
                            <div className={styles.names}>
                                <h1>Hunter</h1>
                                <p>script text Anas devloper  portal discord figma  ux ui</p>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.backer3D}>
                                {/* <Image className={styles.boxBackg} src={boxBackg} alt="Picture of the author" />
                                    <Image className={styles.boxBackg1} src={boxBackg1} alt="Picture of the author" /> */}
                            </div>
                            <Image className={styles.MemberImg} src={fox} alt="Picture of the author" />
                            <div className={styles.names}>
                                <h1>devloper</h1>
                                <p>script text Anas devloper  portal discord figma  ux ui</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.more}>
                        <button>and more<FontAwesomeIcon className={styles.faArrowDown} icon={faArrowDown} style={{ zIndex: '100', }} /></button>
                    </div>
                </div>
            </div>
            {/* End Member */}

        </>
    )
}
