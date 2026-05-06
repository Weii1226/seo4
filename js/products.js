const products = [
    { id: 'm1', name: '夜之帝王 (Night King)', price: 3200, category: 'men', image: 'images/perfume_m_1.png', desc: '深沉的木質調，展現王者風範。' },
    { id: 'm2', name: '原野騎士 (Wild Knight)', price: 2800, category: 'men', image: 'images/perfume_m_2.png', desc: '粗獷與優雅的完美結合，帶有皮革與雪松香氣。' },
    { id: 'm3', name: '深海謎團 (Deep Sea)', price: 2500, category: 'men', image: 'images/perfume_m_3.png', desc: '清新的海洋氣息，適合活力的現代男性。' },
    { id: 'm4', name: '經典菸草 (Classic Tobacco)', price: 3500, category: 'men', image: 'images/perfume_m_4.png', desc: '溫暖的琥珀與菸草香，成熟穩重的極致表現。' },
    
    { id: 'w1', name: '晨露玫瑰 (Morning Rose)', price: 2900, category: 'women', image: 'images/perfume_w_1.png', desc: '柔美的玫瑰香氛，彷彿清晨盛開的花朵。' },
    { id: 'w2', name: '金色華麗 (Gold Glamour)', price: 4200, category: 'women', image: 'images/perfume_w_2.png', desc: '奢華的花果香調，閃耀無盡魅力。' },
    { id: 'w3', name: '清新柑橘 (Fresh Citrus)', price: 2200, category: 'women', image: 'images/perfume_w_3.png', desc: '充滿活力的柑橘與檸檬，帶來清爽體驗。' },
    { id: 'w4', name: '致命誘惑 (Fatal Attraction)', price: 3800, category: 'women', image: 'images/perfume_w_4.png', desc: '神秘的紅玫瑰與麝香，散發極致性感。' },
    
    { id: 'o1', name: '極簡白 (Minimal White)', price: 2600, category: 'other', image: 'images/perfume_o_1.png', desc: '純淨無瑕的中性香，適合日常每一個瞬間。' },
    { id: 'o2', name: '復古藥房 (Vintage Apothecary)', price: 3100, category: 'other', image: 'images/perfume_o_2.png', desc: '獨特的草本植物香氣，彷彿回到過去的時光。' },
    { id: 'o3', name: '森林秘境 (Forest Secret)', price: 2700, category: 'other', image: 'images/perfume_o_3.png', desc: '綠色植物與青草香，自然與和平的象徵。' },
    { id: 'o4', name: '午夜黑 (Midnight Black)', price: 4500, category: 'other', image: 'images/perfume_o_4.png', desc: '極致奢華的中性香精，濃郁且持久。' },
    { id: 'o5', name: '藝術家 (The Artist)', price: 3300, category: 'other', image: 'images/perfume_o_5.png', desc: '充滿創意與不對稱的美感，果香與花香交織。' },
    { id: 'o6', name: '冰霜之心 (Frost Heart)', price: 2400, category: 'other', image: 'images/perfume_o_6.png', desc: '冰涼的薄荷與白麝香，帶來冷靜的氣息。' },
    { id: 'o7', name: '東方香料 (Oriental Spice)', price: 3600, category: 'other', image: 'images/perfume_o_7.png', desc: '充滿異國情調的辛香料，熱情且迷人。' },
    { id: 'o8', name: '幻影立方 (Phantom Cube)', price: 4000, category: 'other', image: 'images/perfume_o_8.png', desc: '前衛的香氛結構，挑戰你的感官極限。' }
];
