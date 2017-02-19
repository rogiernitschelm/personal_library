var firstFeed; /** global variable declaration (for last test) */
var secondFeed; /** global variable declaration (for last test) */
var allFeedsLength = allFeeds.length;

$(function() {
    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined(); /** allFeeds should be defined */
            expect(allFeedsLength).not.toBe(0); /** length shouldn't be 0 */
            console.log(allFeeds + " allFeeds" + allFeedsLength + " allFeeds length"); /** logging results */
        });

        it('URL is present', function() {
            for (i = 0; i < allFeedsLength; i++) {
                expect(allFeeds[i].url).toBeDefined(); /** check if URL is defined */
                expect(allFeeds[i].url).toContain("http"); /** check if the URL-property contains 'http' */
                expect(allFeeds[i].url.length).toBeGreaterThan(20); /** check if URL has an acceptable length */
            }

            /** NOTE: if a URL is present, it is unlikely it has less than 20 characters */
        });

        it('name is defined', function() {
            for (i = 0; i < allFeedsLength; i++) {
                expect(allFeeds[i].name).toBeDefined(); /** check if name is defined */
                expect(allFeeds[i].name.length).toBeGreaterThan(1); /** check if name length is greater than 1 */
            }

            /** NOTE: the shortest name I know contains 2 characters. I could've used greater than 0 too, of course.*/
        });

    });

    describe('The menu', function() {

        it('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true); /** check if class 'menu-hidden' is present. (true)  */
        });

        it('icon changes state', function() {
            $('.menu-icon-link').trigger('click'); /** click menu-icon-link */
            expect($('body').hasClass('menu-hidden')).toBe(false); /** menu should not be hidden now */
            $('.menu-icon-link').trigger('click'); /** click menu-icon-link again */
            expect($('body').hasClass('menu-hidden')).toBe(true); /** menu should be hidden again now */
        });

    });

    describe('Initial Entries', function() {

        beforeEach(function(done) {
            loadFeed(0, done); /** loadFeed is an asynchronous function. It must be 'done' before we test the spec. */
        });

        it('entry present', function() {
            var entryLength = $('.feed .entry').length;
            expect(entryLength).not.toBe(0); /** if length is 0 then there are no feeds present. */
            console.log(entryLength); /** logging results */
        });

    });

    describe('New Feed Selection', function() {

        beforeEach(function(done) { /** required for asynchronous functions */
            loadFeed(0, function() {
                firstFeed = $('.feed').html(); /** assign this to the global variable 'firstFeed' */
                done();
                console.log(firstFeed + " = firstFeed"); /** logging results */
            });
        });

        it('feed changes state', function(done) {
            loadFeed(1, function() {
                secondFeed = $('.feed').html(); /** assign this to the global variable 'secondFeed' */                
                expect(firstFeed).not.toBe(undefined); /** preventing a comparison with 'undefined' */
                expect(secondFeed).not.toBe(undefined); /** preventing a comparison with 'undefined' */
                expect(firstFeed).not.toEqual(secondFeed); /** check if feeds have changed */
                done();
                console.log(secondFeed + " = secondFeed"); /** logging results */
            });

        });
    });

}());













