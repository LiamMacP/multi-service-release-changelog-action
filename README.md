# Multiple Service Release Changelog Builder

[![build-test](https://github.com/LiamMacP/multi-service-release-changelog-action/workflows/build-test/badge.svg)](https://github.com/LiamMacP/multi-service-release-changelog-action/blob/main/.github/workflows/test.yml)

A GitHub action that allows you to build comprehensive release notes for multiple services in a single changelog file.

---

## Setup

### Configure the workflow

Specify the action as part of your GitHub actions workflow:

```yml
- name: "Generate Release Notes"
  id: generate_release_notes
  uses: liammacp/multiple-service-release-changelog-action@main
```

### Inputs

| Name         | Description                                                                                                                       | Required | Default |
|--------------|-----------------------------------------------------------------------------------------------------------------------------------|----------|---------|
| repositories | A list of repositories to build changelog entries for. This needs to follow the following [schema](./src/repositories/schema.ts). | Yes      |         |

---

## Authors
This project is created with love by [Liam MacPherson](https://www.liammacpherson.co.uk).

## License
This project is licensed under the MIT license. For details please see [License](./LICENSE).
