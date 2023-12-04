import { GameScreens } from '../../enums-and-interfaces/enums';
import { IGameStageOptions } from '../../enums-and-interfaces/interfaces';
import { academyOptions } from './academyOptions';
import { airSchoolOptions } from './airSchoolOptions';
import { airSiteOptions } from './airSiteOptions';
import { cyberLabOptions } from './cyberLabOptions';
import { fireSchoolOptions } from './fireSchoolOptions';
import { fireSiteOptions } from './fireSiteOptions';
import { focusSchoolOptions } from './focusSchoolOptions';
import { focusSiteOptions } from './focusSiteOptions';
import { guildRitualOptions } from './guildRitualOptions';
import { guildSchoolOptions } from './guildSchoolOptions';
import { guildShopOptions } from './guildShopOptions';
import { iceSchoolOptions } from './iceSchoolOption';
import { iceSiteOptions } from './iceSiteOptions';
import { marketOptions } from './marketOptions';
import { mutationLabOptions } from './mutationLabOptions';
import { spellSchoolOptions } from './spellSchoolOptions';
import { wizardSchoolOptions } from './wizardSchoolOptions';
import { wizardShopOptions } from './wizardShopOptions';

const stageOptions: IGameStageOptions = {
    [GameScreens.academy]: academyOptions,
    [GameScreens.airSchool]: airSchoolOptions,
    [GameScreens.airSite]: airSiteOptions,
    [GameScreens.cyberLab]: cyberLabOptions,
    [GameScreens.fireSchool]: fireSchoolOptions,
    [GameScreens.fireSite]: fireSiteOptions,
    [GameScreens.focusSchool]: focusSchoolOptions,
    [GameScreens.focusSite]: focusSiteOptions,
    [GameScreens.guildRituals]: guildRitualOptions,
    [GameScreens.guildSchool]: guildSchoolOptions,
    [GameScreens.guildShop]: guildShopOptions,
    [GameScreens.iceSchool]: iceSchoolOptions,
    [GameScreens.iceSite]: iceSiteOptions,
    [GameScreens.market]: marketOptions,
    [GameScreens.mutationLab]: mutationLabOptions,
    [GameScreens.spellSchool]: spellSchoolOptions,
    [GameScreens.villageMap]: null,
    [GameScreens.wizardSchool]: wizardSchoolOptions,
    [GameScreens.wizardShop]: wizardShopOptions
}

export default stageOptions