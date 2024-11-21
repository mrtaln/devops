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
            { type: 'hotfix', release: 'patch' },
          ],
          parserOpts: {
            noteKeywords: ['BREAKING CHANGE'],
          },
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
          message: 'chore(release): ${nextRelease.version} [skip ci]',
        },
      ],
    ],
    tagFormat: 'v${nextRelease.version}',
  };