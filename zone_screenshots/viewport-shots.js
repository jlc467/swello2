//var zoneIds = [ 'GMZ830', 'GMZ873' ];
var zoomOutFactors = [ 0, 10 ];
var save_directory = 'screenshots';

module.exports = {
  'Body is visible': function(browser) {
    browser.url(`http://localhost:3000/`).waitForElementVisible('body', 1000);
  },
  'Viewport Screenshots': function(browser) {
    zoneIds.forEach(function(zoneId) {
      zoomOutFactors.forEach(function(zoomOutFactor) {
        browser
          .url(`http://localhost:3000/#/zoneId/${zoneId}?zoomOutFactor=${zoomOutFactor}`)
          .resizeWindow(750, 1334)
          .pause(4000)
          .getTitle(function(title) {
            this.saveScreenshot(`${save_directory}/${title}.${zoomOutFactor}.png`, function() {
              console.log(`Took snapshot of ${zoneId} @ ${zoomOutFactor}`);
            });
          });
      });
    });
    browser.end();
  }
};

var zoneIds = [
  'amz100',
  'amz130',
  'amz131',
  'amz135',
  'amz136',
  'amz137',
  'amz150',
  'amz152',
  'amz154',
  'amz156',
  'amz158',
  'amz200',
  'amz250',
  'amz252',
  'amz254',
  'amz256',
  'amz300',
  'amz330',
  'amz350',
  'amz352',
  'amz354',
  'amz374',
  'amz400',
  'amz450',
  'amz452',
  'amz454',
  'amz470',
  'amz472',
  'amz474',
  'amz500',
  'amz550',
  'amz552',
  'amz555',
  'amz570',
  'amz572',
  'amz575',
  'amz600',
  'amz610',
  'amz630',
  'amz650',
  'amz651',
  'amz670',
  'amz671',
  'anz005',
  'anz050',
  'anz051',
  'anz052',
  'anz100',
  'anz150',
  'anz151',
  'anz152',
  'anz153',
  'anz154',
  'anz200',
  'anz230',
  'anz231',
  'anz232',
  'anz233',
  'anz234',
  'anz235',
  'anz236',
  'anz237',
  'anz250',
  'anz251',
  'anz254',
  'anz255',
  'anz256',
  'anz300',
  'anz330',
  'anz335',
  'anz338',
  'anz340',
  'anz345',
  'anz350',
  'anz353',
  'anz355',
  'anz400',
  'anz430',
  'anz431',
  'anz450',
  'anz451',
  'anz452',
  'anz453',
  'anz454',
  'anz455',
  'anz500',
  'anz530',
  'anz531',
  'anz532',
  'anz533',
  'anz534',
  'anz535',
  'anz536',
  'anz537',
  'anz538',
  'anz539',
  'anz540',
  'anz541',
  'anz542',
  'anz543',
  'anz600',
  'anz630',
  'anz631',
  'anz632',
  'anz633',
  'anz634',
  'anz635',
  'anz636',
  'anz637',
  'anz638',
  'anz650',
  'anz652',
  'anz654',
  'anz656',
  'anz658',
  'caz043',
  'caz552',
  'gmz005',
  'gmz031',
  'gmz032',
  'gmz033',
  'gmz034',
  'gmz035',
  'gmz042',
  'gmz043',
  'gmz044',
  'gmz052',
  'gmz053',
  'gmz054',
  'gmz055',
  'gmz072',
  'gmz073',
  'gmz074',
  'gmz075',
  'gmz100',
  'gmz130',
  'gmz132',
  'gmz135',
  'gmz150',
  'gmz155',
  'gmz170',
  'gmz175',
  'gmz200',
  'gmz230',
  'gmz235',
  'gmz250',
  'gmz255',
  'gmz270',
  'gmz275',
  'gmz300',
  'gmz330',
  'gmz335',
  'gmz350',
  'gmz355',
  'gmz370',
  'gmz375',
  'gmz400',
  'gmz430',
  'gmz432',
  'gmz435',
  'gmz450',
  'gmz452',
  'gmz455',
  'gmz470',
  'gmz472',
  'gmz475',
  'gmz500',
  'gmz501',
  'gmz530',
  'gmz532',
  'gmz534',
  'gmz536',
  'gmz538',
  'gmz550',
  'gmz552',
  'gmz555',
  'gmz557',
  'gmz570',
  'gmz572',
  'gmz575',
  'gmz577',
  'gmz600',
  'gmz606',
  'gmz630',
  'gmz631',
  'gmz632',
  'gmz633',
  'gmz634',
  'gmz635',
  'gmz650',
  'gmz655',
  'gmz656',
  'gmz657',
  'gmz670',
  'gmz675',
  'gmz676',
  'gmz700',
  'gmz730',
  'gmz750',
  'gmz755',
  'gmz765',
  'gmz770',
  'gmz775',
  'gmz800',
  'gmz830',
  'gmz836',
  'gmz850',
  'gmz853',
  'gmz856',
  'gmz870',
  'gmz873',
  'gmz876',
  'phz100',
  'phz110',
  'phz111',
  'phz112',
  'phz113',
  'phz114',
  'phz115',
  'phz116',
  'phz117',
  'phz118',
  'phz119',
  'phz120',
  'phz121',
  'phz122',
  'phz123',
  'phz124',
  'pkz119',
  'pkz120',
  'pkz121',
  'pkz125',
  'pkz126',
  'pkz127',
  'pkz128',
  'pkz129',
  'pkz130',
  'pkz131',
  'pkz132',
  'pkz136',
  'pkz137',
  'pkz138',
  'pkz139',
  'pkz140',
  'pkz141',
  'pkz150',
  'pkz155',
  'pkz160',
  'pkz165',
  'pkz170',
  'pkz171',
  'pkz172',
  'pkz173',
  'pkz174',
  'pkz175',
  'pkz176',
  'pkz177',
  'pkz178',
  'pkz179',
  'pkz180',
  'pkz181',
  'pkz185',
  'pkz200',
  'pkz210',
  'pkz215',
  'pkz220',
  'pkz225',
  'pkz230',
  'pkz235',
  'pkz240',
  'pkz245',
  'pkz298',
  'pkz299',
  'pmz150',
  'pmz151',
  'pmz152',
  'pmz153',
  'pmz154',
  'pmz161',
  'pmz171',
  'pmz172',
  'pmz173',
  'pmz174',
  'pmz181',
  'psz100',
  'psz150',
  'psz151',
  'psz152',
  'pzz100',
  'pzz130',
  'pzz131',
  'pzz132',
  'pzz133',
  'pzz134',
  'pzz135',
  'pzz150',
  'pzz153',
  'pzz156',
  'pzz170',
  'pzz173',
  'pzz176',
  'pzz200',
  'pzz210',
  'pzz250',
  'pzz255',
  'pzz270',
  'pzz275',
  'pzz300',
  'pzz400',
  'pzz450',
  'pzz455',
  'pzz470',
  'pzz475',
  'pzz500',
  'pzz530',
  'pzz531',
  'pzz535',
  'pzz540',
  'pzz545',
  'pzz560',
  'pzz565',
  'pzz570',
  'pzz571',
  'pzz575',
  'pzz576',
  'pzz600',
  'pzz645',
  'pzz650',
  'pzz655',
  'pzz670',
  'pzz673',
  'pzz676',
  'pzz700',
  'pzz750',
  'pzz775'
];

