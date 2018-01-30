import { Dropdown } from '../dropdown'
import { groupBy } from 'lodash/collection'

const DropdownData = [
  {
    group: 'A',
    text: 'Foo',
    value: 1
  },
  {
    group: 'B',
    text: 'Bar',
    value: 2
  },
  {
    group: 'A',
    text: 'Baz',
    value: 3
  }
]

describe.only('dropdown component', () => {
  describe('without any options', () => {
    it('does not display a dropdown, no options array', () => {
      const component = shallow(<Dropdown />)
      expect(component.find('select').length).to.equal(0)
    })

    it('does not display a dropdown, empty options array', () => {
      const component = shallow(<Dropdown options={[]} />)
      expect(component.find('select').length).to.equal(0)
    })

    it('displays a dropdown with no options array, with allowEmptyOptions true', () => {
      const component = shallow(<Dropdown allowEmptyOptions />)
      const options = component.find('option').map(tag => tag)
      expect(component.find('select').length).to.equal(1)
      expect(options.length).to.equal(1)
      expect(options[0].text()).to.equal('')
    })

    it('displays a dropdown with empty options array, with allowEmptyOptions true', () => {
      const component = shallow(<Dropdown options={[]} allowEmptyOptions />)
      const options = component.find('option').map(tag => tag)
      expect(component.find('select').length).to.equal(1)
      expect(options.length).to.equal(1)
      expect(options[0].text()).to.equal('')
    })

    it('does not render an orphaned "0" in the select', () => {
      const component = shallow(<Dropdown options={[]} allowEmptyOptions />)
      expect(component.find('select').text()).to.not.equal('0')
    })
  })

  describe('with options', () => {
    it('displays a dropdown', () => {
      const component = shallow(<Dropdown options={DropdownData} />)
      expect(component.find('select').length).to.equal(1)
    })

    it('has empty/blank option', () => {
      const component = shallow(<Dropdown options={DropdownData} />)
      const options = component.find('option').map(tag => tag)
      expect(options[0].text()).to.equal('')
    })

    it('displays optional placeholder text', () => {
      const component = shallow(<Dropdown options={DropdownData} placeholder='Select option' />)
      const options = component.find('option').map(tag => tag)
      expect(options[0].text()).to.equal('Select option')
    })

    it('has correct options', () => {
      const component = shallow(<Dropdown options={DropdownData} />)
      const options = component.find('option').map(tag => tag)
      expect(options).to.have.length.of.at.least(DropdownData.length)
      expect(options[1].text()).to.equal(DropdownData[0].text)
      expect(options[2].text()).to.equal(DropdownData[1].text)
      expect(options[3].text()).to.equal(DropdownData[2].text)
    })
  })

  describe('with optgroups', () => {
    it('has empty/null value to group by', () => {
      const groupName = ''
      const component = shallow(<Dropdown options={DropdownData} groupedBy={groupName} />)
      const options = component.find('option').map(tag => tag)
      expect(options).to.have.length.of.at.least(DropdownData.length)
      expect(options[1].text()).to.equal(DropdownData[0].text)
      expect(options[2].text()).to.equal(DropdownData[1].text)
      expect(options[3].text()).to.equal(DropdownData[2].text)
    })

    it('has incorrect value to group by', () => {
      const groupName = 'BOOMSHAKALAKA'
      const component = shallow(<Dropdown options={DropdownData} groupedBy={groupName} />)
      const optgroups = component.find('optgroup').map(tag => tag)
      expect(optgroups).to.have.length.of(1)
      expect(optgroups[0].prop('label')).to.equal('undefined')
      expect(optgroups[0].find('option')).to.have.length.of.at.least(DropdownData.length)
    })

    it('has correct value to group by', () => {
      const groupName = 'group'
      const component = shallow(<Dropdown options={DropdownData} groupedBy={groupName} />)
      const optgroups = component.find('optgroup').map(tag => tag)
      const groups = groupBy(DropdownData, groupName)

      expect(optgroups).to.have.length.of.at.least(Object.keys(groups).length)
      optgroups.forEach((optgroup, groupKey) => {
        let group = Object.keys(groups)[groupKey]
        expect(optgroup.prop('label')).to.equal(group)
        expect(optgroup.find('option')).to.have.length.of.at.least(groups[group].length)
      })
    })
  })
})
