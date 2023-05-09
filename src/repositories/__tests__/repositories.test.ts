import {resolveRepositories} from '../repositories'

const missingOwner = require('./configs/missing_owner.json')
const emptyOwner = require('./configs/empty_owner.json')
const invalidOwnerLength = require('./configs/invalid_owner_length.json')
const missingRepositories = require('./configs/missing_repositories.json')
const emptyRepositories = require('./configs/empty_repositories.json')
const valid = require('./configs/valid.json')

describe('Repositories value parsing', () => {
  it.each([
    '',
    missingOwner,
    emptyOwner,
    invalidOwnerLength,
    missingRepositories,
    emptyRepositories
  ])('should return undefined with invalid value', value => {
    expect(resolveRepositories(JSON.stringify(value))).toBeUndefined()
  })
  it('should return object with valid values', () => {
    const result = resolveRepositories(JSON.stringify(valid))
    expect(result?.owner).toEqual('TestOwner')
    expect(result?.repositories).toHaveLength(1)
    expect(result?.repositories[0].name).toEqual('TestRepo')
    expect(result?.repositories[0].from).toEqual('0.0.0')
    expect(result?.repositories[0].to).toEqual('1.0.0')
  })
})
