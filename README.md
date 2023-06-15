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
 1) Add extra params and things like `Hit Points`, `Mana Points`, `Exp`
 2) Changing posessed `MASPIC` (specially `skin` and `shoulders`)
 3) Add abilities to use on battle screen
 4) Extra `MASPIC` (mutation for legs)
 5) Make mutual exclusions within `MASPIC` (head and hat)
 6) Fix styles
 7) New images for powers