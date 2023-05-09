import * as core from '@actions/core'
import {repositoriesSchema} from './schema'
import {validateSchema} from '../utils/schemaValidator'

export interface Repositories {
  owner: string
  repositories: RepositoryVersions[]
}

interface RepositoryVersions {
  name: string
  from: string
  to: string
}

export function resolveRepositories(
  repositories: string
): Repositories | undefined {
  let value = undefined
  try {
    value = JSON.parse(repositories)
  } catch (error) {
    core.error('Repositories is not a valid object.')
    return undefined
  }

  if (!validateSchema(repositoriesSchema, value)) {
    core.setFailed('Repositories input is invalid.')
    return undefined
  }
  return value
}
