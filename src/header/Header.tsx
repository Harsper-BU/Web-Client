import { useState } from 'react';
import s from './Header.module.css';
import { MdOutlineShield } from "react-icons/md";
import { LuEye } from "react-icons/lu";
import { IoWarningOutline } from "react-icons/io5";
import { BsGraphUp } from "react-icons/bs";
import { MdOutlineCameraAlt } from "react-icons/md";
import { formatNumber } from '../functions/formatFunction';
import InformationCard from '../components/main/InformationCard';
import { Outlet } from 'react-router-dom';
const Header = () => {
    const [cameraState, setCameraState] = useState(true);
    //통계 api요청 여기서
    return (
        <>
            <header className={s.container}>
                <div className={s.titleContainer}>
                    <MdOutlineShield size={40} color='#60a5fa' />
                    <div>
                        <h1>헬멧 감지 시스템</h1>
                        <div>실시간 오토바이 헬멧 착용 모니터링</div>
                    </div>
                </div>
                <div className={s.status}>
                    <button>실시간 영상</button>
                    <div style={{ background: cameraState ? 'green' : 'red' }} className={s.state}></div>
                    <div>시스템 정상</div>
                </div>
            </header>
            <main style={{ paddingTop: 19, paddingLeft: 80, paddingRight: 80 }}>
                <section style={{ display: 'flex', width: '100%', justifyContent: 'center', gap: 13 }}>
                    <InformationCard text='총 탐지 건수' icon={LuEye} data={formatNumber(1247)} subText='오늘 기준' color='white' />
                    <InformationCard text='위반 건수' icon={IoWarningOutline} data={formatNumber(1123)} subText='헬멧 미착용' color='#F87171' />
                    <InformationCard text='준수율' icon={BsGraphUp} data='92.8%' subText='전일 대비 +2.1%' color='#4ADE80' />
                    <InformationCard text='활성 카메라' icon={MdOutlineCameraAlt} data='1/4' subText='정상 작동 중' color='white' />
                </section>
                <section>
                    <Outlet />
                </section>
            </main>
        </>
    )
}

export default Header;