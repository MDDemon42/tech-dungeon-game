import { useDispatch, useSelector } from "react-redux";
import { UserResource, GameScreens } from "../../enums-and-interfaces/enums";
import { IManageItemsProps, IStore } from "../../enums-and-interfaces/interfaces";
import items from "../../gameScreens/Market/items";
import { createNoItem } from "../../helpers/emptyEssencesCreators";
import gameSquad from "../../redux/slices/gameSquad";
import ResourceIcon from "../Icons/ResourceIcon";

function BackpacksScreenItemButton(props: IManageItemsProps) {
    const {item, itemIndex} = props;

    const gameScreen = useSelector((store: IStore) => store.gameScreen.screen);
    
    const dispatch = useDispatch();

    const sellListener = (props: IManageItemsProps) => {
        dispatch(gameSquad.actions.sellItem(props));
    }

    const utilizeListener = (itemIndex: number) => {
        dispatch(gameSquad.actions.utilizeRemains(itemIndex));
    }

    const nothing = createNoItem().name;

    let buttonProps = {
        listener: () => sellListener(props),
        resource: UserResource.gem,
        price: item.cost,
        disabled: gameScreen !== GameScreens.market || item.name === nothing
    };

    if (item.name === items.bigResources.beastRemains.name ||
        item.name === items.bigResources.insectoidRemains.name ||
        item.name === items.bigResources.reptiloidRemains.name ||
        item.name === items.bigResources.dragonRemains.name
    ) {
        buttonProps.listener = () => utilizeListener(itemIndex);
        buttonProps.resource = UserResource.gene;
        buttonProps.price = item.cost;
        buttonProps.disabled = gameScreen !== GameScreens.mutaLab
    }

    return <button 
        onClick={buttonProps.listener}
        disabled={buttonProps.disabled}
    >
        <ResourceIcon resource={buttonProps.resource} price={buttonProps.price}/>
    </button>
}

export default BackpacksScreenItemButton