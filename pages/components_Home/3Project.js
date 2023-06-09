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
import Group from '../../public/Group 10.png'

import BoxBackg from '../../public/BoxBackg.png'
// imgs


const projectCard = [
    {
        name: 'Fares',
        ditels: 'Scipt text ans Devloper Portal Discord Figma UX UI',
        Groupimg: Group,
        BoxBackgImg: BoxBackg,
    },
    {
        name: 'Hunter',
        ditels: 'Scipt text ans Devloper Portal Discord Figma UX UI',
        Groupimg: Group,
        BoxBackgImg: BoxBackg,
    },
    {
        name: 'Yofe',
        ditels: 'Scipt text ans Devloper Portal Discord Figma UX UI',
        Groupimg: Group,
        BoxBackgImg: BoxBackg,
    },
    {
        name: 'Xsayfex',
        ditels: 'Scipt text ans Devloper Portal Discord Figma UX UI',
        Groupimg: Group,
        BoxBackgImg: BoxBackg,
    },
]

export default function Project() {


    return (
        <>

            {/* Start Project */}
            <div className={styles.Project}>
                <div className={styles.title}>
                    <h1>Project</h1>
                </div>

                <div className={styles.container}>
                    <div className={styles.cards}>

                        {projectCard.map((Value, i) => {
                            return <div key={i} className={styles.box}>
                                <span>
                                    <Image className={styles.sp} src={Value.Groupimg} alt="Picture of the author" />
                                </span>
                                <Image className={styles.Group} src={Value.BoxBackgImg} alt="Picture of the author" />
                                <div className={styles.thsNam}>
                                    <h1>{Value.name}</h1>
                                    <p>{Value.ditels}</p>
                                </div>
                            </div>
                        })}


                    </div>
                    <div className={styles.more}>
                        <button>and more<FontAwesomeIcon className={styles.faArrowDown} icon={faArrowDown} style={{ zIndex: '100', }} /></button>
                    </div>
                </div>

            </div>
            {/* End Project */}

        </>
    )
}
