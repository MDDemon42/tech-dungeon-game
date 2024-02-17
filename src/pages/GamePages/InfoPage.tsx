import styles from './InfoPage.module.css';
import items from '../../gameScreens/Market/items';
import CommonIcon from '../../components/Icons/CommonIcon';
import { useState } from 'react';
import wizardItems from '../../gameScreens/WizardSchool/wizardItems';
import cybers from '../../gameScreens/CyberLab/cybers';
import mutations from '../../gameScreens/MutaLab/mutations';
import guildItems from '../../gameScreens/Guild/guildItems';
import armouryItems from '../../gameScreens/Mansion/armouryItems';
import academyMasteries from '../../gameScreens/Academy/masteries';
import airMasteries from '../../gameScreens/AirSite/masteries';
import { aerotheurgy } from '../../gameScreens/AirSite/bendings';
import { ContentZones, DamageType, InventoryContentParts, MindContentParts, Race } from '../../enums-and-interfaces/enums';
import fireMasteries from '../../gameScreens/FireSite/masteries';
import { pyrokinesis } from '../../gameScreens/FireSite/bendings';
import psionMasteries from '../../gameScreens/FocusSite/masteries';
import powers from '../../gameScreens/FocusSite/powers';
import rituals from '../../gameScreens/Guild/rituals';
import guildMasteries from '../../gameScreens/Guild/masteries';
import { cryomancy } from '../../gameScreens/IceSite/bendings';
import coldMasteries from '../../gameScreens/IceSite/masteries';
import wizardMasteries from '../../gameScreens/WizardSchool/masteries';
import spells from '../../gameScreens/WizardSchool/spells';
import battleAbilities from '../../general/abilities/battleAbilities';
import passiveAbilities from '../../general/abilities/passiveAbilities';
import { raceNames } from '../../general/races/races';
import createSubjectOfRace from '../../general/races/createSubjectOfRace';
import InventoryScreen from '../../components/InventoryScreen';

function getContent(contentPart: any) {
    const result: any[] = [];

    Object.keys(contentPart).forEach(key => {
        const certainContent = contentPart[key];
        result.push(certainContent);
    })

    return result
};

const meleeBattleAbilitiesContentParts: Partial<Record<DamageType | 'Mixed', {
    name: string,
    content: any[]
}>> = {
    [DamageType.electrical]: {
        name: DamageType.electrical,
        content: getContent(battleAbilities.melee.electrical)
    },
    [DamageType.fire]: {
        name: DamageType.fire,
        content: getContent(battleAbilities.melee.fire)
    },
    'Mixed': {
        name: 'Mixed',
        content: getContent(battleAbilities.melee.mixed)
    },
    [DamageType.physicalPiercing]: {
        name: DamageType.physicalPiercing,
        content: getContent(battleAbilities.melee.physicalPiercing)
    },
    [DamageType.physicalSlashing]: {
        name: DamageType.physicalSlashing,
        content: getContent(battleAbilities.melee.physicalSlashing)
    },
    [DamageType.physicalSmashing]: {
        name: DamageType.physicalSmashing,
        content: getContent(battleAbilities.melee.physicalSmashing)
    },
    [DamageType.psionic]: {
        name: DamageType.psionic,
        content: getContent(battleAbilities.melee.psionic)
    },
};

const rangedBattleAbilitiesContentParts: Partial<Record<DamageType, {
    name: string,
    content: any[]
}>> = {
    [DamageType.acid]: {
        name: DamageType.acid,
        content: getContent(battleAbilities.ranged.acid)
    },
    [DamageType.cold]: {
        name: DamageType.cold,
        content: getContent(battleAbilities.ranged.cold)
    },
    [DamageType.electrical]: {
        name: DamageType.electrical,
        content: getContent(battleAbilities.ranged.electrical)
    },
    [DamageType.fire]: {
        name: DamageType.fire,
        content: getContent(battleAbilities.ranged.fire)
    },
    [DamageType.physicalPiercing]: {
        name: DamageType.physicalPiercing,
        content: getContent(battleAbilities.ranged.physicalPiercing)
    },
    [DamageType.physicalSlashing]: {
        name: DamageType.physicalSlashing,
        content: getContent(battleAbilities.ranged.physicalSlashing)
    },
    [DamageType.physicalSmashing]: {
        name: DamageType.physicalSmashing,
        content: getContent(battleAbilities.ranged.physicalSmashing)
    },
    [DamageType.psionic]: {
        name: DamageType.psionic,
        content: getContent(battleAbilities.ranged.psionic)
    },
    [DamageType.suffocation]: {
        name: DamageType.suffocation,
        content: getContent(battleAbilities.ranged.suffocation)
    }
};

const passiveAbilitiesContentParts: Record<string, {
    name: string,
    content: any[]
}> = {
    'Armor': {
        name: 'Armor',
        content: getContent(passiveAbilities.armor)
    },
    'Cybers': {
        name: 'Cybers',
        content: getContent(passiveAbilities.cybers)
    },
    'Mutations': {
        name: 'Mutations',
        content: getContent(passiveAbilities.mutations)
    },
    'Psionics': {
        name: 'Psionics',
        content: getContent(passiveAbilities.psionics)
    },
    'Rituals': {
        name: 'Rituals',
        content: getContent(passiveAbilities.rituals)
    },
    'Weapons': {
        name: 'Weapons',
        content: getContent(passiveAbilities.weapons)
    }
};

