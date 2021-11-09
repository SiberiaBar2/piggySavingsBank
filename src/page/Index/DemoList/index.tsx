import React, { useState, useEffect } from 'react'

import cx from 'classnames'

import './index.css'
// 定义为num ，传入为string,类型的意义何在
interface DemoListProps {
  state?: number
}

const val = 11
// const userToken = 20000  // 用户的币的数量
const onePrice = 200    // 单价
const limit = 20        // 本次活动购买上限
const conent = 2        // 已经花费的


const buySpend = 5
const DemoList: React.FC<DemoListProps> = (props) => {
  const { state } = props
  const [value, setValue] = useState((): string => {
    return val > 10 ? 'Eric' : 'Rose'
  })
  const [addNum, setAddNum] = useState(0)
  const [userToken, setUserToken] = useState(500)

  useEffect(() => {
    // initMethod(value)
  }, [])

  // 类型是标签，而指定的返回是 字符串 | 数字 | 布尔 ，为什么没报错
  const renderName = (value: number | string | boolean): string | number | boolean => {
    return <div>
      {value}
    </div>
  }

  const renderNums = (): Document => {
    return <div>
      {state}
    </div>
  }
  const add = () => {
    /***
     * 上限limit -conet 花费 算出 剩余可购买次数；
     * 通过用户当前拥有的钱币数量 / 商品单价， 计算出用户当前的钱币能够购买的 商品数量上限；
     * 活动商品购买上限的优先级大于  钱币购买商品的上限
     */
    if (addNum < (userToken / onePrice > (limit - conent) ? (limit - conent) : userToken / onePrice)) {
      let val = Number(addNum + 1)
      setAddNum(val)
    }
  }

  const bugShop = (buySpend: number) => {
    console.log('userToken------>11111', userToken);
    let newToken = userToken
    newToken = newToken - buySpend
    setUserToken(newToken)
    console.log('userToken----->2222', userToken, 'newToken', newToken);

    // 解决useSate 更新不及时的问题
    /**
     * setUserToken( (token) => {
     *  return token - 5
     * })
     */
  }
  const renderAdd = (): Document => {
    return <div className={cx('addBtn')} onClick={add}>{addNum}</div>
  }

  // 这里有一个减少用户钱币后钱币不更新的问题，不知为何在cra中没有复现
  const renderBuyShops = (): Document => {
    return <div className={cx('buyBtn')} onClick={() => bugShop(buySpend)}>
      {console.log('rendertoken', userToken)}
      {userToken}
    </div>
  }
  return (
    <div>
      {renderNums()}
      {renderName(value)}
      {renderAdd()}
      {renderBuyShops()}
    </div>
  )
}

export default DemoList