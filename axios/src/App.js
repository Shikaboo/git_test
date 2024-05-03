import './App.css';
import axios from 'axios';
import {Route, Routes} from 'react-router-dom';
import {useEffect, useState} from  'react';

import Head from './pile/infoHead';
import List from './pile/infoList';
import Write from './pile/infoWrite';
import Infodetail from './pile/infodetail';
import Infoedit from './pile/infoedit'

function App() {
  
  const [notiData, setNotiData] = useState([]);

  // axios를 이용한 방식 (const datas = res.data... => data )

  const getDatas = () => {
    axios.get('https://jsonplaceholder.typicode.com/comments')
    .then((res)=>{
      const datas = res.data.slice(0, 10).map((data)=>{
        return{
          notiTit : data.name,
          notiId : data.id,
          notiName : data.email,
          notiCont : data.body,
        }
      })
      setNotiData(datas)
    })
  }

  // fetch를 이용한 방식 

  // const getDatas = async ()=>{
  //   const res = await fetch('https://jsonplaceholder.typicode.com/comments')
  //     .then((res)=>res.json())
  //     const datas = res.slice(0, 10).map((data)=>{
  //       return{
  //         notiId : data.id,
  //         notiName : data.email,
  //         notiCont : data.body,
  //       }
  //     })
  //     setNotiData(datas)
  // }
  
  useEffect(()=>{
    getDatas()
  },[])
  // 빈 배열을 추가해줘야 정보가 계속 추가되지 않음

  function notiCreate(notiTit, notiName, notiCont){
    // console.log(notiTit, notiName, notiCont)
    axios.post('https://jsonplaceholder.typicode.com/comments',
                {notiTit, notiName, notiCont}
              ).then((res)=>{console.log(res.data)})
  }

  return (
    <div className="App">
      <Head />
      <main>
        <Routes>
          <Route path='/infoList' element={<List notiData={notiData} />} />
          <Route path='/infoWrite' element={<Write notiCreate={notiCreate} />}></Route>
          <Route path='/infodetail/:id' element={<Infodetail notiData={notiData} />}></Route>
          <Route path='/Infoedit/:id' element={<Infoedit notiData={notiData} />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
