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
  return undefined
}
