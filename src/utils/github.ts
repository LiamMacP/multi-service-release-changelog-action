import * as core from '@actions/core'

export function getInput(
  inputName: string,
  trimWhitespace = false,
  defaultValue = ''
): string {
  return (
    core.getInput(inputName, {
      trimWhitespace
    }) || defaultValue
  )
}
