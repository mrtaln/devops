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
        '@semantic-release/git',
        {
          assets: ['CHANGELOG.md', 'package.json'],
          message: 'Release: v${nextRelease.version}-19',
        },
      ],
      '@semantic-release/version',
    ],
    tagFormat: 'v${version}-19',
  };