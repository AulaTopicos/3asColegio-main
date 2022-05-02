# Binding Bryntum Calendar data

Bryntum Calendar is a data intensive component that uses several datasets such as events, resources, dependencies,
calendars and other. These datasets usually come from the server and are held in Calendar project during the lifetime
of the Calendar view. There are several ways of populating the project data stores.

## Crud Manager

[Crud Manager](#Scheduler/data/CrudManager) is a built-in class that implements loading and saving of data in multiple
stores. Loading the stores and saving all changes is done in one request.

Crud Manager is the simplest way of binding data to the Bryntum Calendar project stores as seen from the client side, 
but it does require following a specific protocol on the backend. The configuration of Crud Manager can be as simple as:

```typescript
crudManager : { 
    transport : {
        load : {
            url : '/server/load/url'
        },
        sync : {
            url : '/server/save/url'
        }
    },
    autoLoad : true
}
```

With this configuration, the data is loaded and saved from and to the above URLs and the data transport is handled
automatically by Crud Manager.

## Binding existing data to the Bryntum Calendar component

When the application already has a server transport layer then the data for Calendar is available in application 
code and it needs to be passed (bound) to the component. One approach is to make the data available as an Angular 
component class variables and then use them in templates:

### `app.component.ts:`
```typescript
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Calendar, ProjectModel } from '@bryntum/calendar/calendar.lite.umd.js';
import { calendarConfig } from './app.config';
import { DataService } from './data.service';

@Component({
    selector    : 'app-root',
    templateUrl : './app.component.html',
    styleUrls   : ['./app.component.scss'],
    providers   : [DataService]
})
export class AppComponent implements OnInit {

    events       = [];
    dependencies = [];
    resources    = [];
    assignments  = [];
    timeRanges   = [];

    calendarConfig = calendarConfig;

    // Inject data service
    constructor(private dataService:DataService){};

    ngOnInit(): void {
        // Get initial data
        Object.assign(this, this.dataService.getData())
    }
}

```
### `app.component.html:`
```html
<bryntum-calendar
    #calendar
    [columnLines]       = "calendarConfig.columnLines"
    [columns]           = "calendarConfig.columns"
    [subGridConfigs]    = "calendarConfig.subGridConfigs"
    [viewPreset]        = "calendarConfig.viewPreset"
    [timeRangesFeature] = "calendarConfig.timeRangesFeature"
    [events]            = "events"
    [timeRanges]        = "timeRanges"
    [assignments]       = "assignments"
    [resources]         = "resources"
    [dependencies]      = "dependencies"
></bryntum-calendar>
```

`DataService` is a placeholder name in this example and it would be replaced by the service that provides data in your
application.

The key is to supply existing data to the class variables and then use these variables in the template. This approach
is suitable for simpler applications that do not share a `project` between two or more Bryntum components.

## Binding existing data to the project

This approach bind data to a standalone `ProjectModel` and then uses this project in Calendar. Project has its own
markup in the template and it must be assigned to the Calendar during initialization.

This approach is suitable for more complex applications that use more than one Bryntum component that share a common
project:

### `app.component.ts:`
```typescript
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { BryntumCalendarComponent, BryntumProjectModelComponent } from '@bryntum/calendar-angular';
import { Calendar, ProjectModel } from '@bryntum/calendar/calendar.lite.umd.js';
import { calendarConfig, projectConfig } from './app.config';
import { DataService } from './data.service';

@Component({
    selector    : 'app-root',
    templateUrl : './app.component.html',
    styleUrls   : ['./app.component.scss'],
    providers   : [DataService]
})
export class AppComponent implements AfterViewInit, OnInit {

    events       = [];
    dependencies = [];
    resources    = [];
    assignments  = [];
    timeRanges   = [];

    calendarConfig = calendarConfig;
    projectConfig = projectConfig;

    private calendar!: Calendar;
    private project!: ProjectModel;
    private dataSet = 0;

    @ViewChild('calendar') calendarComponent!: BryntumCalendarComponent;
    @ViewChild('project') projectComponent!: BryntumProjectModelComponent;

    // Inject data service
    constructor(private dataService:DataService){};

    ngOnInit(): void {
        // Get initial data
        Object.assign(this, this.dataService.getData())
    }

    ngAfterViewInit(): void {
        // Store Calendar and project instances
        this.project = this.projectComponent.instance;
        this.calendar = this.calendarComponent.instance;

        // Assign project to calendar
        this.calendar.project = this.project;
    }
}

```

### `app.component.html:`
```html
<bryntum-calendar
    #calendar
    [columnLines]       = "calendarConfig.columnLines"
    [columns]           = "calendarConfig.columns"
    [subGridConfigs]    = "calendarConfig.subGridConfigs"
    [viewPreset]        = "calendarConfig.viewPreset"
    [timeRangesFeature] = "calendarConfig.timeRangesFeature"
></bryntum-calendar>
<bryntum-project-model
    #project
    [startDate]    = "projectConfig.startDate!"
    [hoursPerDay]  = "projectConfig.hoursPerDay!"
    [daysPerMonth] = "projectConfig.daysPerMonth!"
    [tasks]        = "tasks"
    [timeRanges]   = "timeRanges"
    [assignments]  = "assignments"
    [resources]    = "resources"
    [dependencies] = "dependencies"
></bryntum-project-model>
```

`DataService` is a placeholder name in this example and it would be replaced by the service that provides data in your
application.



<p class="last-modified">Last modified on 2022-03-04 9:31:46</p>