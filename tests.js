var expect = require('chai').expect
var { describe, it } = require('mocha')
var deliverStormTroopersEscapeScene = require('./index')

describe('StarWarsScene', function () {
  it('returns shots and lines for Luke, Leia, and Han\'s escape scene', function () {
    var rebels = [
      { name: 'Luke Skywalker', plotArmor: true },
      { name: 'Leia Organa', plotArmor: true },
      { name: 'Han Solo', plotArmor: true },
    ]

    expect(deliverStormTroopersEscapeScene(rebels))
      .to.deep.equal([
        'Look! Rebel scum!', 'Look! Rebel scum!', 'Look! Rebel scum!',
        'Oh no! They\'re getting away!', 'Oh no! They\'re getting away!', 'Oh no! They\'re getting away!',
        'pew', 'pew', 'pew', 'pew'
      ])
  })

  it('returns only shots when the rebels include random extras', function () {
    var rebels = [
      { name: 'Chewbacca', plotArmor: true },
      { name: 'Some Rebel', plotArmor: false },
      { name: 'Another Anonymous Rebel', plotArmor: false },
    ]

    expect(deliverStormTroopersEscapeScene(rebels))
      .to.deep.equal([
        'Look! Rebel scum!', 'Look! Rebel scum!', 'Look! Rebel scum!',
        'Oh no! They\'re getting away!', 'pew', 'pew', 'pew', 'pew'
      ])
  })

  it('returns shots and lines for 3PO and Artoo\'s escape scene', function () {
    var rebels = [
      { name: 'R2D2', plotArmor: true },
      { name: 'C3PO', plotArmor: true },
    ]

    expect(deliverStormTroopersEscapeScene(rebels))
      .to.deep.equal([
        'Look! Rebel scum!', 'Look! Rebel scum!', 'Oh no! They\'re getting away!',
        'Oh no! They\'re getting away!', 'pew', 'pew', 'pew', 'pew'
      ])
  })

  it('returns shots at nothing when there are no rebels', function () {
    var rebels = []

    expect(deliverStormTroopersEscapeScene(rebels))
      .to.deep.equal(['pew', 'pew', 'pew', 'pew'])
  })
})
