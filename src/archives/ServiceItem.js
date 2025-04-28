
import style from '../styles/Archives.module.css';
import SubTitle from './SubTitle.js';
import DescriptionBlack from './DescriptionBlack.js';

const ServiceItem = ({ icon: Icon, subTitle,details}) => {
    return (
        <div className={style.serviceItem}>
            <Icon size={50} color="#007bff"/>
            <SubTitle text={subTitle} />
            <DescriptionBlack text={
                details.map((detail, index) => (
                <div key={index} className={style.serviceDetail}>{detail}</div>))
            }/>
        </div>
    )
}

export default ServiceItem;