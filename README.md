# Reusable React Components

## Current List of Components

* [Dropdown](/components/dropdown)

---

## Development

### Getting Started

* `git clone git@github.com:fjcero/some-react-components`
* `nvm use`
* `npm install`
* `npm test`
* All green? *Profit!*

### Packaging a component for inclusion

This repo/library is simply a place to provide components to be easily re-used
across apps.

Each component in this repo is its own package, which gets versioned and published separately from all other components. For inspiration, see how [babel](https://github.com/babel/babel) has structured its repo.

There are only a few things you'll need to do:

##### The verbose way (not recommended)

1. Create a new directory in `components` for your component
1. Place your component implementation in `components/component-name`
1. Place your component tests in `components/component-name/tests`
  - It's important that all your test files end in `.test.js` so they can be run recursively
  - e.g. `components/<component-name>/tests/my-component.test.js`
1. Create README.md and CHANGELOG.md files in `components/component-name`. Remember to write stuff
1. Initialize the new npm package with `npm init` or clone a `package.json` from another component
  - The name of your component should use this format: `components.<component-name>`
1. Ensure your component uses named exports.
  - However, should you need to compose via [High Order Components](https://gist.github.com/sebmarkbage/ef0bf1f338a7182b6775), or you have implemented react-redux and thus, `connect`, then default exports are kosher.
1. `npm test`
  - Fix your tests in the event they fail
1. Publish your new voltron component package to our private npmjs repo
  - `npm publish` from within your package folder
