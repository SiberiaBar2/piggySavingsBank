import React, { useState, useEffect } from 'react'
import cx from 'classnames'
import { test, piggyIcon } from '../config'
import './index.css'
interface SignProps {
  status?: number,
  signState?: Array<object>,
  signUpdateMethod?: () => void
}
const SignPage: React.FC<SignProps> = (props) => {
  const {
    status,
    signState,
    signUpdateMethod
  } = props
  console.log('signState', signState)
  const toSign = (index: number, returnToken: number) => {
    signUpdateMethod({ status, index, returnToken })
  }
  const renderBox = (type, state, index, returnToken) => {
    return (
      <div
        key={index}
        className={cx(
          type === 'signWrap'
            ? 'signWrap'
            : 'SevenSignWrap')}
        onClick={
          state === 2
            ? () => toSign(index, returnToken)
            : null}>
        <span>{returnToken}</span>
        <span> {
          state === 2
            ? test[0]
            : (state === 0 || state === 1)
              ? test[2]
              : state === 3
                ? test[1]
                : null}
        </span>
        {state === 3 && <div className={cx('rgbaCover')}></div>}
      </div>
    )
  }
  return (
    <div className={cx('sign')}>
      <div className={cx('leftContent')}>
        <img src={piggyIcon[status - 1].default} alt="猪猪图片" />
      </div>
      <div className={cx('rightContent')}>
        {
          signState.map((item, index) => {
            const { state, returnToken } = item
            if (index !== 6) {
              // if (item.state === 2) {
              // 必须return!
              return renderBox('signWrap', state, index, returnToken)
              // } else {
              //   return <div
              //     key={index}
              //     className={cx('signWrap')}>
              //     <span>{item.returnToken}</span>
              //     {(item.state === 0 || item.state === 1) &&
              //       <span>{test[2]}</span>
              //     }
              //     {item.state === 3 &&
              //       <>
              //         <span>{test[1]}</span>
              //         <div className={cx('rgbaCover')}></div>
              //       </>
              //     }
              //   </div>
              // }
            } else {
              return renderBox('SevenSignWrap', state, index, returnToken)
              // if (item.state === 2) {
              //   return <div
              //     key={index}
              //     className={cx('SevenSignWrap')}
              //     onClick={() => toSign(index, item.returnToken)}>
              //     <span>{item.returnToken}</span>
              //     <span>{test[0]}</span>
              //   </div>
              // } else {
              //   return <div
              //     key={index}
              //     className={cx('SevenSignWrap')}>
              //     <span>{item.returnToken}</span>
              //     {(item.state === 0 || item.state === 1) &&
              //       <span>{test[2]}</span>
              //     }
              //     {item.state === 3 &&
              //       <>
              //         <span>{test[1]}</span>
              //         <div className={cx('rgbaCover')}></div>
              //       </>
              //     }
              //   </div>
              // }
            }
          })
        }
      </div>
    </div>
  )
}

export default SignPage