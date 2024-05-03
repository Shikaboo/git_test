import { useState, useRef } from  'react';
import { useNavigate } from  'react-router-dom';

const Write = ({notiCreate})=>{

    const [notiVal, setNotiVal] = useState({
        notiTit : '',
        notiName : '',
        notiCont : ''
    });
    const titRef = useRef();
    const nameRef = useRef();
    const txtRef = useRef();
    // const [txt1Leng, setTxtLeng] = useState(0);
    // const [txt2Leng, setTxt2Leng] = useState(0);
    // const [txt3Leng, setTxt3Leng] = useState(0);

    const navi = useNavigate();

    const{notiTit, notiName, notiCont} = notiVal;
    // 밑에 value로 넣기 위해 따로 선언

    function changeVal(e){
        setNotiVal({
            ...notiVal,
            [e.target.name] : e.target.value
        })
    }

    // function change2Val(e){
    //     setNotiVal({
    //         ...notiVal,
    //         [e.target.name] : e.target.value
    //     })
    //     setTxt2Leng(e.target.value.length);
    // }

    // function change3Val(e){
    //     setNotiVal({
    //         ...notiVal,
    //         [e.target.name] : e.target.value
    //     })
    //     setTxt3Leng(e.target.value.length);
    // }

    function notiSave(){
        if(notiTit.length < 3){
            alert('제목을 다시 작성하세요');
            titRef.current.focus();
        }else if(notiName.length < 2){
            alert('이름을 다시 작성하세요');
            nameRef.current.focus();
        }else if(notiCont.length < 10){
            alert('내용을 다시 작성하세요');
            txtRef.current.focus();
        }else{
            console.log(notiTit, notiName, notiCont)
            notiCreate(notiTit, notiName, notiCont);
            navi('/infoList')
        }
    }

    return(
        <div>
            <h2>list Write page</h2>
            <div>
                <div>
                    <h3></h3>
                    <label>제목</label>
                    <input type="text" name="notiTit" ref={titRef} value={notiTit} onChange={changeVal}></input>
                </div>
                <div>
                    <h3></h3>
                    <label>이름</label>
                    <input type="text" name="notiName" ref={nameRef} value={notiName} onChange={changeVal}></input>
                </div>
                <div>
                    <h3></h3>
                    <label>내용</label>
                    <textarea name='notiCont' ref={txtRef} value={notiCont} onChange={changeVal}></textarea>
                </div>
                <div>
                    <button onClick={notiSave}>저장</button>
                    <button >취소</button>
                </div>
            </div>
        </div>
    )
}

export default Write