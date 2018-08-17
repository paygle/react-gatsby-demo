import React from 'react'
import createReactClass from 'create-react-class'
import Link from 'gatsby-link'
import { DatePicker } from 'antd'
import Moment from 'moment'
import 'moment/locale/zh-cn'

const IndexPage = createReactClass({

  getInitialState() {
    return {ds: ''}
  },

  onChange(date, dateString) {
    this.setState({ds: dateString})
    console.log(date, dateString)
  },

  render() {

    return (
      <div>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great. - {this.state.ds}</p>
        <Link to="/page-2/">Go to page 2</Link>
        <DatePicker onChange={this.onChange}  defaultValue={Moment()}/>
      </div>
    )
  }
})

export default IndexPage
