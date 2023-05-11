import {Repositories} from './repositories'
import {JSONSchemaType} from 'ajv'

export const repositoriesSchema: JSONSchemaType<Repositories> = {
  $id: 'repositories',
  type: 'object',
  properties: {
    owner: {type: 'string', minLength: 1, maxLength: 39},
    repositories: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name: {type: 'string', minLength: 1, maxLength: 100},
          from: {type: 'string', minLength: 1},
          to: {type: 'string', minLength: 1}
        },
        required: ['name', 'from', 'to'],
        additionalProperties: false
      },
      minItems: 1
    }
  },
  required: ['owner', 'repositories'],
  additionalProperties: false
}
