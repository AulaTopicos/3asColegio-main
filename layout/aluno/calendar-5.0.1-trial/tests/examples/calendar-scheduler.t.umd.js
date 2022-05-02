"use strict";

StartTest(t => {
  let scheduler;
  t.beforeEach(t => {
    scheduler = bryntum.query('scheduler');
  });
  t.it('Sanity', t => {
    t.chain({
      click: '.b-sch-event-wrap:contains(Relax)'
    }, {
      waitForSelector: '.b-sch-event-tooltip.b-eventedit.b-eventtip.b-floating:contains(Relax)'
    }, {
      click: '.b-popup-close.b-tool'
    }, {
      waitForSelectorNotFound: '.b-sch-event-tooltip.b-eventedit.b-eventtip.b-floating:contains(beer)'
    }, {
      dblclick: '.b-sch-event-wrap:contains(Relax)'
    }, {
      waitForSelector: '.b-eventeditor'
    }, {
      click: '[data-ref="nameField"] .b-icon-remove.b-fieldtrigger'
    }, {
      type: 'Free Beer!'
    }, {
      click: '[data-ref="saveButton"]'
    }, {
      drag: '.b-timeaxissubgrid .b-grid-row[data-index="1"',
      offset: [100, '50%'],
      by: [200, 0]
    }, {
      waitFor: () => {
        var _scheduler$features$e;

        return (_scheduler$features$e = scheduler.features.eventEdit.editor) === null || _scheduler$features$e === void 0 ? void 0 : _scheduler$features$e.containsFocus;
      }
    }, {
      type: 'Drag created'
    }, {
      click: '[data-ref="saveButton"]'
    }, // drag-create must have worked
    next => {
      t.is(scheduler.eventStore.findByField('name', 'Drag created').length, 1);
      t.selectorExists('.b-sch-event-wrap:contains(Drag created)');
      next();
    }, {
      click: '[data-ref="weekShowButton"]'
    }, {
      waitForSelector: '.b-cal-event-wrap:contains(Free Beer)'
    }, {
      waitForSelectorNotFound: '.b-cal-event-wrap:contains(Relax)'
    });
  }); // https://github.com/bryntum/support/issues/3323

  t.it('Step buttons should step one week', t => {
    t.chain({
      click: '[data-ref="timelineShowButton"]'
    }, {
      click: '[data-ref=nextButton]'
    }, async () => {
      t.is(scheduler.timeAxis.startDate, new Date(2020, 9, 18, 7), 'Moved one week');
    }, {
      click: '[data-ref=nextButton]'
    }, async () => {
      t.is(scheduler.timeAxis.startDate, new Date(2020, 9, 25, 7), 'Moved another week');
    }, {
      click: '[data-ref=prevButton]'
    }, async () => {
      t.is(scheduler.timeAxis.startDate, new Date(2020, 9, 18, 7), 'Moved back a week');
    });
  });
});