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



import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
} from '@chakra-ui/react'

import Spline from '@splinetool/react-spline';


// imgs
import Component from '../../public/Component UI - Copy@2-1920x983 1.png'
// imgs




export default function About() {


    return (
        <>

            {/* Start AboutUS */}
            <div id="About" className={styles.AboutUS}>
                <div className={styles.title}>
                    <h1>About US</h1>
                </div>

                <div className={styles.container}>

                    <div className={styles.spletcontint}>
                        <div className={styles.beforeAbout}>
                            <div className={styles.afterAbout}>
                                <div className={styles.allContent}>

                                    <div className={styles.split}>
                                        <div className={styles.bullet}>
                                            <span className={`${styles.red} ${styles.active}`}></span>
                                            <div className={`${styles.tooltip} ${styles.active}`}>About
                                                <h6>.</h6>
                                            </div>
                                        </div>
                                        <div className={styles.bullet} >
                                            <span className={styles.yalow}></span>
                                            <div className={styles.tooltip}>show service
                                                <h6>.</h6>
                                            </div>
                                        </div>
                                        <div className={styles.bullet}>
                                            <span className={styles.grin}></span>
                                            <div className={styles.tooltip} >open a ticket
                                                <h6>.</h6>
                                            </div>
                                        </div>

                                    </div>
                                    {/* <span id="indicators" className={styles.split}>
                                        <ul>
                                            <li className={styles.active}></li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                    </span> */}

                                    <div className={styles.about}>
                                        <p><span>1</span>welcome to our discord server website.</p>
                                        <p><span>2</span>we are professional programmers and we specialize in the web development and mobile apps field.</p>
                                        <p><span>3</span>we are a platform for educating and teaching people and  presenting members projects  and their opinions.</p>
                                    </div>
                                    <div className={styles.projects}>


                                        <Accordion display={'flex'} flexDirection={'column'} justifyContent={'space-around'} h={'100%'} fontFamily={'Work Sans, sans-serif'} allowToggle>
                                        <AccordionItem>
                                            <h2>
                                                <AccordionButton>
                                                    <Box as="span" flex='1' textAlign='left'>
                                                        1 what can we do in websites and mobile
                                                    </Box>
                                                    <AccordionIcon />
                                                </AccordionButton>
                                            </h2>
                                            <AccordionPanel pb={4}>
                                                apps  ? our answer   to that question is that we offer many  services like a online store or a personal website or cv  and   appendices
                                            </AccordionPanel>
                                        </AccordionItem>

                                        <AccordionItem>
                                            <h2>
                                                <AccordionButton>
                                                    <Box as="span" flex='1' textAlign='left'>
                                                        2 what courses do we offer?
                                                    </Box>
                                                    <AccordionIcon />
                                                </AccordionButton>
                                            </h2>
                                            <AccordionPanel pb={4}>
                                                we  will offer many courses  as a beginning we will make HTML CSS and js  courses and others from  libraries  and frameworks
                                            </AccordionPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <h2>
                                                <AccordionButton>
                                                    <Box as="span" flex='1' textAlign='left'>
                                                        3 graduation projects
                                                    </Box>
                                                    <AccordionIcon />
                                                </AccordionButton>
                                            </h2>
                                            <AccordionPanel pb={4}>
                                                we will make you your graduation project for a reasonable price
                                            </AccordionPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <h2>
                                                <AccordionButton>
                                                    <Box as="span" flex='1' textAlign='left'>
                                                        4 upload your project for people to see
                                                    </Box>
                                                    <AccordionIcon />
                                                </AccordionButton>
                                            </h2>
                                            <AccordionPanel pb={4}>
                                                in our website you will be able to upload your website for people to see and rate
                                            </AccordionPanel>
                                        </AccordionItem>

                                    </Accordion>
                                </div>
                                <div className={styles.Theists}>
                                    <div className={styles.ticket}>
                                        <h1>how can we help you?</h1>
                                        <button>open a ticket </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <Image className={styles.Component} src={Component} alt="Picture of the author" />
            </div>

        </div >
            {/* End AboutUS */ }

        </>
    )
}
