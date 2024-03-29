import { createMutation } from ".";
import { InventoryPlace } from "../../../enums-and-interfaces/enums";
import images from "../../../images/images";
import abilities from "../../../general/abilities";

const acidSpit = createMutation(
    [
        chrome.i18n.getMessage('acid_spit'), 
        chrome.i18n.getMessage('acid_spit_mutation_description'),
        images.mutantEvolvings.acidSpit
    ],
    [
        1, [InventoryPlace.chin], 2
    ],
    [
        [
            abilities.battleAbilities.ranged.acid.acidSpit,
            abilities.battleAbilities.melee.physicalPiercing.acidBite
        ], 
        null
    ]
);

const fireBreath = createMutation(
    [
        chrome.i18n.getMessage('fire_breath'), 
        chrome.i18n.getMessage('fire_breath_mutation_description'),
        images.mutantEvolvings.fireBreath
    ],
    [
        1, [InventoryPlace.chin], 2
    ],
    [
        [
            abilities.battleAbilities.ranged.fire.fireBreath,
            abilities.battleAbilities.melee.physicalPiercing.fireBite
        ], 
        null
    ]
);

const lowerFangs = createMutation(
    [
        chrome.i18n.getMessage('lower_fangs'), 
        chrome.i18n.getMessage('lower_fangs_mutation_description'),
        images.mutantEvolvings.lowerFangs
    ],
    [
        1, [InventoryPlace.chin], 1
    ],
    [
        [abilities.battleAbilities.melee.physicalPiercing.fangsBite], 
        null
    ]
);

const claws = createMutation(
    [
        chrome.i18n.getMessage('claws'), 
        chrome.i18n.getMessage('claws_mutation_description'),
        images.mutantEvolvings.claws
    ],
    [
        1, [InventoryPlace.bothHands], 4
    ],
    [
        null, null
    ]
);

const claw = createMutation(
    [
        chrome.i18n.getMessage('claws'), 
        chrome.i18n.getMessage('claws_mutation_description'),
        images.mutantEvolvings.claws
    ],
    [
        1, 
        [
            InventoryPlace.leftHand,
            InventoryPlace.rightHand
        ], 
        4
    ],
    [
        [abilities.battleAbilities.melee.physicalSlashing.clawSlash], 
        null
    ]
);

const horns = createMutation(
    [
        chrome.i18n.getMessage('horns'), 
        chrome.i18n.getMessage('horns_mutation_description'),
        images.mutantEvolvings.horns
    ],
    [
        1, [InventoryPlace.head], 3
    ],
    [
        [abilities.battleAbilities.melee.physicalPiercing.hornsCharge], 
        null
    ]
);

const tailWithBlunt = createMutation(
    [
        chrome.i18n.getMessage('tail_with_blunt'), 
        chrome.i18n.getMessage('tail_with_blunt_mutation_description'),
        images.mutantEvolvings.tailWithBlunt
    ],
    [
        2, [InventoryPlace.tail], 1
    ],
    [
        [abilities.battleAbilities.melee.physicalSmashing.tailCrash], 
        [abilities.passiveAbilities.mutations.tailWithBlunt]
    ]    
);

const tailWithCutter = createMutation(
    [
        chrome.i18n.getMessage('tail_with_cutter'), 
        chrome.i18n.getMessage('tail_with_cutter_mutation_description'),
        images.mutantEvolvings.tailWithCutter
    ],
    [
        2, [InventoryPlace.tail], 1
    ],
    [
        [abilities.battleAbilities.melee.physicalSlashing.tailSlash], 
        [abilities.passiveAbilities.mutations.tailWithCutter]
    ]    
);

const tailWithSting = createMutation(
    [
        chrome.i18n.getMessage('tail_with_sting'), 
        chrome.i18n.getMessage('tail_with_sting_mutation_description'),
        images.mutantEvolvings.tailWithSting
    ],
    [
        2, [InventoryPlace.tail], 1
    ],
    [
        [abilities.battleAbilities.melee.physicalPiercing.tailPrick], 
        [abilities.passiveAbilities.mutations.tailWithSting]
    ]    
);

const pincers = createMutation(
    [
        chrome.i18n.getMessage('pincers'), 
        chrome.i18n.getMessage('pincers_mutation_description'),
        images.mutantEvolvings.pincers
    ],
    [
        2, [InventoryPlace.shoulders], 1
    ],
    [
        [abilities.battleAbilities.melee.physicalPiercing.pincersStab], 
        null
    ]
)

const raptorLegs = createMutation(
    [
        chrome.i18n.getMessage('raptor_legs'), 
        chrome.i18n.getMessage('raptor_legs_mutation_description'),
        images.mutantEvolvings.raptorLegs
    ],
    [
        1, [InventoryPlace.legs], 1
    ],
    [
        [abilities.battleAbilities.melee.physicalSlashing.raptorJump], 
        null
    ]
);

const weapons = {
    acidSpit,
    claw,
    claws,
    fireBreath,
    horns,
    lowerFangs,
    pincers,
    raptorLegs,
    tailWithBlunt,
    tailWithCutter,
    tailWithSting
}

export default weapons