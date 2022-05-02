const scheduler = new Calendar({
    appendTo   : targetElement,
    height     : 600,

    // Not enough space in this context for a sidebar
    sidebar : null,

    // Not enough space in this context for a full top toolbar
    tbar : {
        items : {
            todayButton : null,
            prevButton  : null,
            nextButton  : null
        }
    },

    // Not enough space in this context for all modes
    modes : {
        agenda : null
    },

    // Hardcoded inline data - use for POC only.
    // Use CrudManager in implementation.
    resources : [
        { id : 1, name : 'Mr Boss' }
    ],
    events : [
        { resourceId : 1, startDate : '2020-08-31T09:00:00', duration : 3, durationUnit : 'h', name : 'Important meeting', note : 'Wear a tie!' }
    ],

    // Start life looking at this date
    date   : '2020-08-31',

    visibleStartTime : 7,

    features : {
        // So as not to interfere with the editor
        eventTooltip : null,

        eventEdit : {
            items : {
                // Custom field to edit notes about the event
                noteField : {
                    // Type of field to use
                    type  : 'text',
                    // Label to show for the field
                    label : 'Notes',
                    // Name of the field in the event record to read/write data to.
                    // This name is matched with the name of the field in the event record.
                    // NOTE: Make sure your EventModel has this field for this to link up correctly
                    name  : 'note'
                }
            }
        }
    }
});