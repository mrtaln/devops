module.exports = {
    branches: ['master'],
    plugins: [
      [
        '@semantic-release/commit-analyzer',
        {
          preset: 'conventionalcommits',
          releaseRules: [
            { type: 'major', release: 'major' },
            { type: 'minor', release: 'minor' },
            { type: 'patch', release: 'patch' },
          ],
        },
      ],
      '@semantic-release/release-notes-generator',
      [
        '@semantic-release/changelog',
        {
          changelogFile: 'CHANGELOG.md',
        },
      ],
      [
        '@semantic-release/exec',
        {
          prepareCmd: 'npm version ${nextRelease.version}-19 --no-git-tag-version',
        },
      ],
      [
        '@semantic-release/git',
        {
          assets: ['CHANGELOG.md', 'package.json'],
          message: 'Release: v${nextRelease.version}-19',
        },
      ],
    ],
    tagFormat: 'v${version}-19',
  };