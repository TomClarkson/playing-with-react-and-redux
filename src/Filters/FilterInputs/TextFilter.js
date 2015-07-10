import React, { Component, PropTypes } from 'react'
import { FilterItem } from './FilterItem'

export default class TextFilter extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    field: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string,
    value: PropTypes.string,
  }
  static defaultProps = {
    type: 'text'
  }
  render() {
    const { title, type, value } = this.props
    return (
      <FilterItem title={title} onClose={::this.clear}>
        <input type={type} value={value} onChange={::this.changed} />
      </FilterItem>
    )
  }
  changed(e) {
    this.triggerChange(e.target.value)
  }
  clear() {
    this.triggerChange(null)
  }
  triggerChange(value) {
    const { onChange, field } = this.props
    onChange(field, value)
  }
}