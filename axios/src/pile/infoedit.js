import { useState } from  'react';
import { useParams, useNavigate } from  'react-router-dom';

const infoedit = ({notiData})=>{
    const {id} = useParams()
    const idx = id - 1
    // idx는 id는 화면에 1부터 출려되나 배열은 인덱스 0 이 1이기에 -1 을 해줘서 
    // 내가 원하는 배열을 컴퓨터가 찾을 수 있게 해줌
    const data = notiData[idx]
    
    const [editData, setEditData] = useState(
        notiData[idx]
        // {
        // notiTit : data.notiTit,
        // notiId : data.notiId,
        // notiName : data.notiName,
        // notiCont : data.notiCont,
        // }
    )
    // 변경 전 값을 가져옴

    console.log(editData)

    const {notiTit, notiId, notiName, notiCont} = editData;

    function editChange(e){
        setEditData({
            ...editData,
            [e.target.name] : e.target.value
        })
        // 변경할 값을 setEditData에 반영함. 
        // 아래에 버튼만 만들어서 추가하면 setEditData에 변경값이 저장됨.
    }

    return(
        <div key={notiId}>
            <h1>notiEdit</h1>
            <input name='notiTit' value={notiTit} onChange={editChange} />
            <input name='notiName' value={notiName} onChange={editChange} />
            <textarea name='notiCont' value={notiCont} onChange={editChange} />
        </div>
    )
}

export default infoedit

