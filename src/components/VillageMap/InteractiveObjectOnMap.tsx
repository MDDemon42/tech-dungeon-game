import { ReactElement } from "react";
import { HouseDoor } from 'react-bootstrap-icons';
import styles from './VillageMap.module.css';
import villageMapHouseStyles from './VillageMapHouses.module.css';

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
                    <div className={villageMapHouseStyles['house_' + index]}>
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