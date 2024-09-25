export default defineSitemapEventHandler(async (e) => {
    const posts = await Promise.all([
        {
            _path: '/blog/5-meeting-room-medan-terbaik',
        },
        {
            _path: '/blog/7-coworking-space-di-medan',
        },
        {
            _path: '/blog/fasilitas-sewa-private-office',
        },
        {
            _path: '/blog/sewa-kantor-murah',
        },
        {
            _path: '/blog/coworking-space-vs-sewa-kantor',
        },
        {
            _path: '/blog/coworking-space-vs-private-office-untuk-bisnis',
        },
        {
            _path: '/blog/fasilitas-kantor-sewa-untuk-kerja-yang-nyaman',
        },
        {
            _path: '/blog/manfaat-private-office',
        },
        {
            _path: '/blog/keuntungan-menggunakan-virtual-office-untuk-bisnis-di-medan',
        },
        {
            _path: '/blog/kerja-lebih-fleksibel-dengan-private-office',
        },
    ]);
    return posts.map((post) => ({ loc: post._path }));
});
