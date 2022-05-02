StartTest(t => {
    t.setWindowSize([1024, 500]);

    const calendar = bryntum.query('calendar');

    t.it('Webpack demo sanity test', t => {
        t.chain(
            { waitFor : () => calendar, desc : 'Calendar is here' },
            { waitForSelector : '.demo-header' },
            () => {
                const
                    headerElement = document.querySelector('.demo-header'),
                    headerRect    = headerElement.getBoundingClientRect();
                t.isApproxPx(headerRect.top, 0, 'Header has valid top');
                t.is(window.getComputedStyle(headerElement).backgroundColor, 'rgb(38, 103, 200)', 'Header has valid color');
                t.selectorCountIs('.b-cal-event', 37, 'Event selector count is ok');
            }
        );
    });
});
