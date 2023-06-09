import axios from 'axios';







export default function Posts() {

    axios({
        url: '/todosuu',
        baseURL: 'https://jsonplaceholder.typicode.com',
        method: 'get',

    })
        .then((response) => {
            console.log(response.status);
        }).catch((err) => {
            console.log(err);
        })
        .then(() => {
            console.log('End http request');
        })


    return (
        <>
            <h2>posts page</h2>
        </>
    )
}










// export default function Posts({ posts }) {
//     return (
//         <>
//             <h2>posts page</h2>
//             <div>
//                 {posts.map((posts => {
//                     return <h1>:: {posts.title}</h1>
//                 }))}
//             </div>
//         </>
//     )
// }


// export async function getStaticProps() {

//     try {
//         const resol = await axios.get('https://jsonplaceholder.typicode.com/posts');
//         console.log(resol.data)
//         return {
//             props: { posts: resol.data },
//         }
//     } catch (error) {
//         console.log(error)
//     }
// }
