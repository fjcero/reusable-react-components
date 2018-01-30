# Dropdown

The Dropdown component is a wrapper for HTML `<select>` element, which represents a control that presents a menu of options. The options within the menu are represented by `<option>` elements, which can be grouped by `<optgroup>` elements. 

> [**MDN Ref**](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)

# Install

Simply use npm to install this component. From there, `require` or `import` it within your code.

```shell
npm install components.dropdown --save-dev
```

# Example usage

```javascript
import { Dropdown } from 'components.dropdown'

const options: [
  { value: 1, text: 'Foo' },
  { value: 2, text: 'Bar'},
  { value: 3, text: 'Baz' }
]

<Dropdown options={options}/>
```

# API

- [allowEmptyOptions](#allowEmptyOptions)
- [className](#className)
- [dataTestId](#dataTestId)
- [groupedBy](#groupedBy)
- [options](#options)
- [otherDropdownProps](#otherDropdownProps)
- [placeholder](#placeholder)

#### `allowEmptyOptions`

**Required: false**  
**Type: `Bool`**  
**Default: `false`**

If `true` the `<select>` will not be rendered, only a `<span>` will be shown instead.

```javascript
<Dropdown allowEmptyOptions='true' />
```

#### `className`

**Required: false**  
**Type: `String`**  
**Default: `''`**

The class to be used on the parent <div> on the component.

```javascript
<Dropdown className='custom-class' />
```

#### `dataTestId`

**Required: false**  
**Type: `Bool`**  
**Default: `false`**

Our helpful identifier for test writing, only applied to `<select>` element.

```javascript
<Dropdown dataTestId='my-custom-data-test-id' />
```

#### `groupedBy`

**Required: false**  
**Type: `String`**  
**Default: `''`**

To group the array of options this property is passing a string that will contain the value path to group by. The library used is `lodash/groupBy`.

```javascript
const options = [
  { thisIsAGroupKey: 'A', value: 1},
  { thisIsAGroupKey: 'B', value: 2},
  { thisIsAGroupKey: 'A', value: 3},
]

<Dropdown groupedBy='thisIsAGroupKey' options={options}/>
```

#### `options`

**Required: false**  
**Type: `Array`**  
**Default: `[]`**

An array of options to be rendered inside the `<select>`. If not defined the select will not be rendered, instead a `<span/>` will be shown.

```javascript
const options = [
  { value: 1 },
  { value: 2 },
  { value: 3 },
]

<Dropdown options={options} />
```

#### `otherDropdownProps`

**Required: false**  
**Type: `Array`**  
**Default: `[]`**

If specified will spread attributes to `<select>`. Valid attributes are defined in the element documentation: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select#Attributes

```javascript

const otherProps = [
  'multiple',
  'autofocus',
  'disabled'
]

<Dropdown otherDropdownProps={otherProps} />
```

#### `placeholder`

**Required: false**  
**Type: `String`**  
**Default: `''`**

The text to show on the default option

```javascript
<Dropdown placeholder="Select an item" />
```

# Developing

As with all components, the dropdown component should be as self-contained as possible. Styles go in the `styles` directory, and your updated tests (yes, you must write them) go in the `tests` directory.

Additionally, all code should be written in the [Standard](https://github.com/feross/standard) style.

To run tests, simply run `npm test`. This will run all component tests. If you only want to run your tests, use `describe.only` or `it.only`.
