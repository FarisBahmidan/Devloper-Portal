// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {
    faEnvelopeOpen,

} from "@fortawesome/free-solid-svg-icons";

// 1. import `ChakraProvider` component
import { ChakraProvider, Flex, VStack } from '@chakra-ui/react'
import { Container, FormControl, FormErrorMessage, FormLabel, Heading, Input, Textarea, Button, ButtonGroup } from '@chakra-ui/react'
import { useState } from 'react'

import Image from 'next/image'

// img
import Hunter from '../public/Hunter.jpg'
// img

import styles from '@/styles/scss/Layout/mian.module.scss'

import * as React from 'react'


const initvalues = { email: '', message: '' }
const initState = { values: initvalues }

export default function Footer() {

    const [state, setStats] = useState(initState)
    const [touched, setTouched] = useState({})

    const { values, isLoading } = state;

    const onBlur = ({ target }) => setTouched((prev) => ({
        ...prev,
        [target.name]: true
    }));

    const handleChange = ({ target }) => setStats((prev) => ({
        ...prev,
        values: {
            ...prev.values,
            [target.name]: target.value
        }
    }));

    const onSubmit = async () => {
        setStats((prev) => ({
            ...prev,
            isLoading: true,
        }))
    }

    return (
        <>
            <footer className={styles.footers}>
                <div id="Contact" className={styles.ContactContinuer}>
                    <ChakraProvider>
                        <VStack className={styles.Content} >
                            <Container className={styles.Container}>
                                <FormControl className={styles.FormInputs} isRequired isInvalid={touched.email && !values.email} mt={5}>
                                    <Input className={styles.inputs} placeholder="Enter your email" type='email' name='email' value={values.email} onChange={handleChange} onBlur={onBlur} />
                                </FormControl>
                                <FormControl className={styles.FormInputs} isRequired isInvalid={touched.message && !values.message}>
                                    <Textarea className={styles.inputs} border={"none"} type='text' name='message' placeholder="message" errorBorderColor='red.300' value={values.message} onChange={handleChange} onBlur={onBlur} mb={10} />
                                    <FormErrorMessage>Required</FormErrorMessage>
                                </FormControl>
                            </Container>
                            <Container className={styles.ContainersButton}>
                                <FontAwesomeIcon className={styles.faEnvelopeOpen} icon={faEnvelopeOpen} />
                                <Button className={styles.Button} variant='outline' colorScheme='blue' isLoading={isLoading} disabled={!values.message || !values.email} onClick={onSubmit}>submit</Button>
                            </Container>

                        </VStack>
                    </ChakraProvider>
                </div>

                <div className={styles.containerF}>
                    <div className={styles.footContinuer}>
                        <div className={styles.link}>
                            <h1>Link</h1>
                            <ul>
                                <li><a href='#'>Home </a></li>
                                <li><a href='#'>About us</a></li>
                                <li><a href='#'>Packages</a></li>
                                <li><a href='#'>Contact</a></li>
                            </ul>
                        </div>
                        <div className={styles.Others}>
                            <h1>Others</h1>
                            <ul>
                                <li><a href='#'>Home </a></li>
                                <li><a href='#'>About us</a></li>
                                <li><a href='#'>Packages</a></li>
                                <li><a href='#'>Contact</a></li>
                            </ul>
                        </div>
                        <div className={styles.Social}>
                            <h1>Social</h1>
                            <p>Follow us on Social Media</p>
                            <div className={styles.socialFollow}>
                                <div className={styles.teams}>
                                    <Image className={styles.Hunter} src={Hunter} alt="Picture of the author" />
                                    <h5>Hunter</h5>
                                </div>
                                <div className={styles.teams}>
                                    <Image className={styles.Hunter} src={Hunter} alt="Picture of the author" />
                                    <h5>Hunter</h5>
                                </div>
                                <div className={styles.teams}>
                                    <Image className={styles.Hunter} src={Hunter} alt="Picture of the author" />
                                    <h5>Hunter</h5>
                                </div>
                                <div className={styles.teams}>
                                    <Image className={styles.Hunter} src={Hunter} alt="Picture of the author" />
                                    <h5>Hunter</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.CopyRight}>
                        <h1>Devloper Portal</h1>
                        <span>CopyRight © Devloper portal</span>
                        <span>Engilsh</span>
                    </div>
                </div>
            </footer>
        </>
    )
}
