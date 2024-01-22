import { ReactElement } from "react";
import { Capsule, Gem, Gear } from 'react-bootstrap-icons';
import { UserResource } from "../../enums-and-interfaces/enums";
import styles from './Icons.module.css';
import userResources from "../../general/userResources";

function ResourceIcon(props: {
    resource: UserResource,
    price?: number
}) {
    const {price, resource} = props;
    const resourceIcons: Record<UserResource, ReactElement> = {
        [UserResource.gem]: <Gem/>,
        [UserResource.core]: <Gear/>,
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