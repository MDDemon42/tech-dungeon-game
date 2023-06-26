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

 # TODO:
 1) Add `team` instead of `user`
 2) More `opponents`
 3) Add more abilities to use on `Battle Screen`
 4) Extra `MASPIC`
 5) Make mutual exclusions within `MASPIC`
 6) Fix styles (when adding `masteries`)
 7) More ~ abilities ~ to get more user resources (~ battery capacity ~ for cyborg)
 8) Move `Bow` and `Crossbow` to `hands`
 9) Mix `MASPIC` to get `elf`, `orc`, `vampire` and `werewolf`

 # Mutations to races (with special abilities)
 1) Horns + Hooves => Satyr
 2) Horns + Hooves + Brutal force => Minotaur
 3) Lower fangs + Brutal force => Orc
 4) Lower fangs + Brutal force + Fur* => Gnoll
 5) Lower fangs + Claws => Ghoul
 6) Lower fangs + Claws + Wings => Vampire
 7) Horns + Scales + Claws + Tail with sting + Lower fangs => Demon
 8) Horns + Scales + Claws + Tail with sting + Acid split + Wings => Dragon
 9) Horns + Scales + Claws + Tail with sting + Acid split + Wings + Pincers + Hooves => Ultimate chimera