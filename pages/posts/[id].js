import axios from 'axios';



export default function Posts({ post }) {
    return (
        <>

        </>
    )
}


export async function getServerSideProps(context) {

    try {
        const resol = await axios.get(`https://jsonplaceholder.typicode.com/posts/${context.query.id}`)
        return {
            props: { post: resol.data },
        }
    } catch (error) {
        console.log(error)
    }
}
