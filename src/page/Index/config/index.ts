
import { test, userToken } from './others'

const brassPig = require('../assets/brassPig.jpg')
const sliverPig = require('../assets/sliverPig.jpg')
const glodPig = require('../assets/glodPig.jpg')
const piggyToken = require('../assets/piggyToken.jpg')
const glodFruit = require('../assets/glodFruit.jpg')

export const piggyIcon = [brassPig, sliverPig, glodPig]

export const otherIcon = [piggyToken, glodFruit]

const brassSignList: {
  state: number,
  returnToken: number
}[] = [
    {
      state: 0,
      returnToken: 600
    },
    {
      state: 0,
      returnToken: 600
    },
    {
      state: 0,
      returnToken: 600
    },
    {
      state: 0,
      returnToken: 1000
    },
    {
      state: 0,
      returnToken: 1000
    },
    {
      state: 0,
      returnToken: 1000
    },
    {
      state: 0,
      returnToken: 1700
    },
  ]

const sliverSignList: {
  state: number,
  returnToken: number
}[] = [
    {
      state: 0,
      returnToken: 1100
    },
    {
      state: 0,
      returnToken: 1100
    },
    {
      state: 0,
      returnToken: 1100
    },
    {
      state: 0,
      returnToken: 1500
    },
    {
      state: 0,
      returnToken: 1500
    },
    {
      state: 0,
      returnToken: 1500
    },
    {
      state: 0,
      returnToken: 1700
    },
  ]

const glodSignList: {
  state: number,
  returnToken: number
}[] = [
    {
      state: 2,
      returnToken: 1500
    },
    {
      state: 2,
      returnToken: 1500
    },
    {
      state: 2,
      returnToken: 1500
    },
    {
      state: 2,
      returnToken: 2500
    },
    {
      state: 2,
      returnToken: 2500
    },
    {
      state: 2,
      returnToken: 2500
    },
    {
      state: 2,
      returnToken: 3000
    },
  ]

export const piggyList: {
  name: string,
  price: number,
  produce: number,
  text: string,
  signState: typeof brassSignList
}[] = [
    {
      name: '黄铜储蓄罐',
      price: 2000,
      produce: 6500,
      text: '储蓄币份七天给予',
      signState: brassSignList
    },
    {
      name: '白银储蓄罐',
      price: 4000,
      produce: 9500,
      text: '储蓄币份七天给予',
      signState: sliverSignList
    },
    {
      name: '黄金储蓄罐',
      price: 9000,
      produce: 15000,
      text: '储蓄币份七天给予',
      signState: glodSignList
    }
  ]


export const bugStatus = 0

// export const enum piggyTextType {
//   brassPiggy,
//   sliverPiggy,
//   goldPiggy
// }

// export const piggyText = {
//   [piggyTextType.brassPiggy]: '黄铜储蓄罐',
//   [piggyTextType.sliverPiggy]: '白银储蓄罐',
//   [piggyTextType.goldPiggy]: '黄金储蓄罐',
// }


export {
  test,
  userToken
}