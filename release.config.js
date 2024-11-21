module.exports = {
    branches: ['master'], // İzlenecek branch
    plugins: [
      '@semantic-release/commit-analyzer',
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