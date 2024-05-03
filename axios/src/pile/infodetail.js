import { useParams, useNavigate } from  'react-router-dom';

const infodetail = ({notiData})=>{
    const navigate = useNavigate();
    const {id} = useParams()
    const idx = id - 1
    const data = notiData[idx]
    console.log(data.notiName)

    function notiReturn(){
        navigate('/infoList')
    }

    function notiRemove(){
        // remove(id);
        navigate('/');
    }

    return(
        <div>
            <h1>Noti data detail</h1>
            <div>
                <p>{data.notiName}</p>
                <p>{data.notiCont}</p>
                <button onClick={notiRemove}>삭제</button>
                <button onClick={notiReturn}>돌아가기</button>
            </div>
        </div>
    )
}

export default infodetail