const mindContentParts: Record<MindContentParts, {
    name: string,
    content: any[]
}> = {
    [MindContentParts.academyMasteries]: {
        name: 'Academy Masteries',
        content: getContent(academyMasteries)
    },
    [MindContentParts.airBendings]: {
        name: 'Air Bendings',
        content: getContent(aerotheurgy)
    },
    [MindContentParts.airMasteries]: {
        name: 'Air Masteries',
        content: getContent(airMasteries)
    },
    [MindContentParts.fireBendings]: {
        name: 'Fire Bendings',
        content: getContent(pyrokinesis)
    },
    [MindContentParts.fireMasteries]: {
        name: 'Fire Masteries',
        content: getContent(fireMasteries)
    },
    [MindContentParts.guildMasteries]: {
        name: 'Guild masteries',
        content: getContent(guildMasteries)
    },
    [MindContentParts.guildRituals]: {
        name: 'Guild rituals',
        content: getContent(rituals)
    },
    [MindContentParts.iceBendings]: {
        name: 'Ice Bendings',
        content: getContent(cryomancy)
    },
    [MindContentParts.iceMasteries]: {
        name: 'Ice Masteries',
        content: getContent(coldMasteries)
    },
    [MindContentParts.psionMasteries]: {
        name: 'Psion masteries',
        content: getContent(psionMasteries)
    },
    [MindContentParts.psionPowers]: {
        name: 'Psion powers',
        content: getInnerContent(powers)
    },
    [MindContentParts.wizardMasteries]: {
        name: 'Wizard masteries',
        content: getContent(wizardMasteries)
    },
    [MindContentParts.wizardSpells]: {
        name: 'Wizard spells',
        content: getContent(spells)
    }
};

function getInnerContent(contentPart: any) {
    const result: any[] = [];

    Object.keys(contentPart).forEach(key => {
        const contentArea = key as keyof typeof contentPart;
        Object.keys(contentPart[contentArea]).forEach(content => {
            const certainContent = contentPart[contentArea][content];
            result.push(certainContent);
        })
    })

    return result
};

const inventoryContentParts: Record<InventoryContentParts, {
    name: string,
    content: any[]
}> = {
    [InventoryContentParts.armouryItems]: {
        name: 'Armoury Items',
        content: getInnerContent(armouryItems)
    },
    [InventoryContentParts.guildItems]: {
        name: 'Guild Items',
        content: getInnerContent(guildItems)
    },
    [InventoryContentParts.normalItems]: {
        name: 'Normal Items',
        content: getInnerContent(items)
    },
    [InventoryContentParts.wizardItems]: {
        name: 'Wizard Items',
        content: getInnerContent(wizardItems)
    },
    [InventoryContentParts.cybers]: {
        name: 'Cybers',
        content: getInnerContent(cybers)
    },
    [InventoryContentParts.mutations]: {
        name: 'Mutations',
        content: getInnerContent(mutations)
    }
};

const racesContentPart = {};
Object.keys(Race).forEach(key => {
    if (key !== 'unknown') {
        const certainRace = Race[key as keyof typeof Race];
        // @ts-expect-error
        racesContentPart[certainRace] = {
            name: raceNames[certainRace],
            character: createSubjectOfRace(certainRace)
        }
    }    
});

const contentZones: Record<ContentZones, any> = {
    [ContentZones.mind]: mindContentParts,
    [ContentZones.inventory]: inventoryContentParts,
    [ContentZones.meleeBattleAbilities]: meleeBattleAbilitiesContentParts,
    [ContentZones.passiveAbilities]: passiveAbilitiesContentParts,
    [ContentZones.races]: racesContentPart,
    [ContentZones.rangedBattleAbilities]: rangedBattleAbilitiesContentParts,
};

function InfoPage() {
    const [contentZone, setContentZone] = useState<ContentZones>(ContentZones.mind);
    const [possibleContentParts, setPossibleContentParts] = useState<typeof mindContentParts | typeof inventoryContentParts>(mindContentParts);
    const [contentPart, setContentPart] = useState<MindContentParts | 
        InventoryContentParts>
            (MindContentParts.academyMasteries);
    
    return (
        <div className={styles.InfoPage}>
            <div className={styles.InfoPage_contentSelectArea}>
                <div className={styles.InfoPage_contentZoneSelect}>
                    <select 
                        onChange={(event) => {
                            const chosenContentZone = event.target.value as ContentZones;
                            setContentZone(chosenContentZone);
                            setPossibleContentParts(contentZones[chosenContentZone]);
                            // @ts-expect-error
                            setContentPart(Object.keys(contentZones[chosenContentZone])[0]);
                        }}
                    >
                        {
                            Object.keys(contentZones).map(zone => (
                                <option value={zone}>
                                    {zone}
                                </option>
                            ))
                        }
                    </select>
                </div>
                <div className={styles.InfoPage_contentPartSelect}>
                    <select 
                        onChange={(event) => 
                            setContentPart(event.target.value as MindContentParts | InventoryContentParts)
                        }
                    >
                        {
                            Object.keys(contentZones[contentZone]).map(part => (
                                <option value={part}>
                                    {
                                        // @ts-expect-error
                                        possibleContentParts[part].name
                                    }
                                </option>
                            ))
                        }
                    </select>
                </div>
            </div>                      
            <div className={styles.InfoPage_content}>
                {
                    contentZone === ContentZones.races ?
                        // @ts-expect-error
                        <InventoryScreen character={possibleContentParts[contentPart].character} battle={false}/>
                        :
                        // @ts-expect-error
                        possibleContentParts[contentPart].content
                        // @ts-expect-error
                            .map(item => <CommonIcon item={item} forInfoPage/>)
                }
            </div>
        </div>
    )
}

export default InfoPage