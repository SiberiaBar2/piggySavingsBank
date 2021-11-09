import React, { useState, useEffect } from 'react'
import { piggyList, bugStatus, test, userToken } from '../config'
import cx from 'classnames'
import MarketPage from '../MarketPage'
import SignPage from '../SignPage'
import ThreePig from '../ThreePIg'

import './index.css'

const Container: React.FC<{}> = () => {
  // let browserStroge = {

  // }


  const [status, setStatus] = useState(() => {
    // return ((localStorage['status'] === null) ? bugStatus : localStorage['status'])
    return bugStatus
  })

  const [shell, setShell] = useState(false)
  const [piggys, setPiggys] = useState(piggyList)
  const [token, setToken] = useState(userToken)

  const commonPage = status === 0 || status === 1 || status === 2 || status === 3
  const signPage = status === 1 || status === 2 || status === 3
  const notShopPageFirst = commonPage && !shell
  const notShopPageSecond = signPage && !shell

  useEffect(() => {
    console.log('status', status);
    return () => {
      localStorage['status'] = status
    }
  }, [])


  // 此次cra 钱币累加也没有出现数据更新不及时的情况？
  const signUpdateMethod = val => {
    let newPiggys = piggys
    newPiggys[val.status - 1].signState[val.index].state = 3

    let newToken = token
    newToken = token + val.returnToken
    setPiggys(newPiggys)
    setToken(newToken)
  }
  // useEffect(() => {
  //   console.log('status', status, localStorage['status']);
  // }, [status])
  const goback = () => {
    setShell(!shell)
  }
  return (
    <div className={cx('container')}>
      {console.log('piggys[status - 1]', piggys, piggys[status - 1])}
      {
        shell
          ? <MarketPage />
          : (signPage
            ? <SignPage status={status} signState={piggys[status - 1].signState} signUpdateMethod={signUpdateMethod} />
            : <ThreePig threePigs={piggys} />
          )
      }
      <div
        onClick={goback}
        className={cx('goBack')}>
        {shell ? '返回' : '兑换'}
      </div>
      {console.log('renderToken', token)}
      <span className={cx('userToken')}>您当前拥有的钱币数量{token}</span>
    </div>
  )
}

export default Container
