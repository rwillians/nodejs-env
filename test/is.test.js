'use strict'

const env = require('../index')
const { expect } = require('chai')

describe('const env = require(\'sugar-env\')', () => {
  describe('env.is(environment: String): Boolean', () => {
    process.env['NODE_ENV'] = 'development'

    it('returns `true` if the given environment name is the current environment', () => {
      expect(env.is('development')).to.be.equals(true)
    })

    it('returns `false` when the given environment name doesn\'t match the current environment', () => {
      expect(env.is('production')).to.be.equals(false)
    })
  })
})
