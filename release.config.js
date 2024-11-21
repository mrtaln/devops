module.exports = {
    branches: ['master'], // İzlenecek branch
    plugins: [
        [
            '@semantic-release/commit-analyzer',
            {
              preset: 'conventionalcommits',
              releaseRules: [
                { type: 'major', release: 'major' },  // Major artışı
                { type: 'minor', release: 'minor' },  // Minor artışı
                { type: 'patch', release: 'patch' },  // Patch artışı
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
          message: 'chore(release): ${version} [skip ci]',
        },
      ],
    ],
    tagFormat: 'v${version}',  // Doğru formatta
  };