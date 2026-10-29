const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs');
const s=fs.readFileSync('web/game.html','utf8');
test('account UI exposes Google sign-in and color picker',()=>{
  for(const q of ['account-sign-in','account-color','account-profile']) assert.ok(s.includes(q));
});
test('color picker uses the fixed six-color palette',()=>{
  for(const color of ['blue','red','green','yellow','purple','orange']) assert.ok(s.includes(`data-color="${color}"`));
});
test('missing Google client id has an explicit state',()=>assert.ok(s.includes('Google-вход не настроен')));
