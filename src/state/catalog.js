// Shop catalogue: figures (price in gold), locations with their artwork, the daily-chest picture.
// Names are stored in players' wallets (wallet.owned / wallet.fig): never rename a figure key.

export const FIGS = {
  classic: {name: 'Классика', price: 0},
  peasant: {name: 'Крестьянин', price: 150},
  monk: {name: 'Монах', price: 300},
  knight: {name: 'Рыцарь', price: 600},
  archer: {name: 'Лучник', price: 900},
  king: {name: 'Король', price: 1500},
  queen: {name: 'Королева', price: 2500},
};

export const LOCS = [
  {name: 'Деревня', desc: 'Дороги, города, реки и крепости', open: true, art: '<rect width="160" height="90" fill="#7cb85a"/><path d="M0 60Q40 40 80 58T160 52V90H0z" fill="#5f9e40"/><path d="M0 70L160 64" stroke="#e2c690" stroke-width="7"/><path d="M110 0Q100 40 120 90" stroke="#3b88cf" stroke-width="9" fill="none"/><g fill="#c1452f"><path d="M28 40l10-10 10 10z"/><path d="M50 44l9-9 9 9z"/></g><g fill="#eadcbc"><rect x="30" y="40" width="16" height="10"/><rect x="52" y="44" width="14" height="9"/></g><path d="M130 30h12v24h-12z" fill="#b7ae9b"/><path d="M136 18l8 4-8 4z" fill="#e04a3a"/>'},
  {name: 'Мегаполис', desc: 'Проспекты, кварталы, метро и небоскрёбы', art: '<rect width="160" height="90" fill="#1d2550"/><circle cx="130" cy="18" r="8" fill="#f4e7b0"/><g fill="#2f3a72"><rect x="8" y="40" width="22" height="50"/><rect x="34" y="22" width="18" height="68"/><rect x="56" y="48" width="24" height="42"/><rect x="84" y="12" width="20" height="78"/><rect x="108" y="34" width="22" height="56"/><rect x="134" y="52" width="20" height="38"/></g><g fill="#ffd36b"><rect x="38" y="30" width="4" height="4"/><rect x="45" y="40" width="4" height="4"/><rect x="88" y="22" width="4" height="4"/><rect x="96" y="36" width="4" height="4"/><rect x="88" y="50" width="4" height="4"/><rect x="12" y="50" width="4" height="4"/><rect x="114" y="44" width="4" height="4"/><rect x="62" y="58" width="4" height="4"/></g>'},
  {name: 'Сибирь', desc: 'Зимники, остроги и замёрзшие реки', art: '<rect width="160" height="90" fill="#a9c7e8"/><path d="M0 60L40 22L70 52L100 18L160 64V90H0z" fill="#e8f1fb"/><path d="M40 22L52 34L44 34L36 30zM100 18L114 32L104 30z" fill="#fff"/><g fill="#2d5a46"><path d="M20 78l8-22 8 22z"/><path d="M120 80l9-26 9 26z"/><path d="M140 84l7-18 7 18z"/></g><path d="M0 82h160v8H0z" fill="#fff"/><g fill="#fff"><circle cx="70" cy="10" r="1.6"/><circle cx="20" cy="16" r="1.4"/><circle cx="140" cy="10" r="1.6"/><circle cx="90" cy="40" r="1.2"/></g>'},
  {name: 'Джунгли', desc: 'Тропы, руины, реки и пирамиды', art: '<rect width="160" height="90" fill="#1f5a3a"/><path d="M60 90L80 40L100 90z" fill="#8f8a6a"/><path d="M66 74h28M70 64h20M74 54h12" stroke="#6d684e" stroke-width="3"/><g fill="#2e8a4e"><ellipse cx="18" cy="30" rx="30" ry="12" transform="rotate(-25 18 30)"/><ellipse cx="146" cy="24" rx="32" ry="12" transform="rotate(25 146 24)"/><ellipse cx="20" cy="80" rx="30" ry="10" transform="rotate(20 20 80)"/><ellipse cx="140" cy="78" rx="30" ry="10" transform="rotate(-20 140 78)"/></g><path d="M0 0Q30 40 10 90" stroke="#3a9e5a" stroke-width="3" fill="none"/>'},
];

export const CHEST_SVG = '<svg viewBox="0 0 64 56" width="72" height="63" aria-hidden="true"><rect x="6" y="22" width="52" height="30" rx="4" fill="#9a5b2c"/><rect x="6" y="22" width="52" height="7" fill="#7b4521"/><path d="M6 22 Q32 0 58 22 Z" fill="#b36a32"/><rect x="28" y="14" width="8" height="38" fill="#f2b84b"/><rect x="26" y="26" width="12" height="10" rx="2" fill="#ffd36b" stroke="#8a5a12" stroke-width="1.5"/><rect x="6" y="38" width="52" height="3" fill="#f2b84b"/></svg>';
