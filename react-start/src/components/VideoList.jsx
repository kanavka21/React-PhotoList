
import { hover } from '@testing-library/user-event/dist/hover'
import Logo1 from '../img/photo1.jpg'
import Logo2 from '../img/photo2.jpg'
import Logo3 from '../img/photo3.jpg'
const videos = [
    {
        name: 'ꜰᴏʀᴇsᴛ', 
        id:1,
        photo:<img src = {Logo1} width="500" height = "400" alt = "logo"/>
    },
    {
        name: 'ʀɪᴠᴇʀ', 
        id:2,
        photo:<img src = {Logo2} width="500" height="400" alt = "logo"/>
    },
    {
        name: 'ᴄᴀᴍᴘɪɴɢ', 
        id:3,
        photo:<img src = {Logo3} width="500" height="400" alt = "logo"/>
    }
]

export function VideoList(){
    return (
        <div style = {{background:'linear-gradient(135deg, #4CE074, #31D631)', textAlign:'center'}}> 
            <h1>Photo List</h1>
            {
                videos.map((video) => {
                    return (
                        <div key={video.id}>
                            <h2>{video.name}</h2>
                            <p>{video.photo}</p>
                            <br></br>
                            <button style = {{marginLeft:20, padding:10, borderRadius:20}}>Like! 🖤</button>
                            <button style = {{marginLeft:40, padding:10, borderRadius:20}}>Disike! 💔</button>
                        </div>
                    )
                })
            }
        </div>
        
    )
}
