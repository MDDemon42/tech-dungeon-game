import { createItem } from "..";
import images from "../../../images/images";
import { InventoryPlaces } from "../../../types/interfaces";
import masteries from "../../masteries/masteries";

const item_apprenticeRod = createItem(
    'Apprentice rod', 'Rod to help concentrate magic',
    images.wizardItems.apprenticeRod,
    1, InventoryPlaces.bothHands,
    masteries.mastery_scholarship,
    null, null, null, 2
)

const item_magisterScepter = createItem(
    'Magister scepter', 'Scepter to lean on between casting spells',
    images.wizardItems.magisterScepter,
    2, InventoryPlaces.bothHands,
    masteries.mastery_magisterDegree,
    null, null, null, 3
)

const magic = {
    item_apprenticeRod,
    item_magisterScepter
}

export default magic