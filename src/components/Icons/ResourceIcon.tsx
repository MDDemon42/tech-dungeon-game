import { ReactElement } from "react";
import { Apple, Capsule, Gem, Gear } from 'react-bootstrap-icons';
import { UserResource } from "../../enums-and-interfaces/enums";
import styles from './Icons.module.css';
import userResources from "../../general/userResources";

function ResourceIcon(props: {
    resource: UserResource,
    price?: number
}) {
    const {price, resource} = props;
    const resourceIcons: Record<UserResource, ReactElement> = {
        [UserResource.core]: <Gear/>,
        [UserResource.food]: <Apple/>,
        [UserResource.gem]: <Gem/>,
        [UserResource.gene]: <Capsule/>,
        [UserResource.none]: <></>
    }

    return <div 
        title={(price ? Number(price) : '') + ' ' + userResources[resource]}
        className={styles.ResourceIcon}
    >
        {resourceIcons[resource]}
    </div>
}

export default ResourceIcon