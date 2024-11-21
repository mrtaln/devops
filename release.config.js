module.exports = {
    branches: ['master'], // İzlenecek branch
    plugins: [
      '@semantic-release/commit-analyzer',
      '@semantic-release/release-notes-generator',  // Bu plugin, nextRelease'i oluşturur
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