import { UserResource } from "../../enums-and-interfaces/enums";
import images from "../../images/images";
import styles from './Icons.module.css';

function ResourceIcon(props: {
    resource: keyof typeof UserResource,
    price?: number
}) {
    const {price, resource} = props;

    const source = images.resourceIcons[resource]

    return <img 
        src={source} 
        alt={UserResource[resource]} 
        title={(price ? Number(price) : '') + UserResource[resource]}
        className={styles.ResourceIcon}
    />
}

export default ResourceIcon