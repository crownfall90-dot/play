const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs');
const s=fs.readFileSync('app/src/main/java/com/crownfall/mosaic/UpdateNotifier.java','utf8');
test('source guard: mark only after Android accepts submission',()=>assert.ok(s.includes('if (show(c, version, notes)) prefs(c).edit().putInt("notified", code).apply();')));
test('source guard: concurrent announcements serialized',()=>assert.ok(s.includes('static synchronized void announce(')));
test('source guard: permission and disabled channel checked',()=>{for(const q of ['areNotificationsEnabled()', 'POST_NOTIFICATIONS', 'getNotificationChannel(CHANNEL)', 'NotificationManager.IMPORTANCE_NONE']) assert.ok(s.includes(q));});
test('source guard: denied notification is not marked',()=>assert.ok(s.includes('catch (SecurityException denied) { return false; }')));
