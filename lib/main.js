'use babel'

const provider = require('./provider')

module.exports = {
  config: {
    autocompleteEnabled: {
      title: 'Enable autocomplete',
      type: 'boolean',
      default: true
    },
    elmOraclePath: {
      title: 'The elm-oracle executable path (used for autocomplete)',
      type: 'string',
      default: 'elm-oracle'
    },
    minCharsForAutocomplete: {
      title: 'The min number of characters to enter before autocomplete appears',
      type: 'number',
      default: 1
    }
  },

  provide () {
    return [provider]
  }
}
