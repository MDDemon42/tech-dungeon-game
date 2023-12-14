import { ReactElement } from "react";
import { HouseDoor } from 'react-bootstrap-icons';
import styles from './index.module.css';
import housesStyles from './houses.module.css';

function InteractiveItemOnMap(props: {
    listener: () => void,
    item: string,
    title: string, 
    icon: ReactElement,
    houses: number[]
}) {
    const {listener, item, title, icon, houses} = props;

    return (
        <div id={item}>
            {
                houses.map(index => (
                    <div className={housesStyles['house_' + index]}>
                        <HouseDoor size={15}/>
                    </div>
                ))
            }
            <button 
                onClick={listener} 
                className={styles['VillageMap_icon_' + item]}
                title={title}
            >
                {icon}
            </button>
        </div>
    )
}

export default InteractiveItemOnMap