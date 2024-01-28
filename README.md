# Getting Started with Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### To get version of extension:
 - `yarn install`
 - `yarn build`
 - load unpacked `build` folder in `chrome://extensions`

### Comments
 - Had to use `HashRouter` instead of modern `RouterProvider`
 - Had to use both `chrome.storage` and `redux store` to store data
 - Most of images for Tech Dungeon Game is from `heromachine` service.

### Restricts
 - Battle abilities must have either 1 or 3 or 5 targets

 # TODO:
 1) More `opponents`, `villagers`, `_locales`, `MASPIC`(`Void crash` on `extra arms`, `sheath`, `spiky shell`, `tail-cutter`)
 2) Add more abilities to use on `Battle Screen`
 3) More ~abilities~ to get more user resources (~battery capacity~ for cyborg, `psi-capacity`)
 4) Mix `MASPIC` to get `elf` and `werewolf`(?)
 5) Long hair of `fur` mutation
 6) Several generations of `MASPIC` masters (?)
 7) `Tropheys` after `win` on `Battle Screen`
 8) More items for `extra arms` and `telekinesis` (`mage khopesh`)
 9) `Quests`
 10) Food