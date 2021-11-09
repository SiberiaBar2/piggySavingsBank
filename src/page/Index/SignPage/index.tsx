import React, { useState, useEffect } from 'react'
import cx from 'classnames'
import { test, piggyIcon } from '../config'
import './index.css'
interface SignProps {
  status?: number,
  signState?: Array<object>,
  signUpdateMethod?: () => void
}
const SignPage: React.FC<SignProps> = ({
  status,
  signState,
  signUpdateMethod
}) => {

  const toSign = (index: number, returnToken: number) => {
    signUpdateMethod({ status, index, returnToken })
  }
  return (
    <div className={cx('sign')}>
      <div className={cx('leftContent')}>
        <img src={piggyIcon[status - 1].default} alt="猪猪图片" />
      </div>
      <div className={cx('rightContent')}>
        {
          signState.map((item, index) => {
            if (index !== 6) {
              if (item.state === 2) {
                return <div
                  key={index}
                  className={cx('signWrap')}
                  onClick={() => toSign(index, item.returnToken)}>
                  <span>{item.returnToken}</span>
                  <span>{test[0]}</span>
                </div>
              } else {
                return <div
                  key={index}
                  className={cx('signWrap')}>
                  <span>{item.returnToken}</span>
                  {item.state === 0 || item.state === 0 &&
                    <span>{test[2]}</span>
                  }
                  {item.state === 3 &&
                    <>
                      <span>{test[1]}</span>
                      <div className={cx('rgbaCover')}></div>
                    </>
                  }
                </div>
              }
            } else {
              if (item.state === 2) {
                return <div
                  key={index}
                  className={cx('SevenSignWrap')}
                  onClick={() => toSign(index, item.returnToken)}>
                  <span>{item.returnToken}</span>
                  <span>{test[0]}</span>
                </div>
              } else {
                return <div
                  key={index}
                  className={cx('SevenSignWrap')}>
                  <span>{item.returnToken}</span>
                  {item.state === 0 || item.state === 0 &&
                    <span>{test[2]}</span>
                  }
                  {item.state === 3 &&
                    <>
                      <span>{test[1]}</span>
                      <div className={cx('rgbaCover')}></div>
                    </>
                  }
                </div>
              }
            }
          })
        }
      </div>
    </div>
  )
}

export default SignPage