"use strict";

var {
  Calendar
} = bryntum.calendar;
var calendar = new Calendar({
  appendTo: 'container',
  // Start life looking at this date
  date: new Date(2022, 8, 12),
  crudManager: {
    transport: {
      load: {
        url: 'data/data.json'
      }
    },
    autoLoad: true,
    listeners: {
      load() {
        var {
          resourceFilter,
          showUnassigned
        } = calendar.widgetMap; // Populate our resourceFilter with the resources available

        resourceFilter.store = calendar.resourceStore;
        resourceFilter.value = [resourceFilter.store.getById('hotelpark')]; // Our custom resource filtering.
        // We consult the resourceFilter and the showUnassiged switch.

        calendar.eventStore.filter(event => event.resourceId ? resourceFilter.valueCollection.includes(event.resourceId) : showUnassigned.checked);
      }

    }
  },
  modes: {
    day: {
      showAllDayHeader: false
    },
    week: {
      showAllDayHeader: false
    },
    year: null,
    agenda: null,
    resource: true
  },
  sidebar: {
    // Constrain our resourceFilter which doesn't wrap its chips
    width: 250,
    items: {
      eventFilter: null,
      // Date picker collapses into its header when collapsible is true
      datePicker: {
        title: 'Month Navigation',
        collapsible: true
      },
      showUnassigned: {
        weight: 150,
        type: 'slidetoggle',
        label: 'Show unassigned',
        // "up." means resolve in owner will call on the Calender
        onChange: 'up.onFilterCriteriaChange'
      },
      // Override the default one.
      resourceFilter: {
        type: 'combo',
        multiSelect: true,
        listCls: 'custom-resource-filter',
        // The value is the records selected
        valueField: null,
        // What narrowing by typing works on
        displayField: 'name',
        // Show the list fixed below
        inlinePicker: true,
        listItemTpl: resource => `
                    <div class="resource-list-text">
                        <div class="resource-name">${resource.name}</div>
                        <div class="resource-type">${resource.type}</div>
                    </div>
                `,
        // "up." means resolve in owner will call on the Calendar
        onChange: 'up.onFilterCriteriaChange',
        // We want the ChipView to scroll horizontally with no wrapping.
        chipView: {
          itemTpl: resource => `${resource.name}`,
          scrollable: {
            overflowX: 'hidden-scroll',
            overflowY: false
          },
          style: {
            flexWrap: 'nowrap'
          }
        }
      }
    }
  },

  // Called as the showUnassigned and resourceFilterFilter onChange handler
  onFilterCriteriaChange() {
    // No params means just re-evaluate the filter.
    this.eventStore.filter();
  }

});