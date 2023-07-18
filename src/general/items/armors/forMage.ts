import { createItem } from ".."
import images from "../../../images/images"
import { InventoryPlaces } from "../../../types/interfaces"
import masteries from "../../masteries/masteries"

const item_apprenticeHat = createItem(
    'Apprentice hat', 'Hat to focus thoughts on studying',
    images.wizardItems.apprenticeHat,
    1, InventoryPlaces.head,
    masteries.mastery_scholarship,
    null, null, null, 1
)

const item_flyingCape = createItem(
    'Flying cape', 'Cape to make his owner fly',
    images.wizardItems.flyingCape,
    2, InventoryPlaces.back,
    null, null, null, null, 2
)

const item_magisterHat = createItem(
    'Magister hat', 'Hat to hide baldness',
    images.wizardItems.magisterHat,
    2, InventoryPlaces.head,
    masteries.mastery_magisterDegree,
    null, null, null, 2
)

const item_magisterRobe = createItem(
    'Magister robe', 'Robe to hide thinness',
    images.wizardItems.magisterRobe,
    2, InventoryPlaces.armor,
    masteries.mastery_magisterDegree,
    null, null, null, 2
)

const forMage = {
    item_apprenticeHat,
    item_flyingCape,
    item_magisterHat,
    item_magisterRobe
}

export default forMage