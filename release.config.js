const fs = require('fs');
const path = require('path');

module.exports = {
  branches: ['master'], // İzlenecek branch'ler
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'conventionalcommits',
        releaseRules: [
          { type: 'major', release: 'major' }, // Major artırır
          { type: 'minor', release: 'minor' }, // Minor artırır
          { type: 'patch', release: 'patch' }, // Patch artırır
          { type: 'hotfix', release: 'custom' }, // Hotfix özel işlem
        ],
        parserOpts: {
          noteKeywords: ['BREAKING CHANGE'],
        },
      },
    ],
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'package.json'], // Güncellenen dosyalar
        message: 'chore(release): v${nextRelease.version} [skip ci]',
      },
    ],
    './custom-hotfix-plugin.js', // Özel hotfix plugin
  ],
  tagFormat: 'v${nextRelease.version}', // Versiyon formatı
};
