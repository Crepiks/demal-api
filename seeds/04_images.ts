import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('images').del();
  await knex('images').insert([
    {
      id: 1,
      path:
        'https://avatars.mds.yandex.net/get-zen_doc/3311877/pub_5f2d3139e3927c2d2cfcbaee_5f2d357859dc5a64a781d36c/scale_1200',
    },
    {
      id: 2,
      path:
        'https://lh3.googleusercontent.com/proxy/aV-NdTteqhe8gIeVaiFcqPHXVcFSr-jqfL_YX4EHCJ_aS7aoNfB49ImlMpxAnw2CELKLbgCoqZeSv-wcA_2NHXpxrtYZDk2Rr4oRUQC4mjrPAmAFVd1cqIIo_iT0kcrXPU-nVHx6l2AlbpZh-snR7E1tvQ',
    },
    {
      id: 3,
      path:
        'https://avatars.mds.yandex.net/get-zen_doc/1537151/pub_5f2d3139e3927c2d2cfcbaee_5f2d353a6e602e1b309cae1b/scale_1200',
    },
    {
      id: 4,
      path: 'https://tatmuseum.ru/wp-content/uploads/2014/07/DSC_0345.jpg',
    },
    {
      id: 5,
      path:
        'https://images.inlearno.ru/events_preview/ba9f7cb858f3d33c8c66067906e51c72_big.jpg',
    },
    {
      id: 6,
      path:
        'https://tatmuseum.ru/wp-content/uploads/2014/08/SDC12753-1024x768.jpg',
    },
    {
      id: 7,
      path:
        'https://i.pinimg.com/564x/ac/6d/72/ac6d72f5056e8a9d85a64811cdff5113.jpg',
    },
    {
      id: 8,
      path:
        'https://media.kupo.la/thumbor/unsafe/preset/orig/images/2021/3/18/1616059571-60fa15da-531a-4a25-aef2-2c2e57b6f445-Vitoslavlitsy6-1[1].jpg',
    },
    {
      id: 9,
      path:
        'https://piterevent.ru/ssl/u/15/862bd7142904ff97bc8a4690b5d590/+/cGl0ZXJldmVudC5ydQ==!%D0%97%D0%B0%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%BD%D1%8B%D0%B9%20%D0%BA%D0%BE%D1%80%D0%BF%D0%BE%D1%80%D0%B0%D1%82%D0%B8%D0%B2%20%D0%BB%D0%B5%D1%82%D0%BE%D0%BC.jpg',
    },
    {
      id: 10,
      path: 'https://www.activetravel.com.ua/wp-content/uploads/2019/02/1.jpg',
    },
    {
      id: 11,
      path: 'http://boligr.ru/wp-content/uploads/2017/03/5-2-768x514.jpg',
    },
    {
      id: 12,
      path:
        'https://ifvremya.ru/wp-content/uploads/2020/10/korporativ-na-prirode3.jpg',
    },
    {
      id: 13,
      path:
        'https://lh3.googleusercontent.com/proxy/CoB7Wdk78cZcx58GWwo323aIc-67rhHmVFms73l43Nr8SIV20sJtFhK5WCE0cklt63dfAZh34zgF13y9VIWahPZzTPZu-2s3y0_M1GohT2vFIF0VHP0tM5bmvNCXCic9',
    },
    {
      id: 14,
      path: 'https://www.peski13.ru/upload/iblock/f3e/priroda.jpg',
    },
    {
      id: 15,
      path:
        'https://opt-1131384.ssl.1c-bitrix-cdn.ru/upload/iblock/ad6/ad655d6f195ab9ae5d6089b0b9e291ee.jpg?1530773362162236',
    },
    {
      id: 16,
      path: 'https://catering-muscat.ru/img/blog/blog_corporate_out-1.jpg',
    },
    {
      id: 17,
      path:
        'https://www.svoiludi.ru/images/tb/14853/fishing-tours-15759686358801_w687h357.jpg',
    },
    {
      id: 18,
      path:
        'https://lh3.googleusercontent.com/proxy/OKkJir7rgBcRChaqkgObpKdth-FmK9gUuW8OojUckJF53rarfHvVmzRrQGP4zplo9HO-dZgmm7ioOuHwZZ90W7m1d23wJC8h_N5vMFtL7fAZfciiATwtgBzDqTrt2-ZT',
    },
    {
      id: 19,
      path:
        'https://ae01.alicdn.com/kf/Hc2a0f68d71b540e5abde58fac2b6bdf0Y/There-is-improved-version-4-side-60-100-cm-fish-shrimp-crab-nylon-bait-fishing-net.jpg',
    },
    {
      id: 20,
      path:
        'http://zavidovo.kz/wp-content/uploads/2016/09/zimnie-palatki-dlya-rybalki-v-almate.jpg',
    },
    {
      id: 21,
      path:
        'https://lh3.googleusercontent.com/proxy/rJWyDG90eS479PA_bLeeRdbM9lpBo3IAs8FSMI34MOUYMNVu81FFwJafSwkYf8bu5lPPfBBubiQX6YN_6AJkgyjLfO2cLybK0kEzW3k',
    },
    {
      id: 22,
      path: 'https://borovoe.kz/upload/borovoe_rybalka.jpg',
    },
    {
      id: 23,
      path:
        'https://artwalls.com.ua/image/catalog/fpz/5c1bb0770b78bVF-35_o.jpg',
    },
    {
      id: 24,
      path:
        'https://timetrial.ru/upload/iblock/d99/d9907e25ccd2c81bd50c37989e8c3682.jpg',
    },
    {
      id: 25,
      path:
        'https://golubino.org/wp-content/uploads/2020/01/%D0%93%D0%B5%D1%80%D0%BD%D0%B5%D1%82-%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D0%B9-2.jpg',
    },
    {
      id: 26,
      path:
        'https://lh3.googleusercontent.com/proxy/okdaQCn6CTN_yZWIenwtmeY70LoXRyOiezMuN_1HZzISeB7zPe8bhqxIvf3xPqlWJwBBEw8nAISZKa0pqWh4rCTq9otSL6ZrDogj7PFejFOQ3YhQJgWc',
    },
    {
      id: 27,
      path:
        'https://lh3.googleusercontent.com/proxy/jmSv7LhafTZmLtHzKfsabP43TkG540kO27lD3YsoAXL0HZYXinWkn56LP0rYDnxPbvfXDrs5cz1jrbpNAuRMJkTzsq4Mc70gUnvOHNYoMMtE6taW_5FL',
    },
    {
      id: 28,
      path:
        'https://avatars.mds.yandex.net/get-zen_doc/3137181/pub_5f21ef2d091b0b16b84d13a7_5f21f1726b597f2c72d501c7/scale_1200',
    },
    {
      id: 29,
      path:
        'http://ic.pics.livejournal.com/love_smirnova/76342246/331715/331715_1000.jpg',
    },
    {
      id: 30,
      path: 'https://cdn.dvinanews.ru/sv1uw52u/bjm9.jpg',
    },
    {
      id: 31,
      path: 'https://f.otzyv.ru/f/11/12/92763/p09111722305615133022.jpg',
    },
    {
      id: 32,
      path:
        'https://im.kommersant.ru/Issues.photo/CORP/2020/10/02/KMO_177956_00415_1_t222_204445.jpg',
    },
  ]);
}
