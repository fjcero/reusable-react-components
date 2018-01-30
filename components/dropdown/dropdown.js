import { groupBy, map } from 'lodash/collection'
import React, { Component, PropTypes } from 'react'

export class Dropdown extends Component {
  static propTypes = {
    allowEmptyOptions: PropTypes.bool,
    className: PropTypes.string,
    dataTestId: PropTypes.string,
    groupedBy: PropTypes.string,
    options: PropTypes.array,
    placeholder: PropTypes.string
  }

  static defaultProps = {
    allowEmptyOptions: false,
    className: '',
    dataTestId: '',
    groupedBy: null,
    options: [],
    placeholder: ''
  }

  renderOptions (options) {
    return options.map((o) => {
      return <option key={o.value} value={o.value}>{o.text}</option>
    })
  }

  /**
   * Group options by property path. If `groupedBy` is null then render options only.
   * @param options (Array)
   * @param groupedBy (String)
   */
  renderOptGroups (options, groupedBy) {
    if (!groupedBy || groupedBy === '') {
      return this.renderOptions(options)
    }

    const groups = groupBy(options, groupedBy)

    return map(groups, (options, groupName) => {
      return (
        <optgroup key={ groupName } label={ groupName }>
          { this.renderOptions(options) }
        </optgroup>
      )
    })
  }

  render () {
    const {
      allowEmptyOptions,
      className,
      dataTestId,
      groupedBy,
      options,
      placeholder,
      ...otherDropdownProps
    } = this.props

    if (allowEmptyOptions || (options && options.length)) {
      return (
        <select
          className={ className }
          data-test-id={ dataTestId }
          { ...otherDropdownProps }
        >
          <option value=''>{ placeholder }</option>
          {
            options &&
            options.length > 0 &&
            (
              groupedBy
                ? this.renderOptGroups(options, groupedBy)
                : this.renderOptions(options)
            )
          }
        </select>
      )
    }

    return (<span />)
  }
}
