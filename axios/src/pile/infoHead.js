import {Link} from 'react-router-dom';


const head = ()=>{
    return(
        <header>
            <div>
                <h1>
                    list header page
                </h1>
            </div>
            <div>
                <nav>
                    <ul>
                        <li><Link to='/infoList'>infoList</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default head;