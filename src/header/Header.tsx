import { useState } from 'react';
import s from './Header.module.css';
const Header = () => {
    const [cameraState] = useState(true);
    return (
        <header className={s.container}>
            <div className={s.titleContainer}>
                <span>아이콘</span>
                <div>
                    <h1>헬멧 감지 시스템</h1>
                    <div>실시간 오토바이 헬멧 착용 모니터링</div>
                </div>
            </div>
            <div className={s.status}>
                <div style={{background:cameraState?'green':'red'}} className={s.state}></div>
                <div>시스템 정상</div>
            </div>
        </header>
    )
}

export default Header;