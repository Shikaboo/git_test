import { Link } from "react-router-dom";


const list = ({notiData})=>{
    return(
        <div>
            <div>
                <p>list page</p>
            </div>
            <ul>
                <li><Link to='/infoWrite'>infoWrite</Link></li>
            </ul>
            <div>
                <ul>
                    {notiData.map((noti)=>
                        <li key={noti.notiId}>
                            <Link to={`/infodetail/${noti.notiId}`}>{noti.notiName}</Link>
                            <Link to={`/infoedit/${noti.notiId}`}>수정</Link>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default list