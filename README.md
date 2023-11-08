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

 - Battle abilities must have either 1 or 3 or 5 targets

 # TODO:
 1) More `opponents`
 2) Add more abilities to use on `Battle Screen`
 3) Extra `MASPIC` (Axe, Mace, Greathammer, Runic Greathammer, Spear, Fur, Musket, Rifle)
 4) Make mutual exclusions within `MASPIC`
 5) More ~abilities~ to get more user resources (~battery capacity~ for cyborg)
 6) Mix `MASPIC` to get `elf` and `werewolf`(?)
 7) Add more `_locales`
 8) Check requirements on `masteries` and `cybers`
 9) Several generations of `MASPIC` masters
 10) More `villagers`

 # Items to classes (with special abilities) (?)
 1) No armor + Two axes => Berserk
 2) No armor + Greataxe => Barbarian
 3) Steel armor + Steel sword + Steel shield => Knight
 4) Steel armor + Mace* + Steel Shield => Paladin