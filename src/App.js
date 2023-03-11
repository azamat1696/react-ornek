import {useEffect, useState} from "react";

const App = () => {
    const [user,setUser] = useState(false);
    const [name, setName] = useState('Azamat')
    const [avatar, setAvatar] = useState(false)
    const headers =new Headers()
    headers.append('Content-Type','application/json')
    headers.append('Authorization','Bearar fdfsdfsdfdsfdsfsdfsdf2324')


    const formData = new FormData()
    formData.append('id',1)
    formData.append('title','Post deneme')
    formData.append('body','Text body')

    const addPost = data => {
        fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'POST',
            headers:{
               // 'Content-Type':'application/json'
            },
            body: formData
        })
    }
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUser(data))
        fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'Post',
            headers,
            body: JSON.stringify({
                id: 1,
                title: 'Azamat',
                body: 'Body text azamat'
            })
        })
        const data = {
            id: 1,
            title: 'Azamat',
            body: 'Body text azamat'
        }
        addPost(data)
    },[])

    const  submitHandle = e => {
        e.preventDefault()
        // let data = {
        //     name,
        //     avatar
        // }
        let formData = new FormData()
        formData.append('name',name)
        formData.append('avatar',avatar)
        fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'POST',
            headers:{
                 //'Content-Type':'application/json'
            },
            body: formData
        })
     }
    return(
        <>
            <form onSubmit={submitHandle}>
                <input type="text" name="name" value={name} onChange={event => setName(event.target.value)}/>
                <input type="file" name="avatar"   onChange={event => setAvatar(event.target.files[0])}/>
                <button type="submit" disabled={!name || !avatar}>submit</button>
            </form>
            <h1>Kullanicilar</h1>
            <h1>cdsdsdsdsd</h1>
             <ul>
                {user && user.map(item=>(
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </>
    )
}
export default App;
