const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs');
const s=fs.readFileSync('app/src/main/java/com/crownfall/mosaic/PushDiagnostics.java','utf8');
test('diagnostics records Firebase acceptance, not display',()=>{
  assert.ok(s.includes('lastSubscribeSuccessful'));
  assert.ok(s.includes('does not prove that'));
});
test('diagnostics checks retained token',()=>assert.ok(s.includes('getToken()')));
test('diagnostics uses requested topic',()=>assert.ok(s.includes('subscribeToTopic(topic)')));
