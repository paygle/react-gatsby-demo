import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { DatePicker } from 'antd'
import Moment from 'moment'
import 'moment/locale/zh-cn'

// function onChange(date, dateString) {
//   console.log(date, dateString);
// }

const IndexPage = ({onChange}) => {
  debugger
  return (
    <div>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
      <DatePicker onChange={onChange}  defaultValue={Moment()}/>
    </div>
  )
}

// PropTypes 进行类型检查
IndexPage.propTypes = {
  onChange: PropTypes.func.isRequired,
  date:  PropTypes.string
}

// 为属性指定默认值:
IndexPage.defaultProps = {
  onChange: (date, dateString) => {
    this.setState({date: dateString}); // 修改数据状态
    console.log(date, dateString);
  }
};

export default IndexPage
