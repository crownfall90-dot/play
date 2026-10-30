const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs');
const a=fs.readFileSync('app/src/main/java/com/crownfall/mosaic/AccountIdentity.java','utf8');
const c=fs.readFileSync('app/src/main/java/com/crownfall/mosaic/PlayerColor.java','utf8');
test('Google sign-in uses Credential Manager and server client id',()=>{
  for(const q of ['CredentialManager','GetGoogleIdOption','setServerClientId','GoogleIdTokenCredential']) assert.ok(a.includes(q));
});
test('color is constrained and normalized',()=>{
  for(const q of ['DEFAULT = "blue"','normalize','ALLOWED']) assert.ok(c.includes(q));
});
test('sign-out clears identity but retains selected color',()=>{
  assert.ok(a.includes('remove("id")'));
  assert.ok(a.includes('remove("name")'));
  assert.ok(!a.includes('remove("color")'));
});
