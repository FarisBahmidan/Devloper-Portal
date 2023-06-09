import Footer from "./Footer"
import Headers from "./Headers"
import styles from '@/styles/scss/Home.module.scss'


export default function MainLayout(props) {
    return (
        <>
            <Headers />
            {props.children}
            <Footer />
        </>
    )
}
