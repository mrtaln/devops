const fs = require('fs');
const path = require('path');

module.exports = {
  generateNotes: async (pluginConfig, context) => {
    const { nextRelease } = context;

    // Mevcut versiyon numarasını yükle
    const currentVersion = nextRelease.version || '0.0.0.0';
    const versionParts = currentVersion.split('.').map(Number);

    if (context.lastRelease.version && context.lastRelease.version.includes('-hotfix')) {
      // Hotfix için "W" kısmını artır
      versionParts[3] = (versionParts[3] || 0) + 1;
    } else {
      // Normal patch artırma
      versionParts[2] = (versionParts[2] || 0) + 1;
      versionParts[3] = 1; // Yeni hotfix'e başla
    }

    // Yeni versiyonu oluştur
    const newVersion = versionParts.join('.');
    nextRelease.version = newVersion;

    return `## ${newVersion} - Hotfix Applied`;
  },
};
