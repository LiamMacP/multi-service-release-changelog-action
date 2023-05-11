import * as core from '@actions/core'
import {resolveRepositories} from './repositories/repositories'
import {getInput} from './utils/github'

async function run(): Promise<void> {
  core.startGroup('📖 Parsing input parameters')
  resolveRepositories(getInput('repositories', true))
}

run()
