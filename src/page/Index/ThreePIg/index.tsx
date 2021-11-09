import React, { useState, useEffect } from 'react'
import cx from 'classnames'
import { piggyIcon, otherIcon } from '../config'

import './index.css'
interface ThreePigProps {
  threePigs?: Array<object>
}
const ThreePig: React.FC<ThreePigProps> = (props) => {
  const { threePigs } = props
  console.log('piggyIcon', piggyIcon);
  const bugPiggys = (price) => {
    console.log('price', price);
  }

  return (
    <div className={cx('pigsWrap')}>
      {
        threePigs.map((item, index) => {
          return <div
            key={index}
            className={cx('threePig')}>
            <div className={cx('pigImgWrap')}><img src={piggyIcon[index].default} alt="" /></div>
            <span className={cx('pigName')}>{item.name}</span>
            <span className={cx('proDuce')}>累计产出<img className={cx('piggyToken')} src={otherIcon[0].default} alt="猪猪钱币" />{item.produce}</span>
            <span className={cx('tokenText')} title="储蓄币分七天给予">{item.text}</span>
            <span className={cx('bottomPriceView')} onClick={() => bugPiggys(item.price)}>
              <img className={cx('glodFruit')} src={otherIcon[1].default} alt="金果" />
              {item.price}
            </span>
          </div>
        })
      }
    </div>
  )
}

export default ThreePig