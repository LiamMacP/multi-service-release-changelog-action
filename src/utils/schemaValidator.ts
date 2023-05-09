import * as core from '@actions/core'
import Ajv, {JSONSchemaType} from 'ajv'
const ajv = new Ajv()

export function validateSchema<Type>(
  schema: JSONSchemaType<Type>,
  data: object
): boolean {
  core.debug(`Attempting to validate schema for schema "${schema.$id}".`)

  const validate = ajv.compile(schema)
  if (!validate) {
    core.setFailed(`Failed to compile schema for schema "${schema.$id}".`)
    return false
  }

  const validateResult = validate(data)
  if (!validateResult) {
    core.setFailed(`Failed to validate input for schema "${schema.$id}".`)
    return false
  }
  return true
}
