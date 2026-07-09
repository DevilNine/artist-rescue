// scripts/sign.js
// This is a placeholder for custom EV Code Signing logic.
// When an EV Certificate is obtained (e.g. from SSL.com or Sectigo),
// this script handles token passwords and hardware tokens during CI build.

exports.default = async function(configuration) {
  const isCI = process.env.CI === 'true';
  const hasCert = process.env.CSC_LINK || process.env.CSC_NAME;

  if (isCI && hasCert) {
    console.log(`[Signing] Attempting to sign ${configuration.path}`);
    // Standard electron-builder signing happens automatically if CSC_LINK is set.
    // If you use a hardware token, invoke signtool.exe manually here.
  } else {
    console.warn(`[Signing] Skipping signing for ${configuration.path} (No cert or not CI)`);
  }
};
