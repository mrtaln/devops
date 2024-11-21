module.exports = {
  branches: ['master', 'hotfix/*', 'experimental/*'], // Hangi branch'ler izlenecek
  plugins: [
    '@semantic-release/commit-analyzer', // Commit tiplerini analiz eder
    '@semantic-release/release-notes-generator', // Release notları oluşturur
    '@semantic-release/changelog', // Changelog günceller
    [
      '@semantic-release/npm',
      {
        npmPublish: false, // Paket yayınlamayacaksanız false yapın
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'package.json'],
        message: 'chore(release): v${nextRelease.version} [skip ci]',
      },
    ],
  ],
  preset: 'conventionalcommits',
  tagFormat: `v${major}.${minor}.${patch}.${build || 1}-19`,
};
