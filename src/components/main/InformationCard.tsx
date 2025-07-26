
import s from './InformationCard.module.css';
import type { IconType } from 'react-icons';
type InformationCardProps = {
    text:string;
    icon:IconType;
    data:string;
    subText:string;
    color:string
}
const InformationCard = ({text, icon:Icon, data, subText, color}:InformationCardProps) => {

    return(
        <div className={s.container}>
            <div className={s.header}>
                <h2>{text}</h2>
                <Icon size={20} color={color==='white'?'#60a5fa':color}/>
            </div>
            <div style={{color:color}} className={s.data}>{data}</div>
            <div className={s.subText}>{subText}</div>
        </div>
    )
}

export default InformationCard;