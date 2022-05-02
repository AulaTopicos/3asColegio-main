!function(e,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var r=n();for(var o in r)("object"==typeof exports?exports:e)[o]=r[o]}}(window,(function(){return function(e){var n={};function r(o){if(n[o])return n[o].exports;var t=n[o]={i:o,l:!1,exports:{}};return e[o].call(t.exports,t,t.exports,r),t.l=!0,t.exports}return r.m=e,r.c=n,r.d=function(e,n,o){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)r.d(o,t,function(n){return e[n]}.bind(null,t));return o},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r(r.s="./examples/_shared/locales/examples.locale.Ru.js")}({"../Core/lib/Core/localization/LocaleHelper.js":
/*!*****************************************************!*\
  !*** ../Core/lib/Core/localization/LocaleHelper.js ***!
  \*****************************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LocaleHelper; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }\n\n/**\n * @module Core/localization/LocaleHelper\n */\n\n/**\n * Provides locale management methods.\n */\nvar LocaleHelper = /*#__PURE__*/function () {\n  function LocaleHelper() {\n    _classCallCheck(this, LocaleHelper);\n  }\n\n  _createClass(LocaleHelper, null, [{\n    key: "mergeLocales",\n    value:\n    /**\n     * Merges all properties of provided locales into new locale.\n     * Locales are merged in order they provided and locales which go later replace same properties of previous locales.\n     * @param {...Object} locales Locales to merge\n     * @return {Object} Merged locale\n     */\n    function mergeLocales() {\n      var result = {};\n\n      for (var _len = arguments.length, locales = new Array(_len), _key = 0; _key < _len; _key++) {\n        locales[_key] = arguments[_key];\n      }\n\n      locales.forEach(function (locale) {\n        Object.keys(locale).forEach(function (key) {\n          if (_typeof(locale[key]) === \'object\') {\n            result[key] = _objectSpread(_objectSpread({}, result[key]), locale[key]);\n          } else {\n            result[key] = locale[key];\n          }\n        });\n      });\n      return result;\n    }\n    /**\n     * Removes all properties from `locale` that are present in the provided `toTrim`.\n     * @param {Object} locale Locale to process\n     * @param {Object} toTrim Object enumerating properties that should be removed\n     * @param {boolean} [silent=true] When `true` ignores missing properties that should be removed (default).\n     * When `false` throws exceptions in such cases.\n     */\n\n  }, {\n    key: "trimLocale",\n    value: function trimLocale(locale, toTrim) {\n      var silent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;\n\n      var remove = function remove(key, subKey) {\n        if (locale[key]) {\n          if (subKey) {\n            if (locale[key][subKey]) {\n              delete locale[key][subKey];\n            }\n          } else {\n            delete locale[key];\n          }\n        }\n      };\n\n      Object.keys(toTrim).forEach(function (key) {\n        if (Object.keys(toTrim[key]).length > 0) {\n          Object.keys(toTrim[key]).forEach(function (subKey) {\n            return remove(key, subKey);\n          });\n        } else {\n          remove(key);\n        }\n      });\n    }\n    /**\n     * Put the locale under `globalThis.bryntum.locales` to make sure it can be discovered automatically\n     * @param {String} localeName Locale name\n     * @param {Object} config Locale config\n     */\n\n  }, {\n    key: "publishLocale",\n    value: function publishLocale(localeName, config) {\n      var bryntum = globalThis.bryntum = globalThis.bryntum || {},\n          locales = bryntum.locales = bryntum.locales || {}; // Avoid registering locales twice\n\n      locales[localeName] = !locales[localeName] ? config : this.mergeLocales(locales[localeName], config);\n    }\n  }]);\n\n  return LocaleHelper;\n}();\n\n\n\n//# sourceURL=webpack:///../Core/lib/Core/localization/LocaleHelper.js?')},"../Core/lib/Core/localization/Ru.js":
/*!*******************************************!*\
  !*** ../Core/lib/Core/localization/Ru.js ***!
  \*******************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\nvar localeName = 'Ru',\n    localeDesc = 'Русский',\n    locale = {\n  localeName: localeName,\n  localeDesc: localeDesc,\n  Object: {\n    Yes: 'Да',\n    No: 'Нет',\n    Cancel: 'Отмена',\n    Ok: 'OK'\n  },\n  //region Widgets\n  Combo: {\n    noResults: 'Нет результатов',\n    recordNotCommitted: 'Запись не может быть добавлена',\n    addNewValue: function addNewValue(value) {\n      return \"\\u0434\\u043E\\u0431\\u0430\\u0432\\u0438\\u0442\\u044C \".concat(value);\n    }\n  },\n  FilePicker: {\n    file: 'Файл'\n  },\n  Field: {\n    // native input ValidityState statuses\n    badInput: 'Недопустимое значение поля',\n    patternMismatch: 'Значение должно соответствовать определенному шаблону',\n    rangeOverflow: function rangeOverflow(value) {\n      return \"\\u0417\\u043D\\u0430\\u0447\\u0435\\u043D\\u0438\\u0435 \\u0434\\u043E\\u043B\\u0436\\u043D\\u043E \\u0431\\u044B\\u0442\\u044C \\u043C\\u0435\\u043D\\u044C\\u0448\\u0435 \\u0438\\u043B\\u0438 \\u0440\\u0430\\u0432\\u043D\\u043E \".concat(value.max);\n    },\n    rangeUnderflow: function rangeUnderflow(value) {\n      return \"\\u0417\\u043D\\u0430\\u0447\\u0435\\u043D\\u0438\\u0435 \\u0434\\u043E\\u043B\\u0436\\u043D\\u043E \\u0431\\u044B\\u0442\\u044C \\u0431\\u043E\\u043B\\u044C\\u0448\\u0435 \\u0438\\u043B\\u0438 \\u0440\\u0430\\u0432\\u043D\\u043E \".concat(value.min);\n    },\n    stepMismatch: 'Значение должно соответствовать шагу',\n    tooLong: 'Значение должно быть короче',\n    tooShort: 'Значение должно быть длиннее',\n    typeMismatch: 'Значение должно быть в специальном формате',\n    valueMissing: 'Поле не может быть пустым',\n    invalidValue: 'Недопустимое значение поля',\n    minimumValueViolation: 'Нарушение минимального значения',\n    maximumValueViolation: 'Нарушение максимального значения',\n    fieldRequired: 'Поле не может быть пустым',\n    validateFilter: 'Выберите значение из списка'\n  },\n  DateField: {\n    invalidDate: 'Невернывй формат даты'\n  },\n  DatePicker: {\n    gotoPrevYear: 'Перейти к предыдущему году',\n    gotoPrevMonth: 'Перейти к предыдущему месяцу',\n    gotoNextMonth: 'Перейти в следующий месяц',\n    gotoNextYear: 'Перейти в следующий год'\n  },\n  NumberFormat: {\n    locale: 'ru',\n    currency: 'RUB'\n  },\n  DurationField: {\n    invalidUnit: 'Неверные единицы'\n  },\n  TimeField: {\n    invalidTime: 'Неверный формат времени'\n  },\n  TimePicker: {\n    hour: 'Час',\n    minute: 'Минуты'\n  },\n  List: {\n    loading: 'Загрузка...'\n  },\n  // needed here due to LoadMaskable\n  GridBase: {\n    loadMask: 'Загрузка...',\n    syncMask: 'Сохраняю данные, пожалуйста подождите...'\n  },\n  PagingToolbar: {\n    firstPage: 'Перейти на первую страницу',\n    prevPage: 'Перейти на предыдущую страницу',\n    page: 'страница',\n    nextPage: 'Перейти на следующую страницу',\n    lastPage: 'Перейти на последнюю страницу',\n    reload: 'Перезагрузить текущую страницу',\n    noRecords: 'Нет записей для отображения',\n    pageCountTemplate: function pageCountTemplate(data) {\n      return \"\\u0438\\u0437 \".concat(data.lastPage);\n    },\n    summaryTemplate: function summaryTemplate(data) {\n      return \"\\u041F\\u043E\\u043A\\u0430\\u0437\\u0430\\u043D\\u044B \\u0437\\u0430\\u043F\\u0438\\u0441\\u0438 \".concat(data.start, \" - \").concat(data.end, \" \\u0438\\u0437 \").concat(data.allCount);\n    }\n  },\n  PanelCollapser: {\n    Collapse: 'Свернуть',\n    Expand: 'Развернуть'\n  },\n  Popup: {\n    close: 'Закрыть окно'\n  },\n  UndoRedo: {\n    Undo: 'Отменить',\n    Redo: 'Повторить',\n    UndoLastAction: 'Отменить последнее действие',\n    RedoLastAction: 'Повторить последнее отмененное действие'\n  },\n  //endregion\n  //region Others\n  DateHelper: {\n    locale: 'ru',\n    weekStartDay: 1,\n    // Non-working days which match weekends by default, but can be changed according to schedule needs\n    nonWorkingDays: {\n      0: true,\n      6: true\n    },\n    // Days considered as weekends by the selected country, but could be working days in the schedule\n    weekends: {\n      0: true,\n      6: true\n    },\n    unitNames: [{\n      single: 'миллисек',\n      plural: 'миллисек',\n      abbrev: 'мс'\n    }, {\n      single: 'секунда',\n      plural: 'секунд',\n      abbrev: 'с'\n    }, {\n      single: 'минута',\n      plural: 'минут',\n      abbrev: 'мин'\n    }, {\n      single: 'час',\n      plural: 'часов',\n      abbrev: 'ч'\n    }, {\n      single: 'день',\n      plural: 'дней',\n      abbrev: 'д'\n    }, {\n      single: 'неделя',\n      plural: 'недели',\n      abbrev: 'нед'\n    }, {\n      single: 'месяц',\n      plural: 'месяцев',\n      abbrev: 'мес'\n    }, {\n      single: 'квартал',\n      plural: 'кварталов',\n      abbrev: 'квар'\n    }, {\n      single: 'год',\n      plural: 'лет',\n      abbrev: 'г'\n    }, {\n      single: 'десятилетие',\n      plural: 'десятилетия',\n      abbrev: 'дес'\n    }],\n    // Used to build a RegExp for parsing time units.\n    // The full names from above are added into the generated Regexp.\n    // So you may type \"2 н\" or \"2 нед\" or \"2 неделя\" or \"2 недели\" into a DurationField.\n    // When generating its display value though, it uses the full localized names above.\n    unitAbbreviations: [['мс', 'мил'], ['с', 'сек'], ['м', 'мин'], ['ч'], ['д', 'ден', 'дне'], ['н', 'нед'], ['мес'], ['к', 'квар', 'квр'], ['г'], ['дес']],\n    parsers: {\n      L: 'DD.MM.YYYY',\n      LT: 'HH:mm'\n    },\n    ordinalSuffix: function ordinalSuffix(number) {\n      return \"\".concat(number, \"-\\u0439\");\n    }\n  },\n  //endregion\n  //region Trial\n  TrialButton: {\n    downloadTrial: 'Пробная версия'\n  },\n  TrialPanel: {\n    title: 'Пожалуйста, заполните поля',\n    name: 'Имя',\n    email: 'Email',\n    company: 'Компания',\n    product: 'Продукт',\n    cancel: 'Отмена',\n    submit: 'Отправить',\n    downloadStarting: 'Загрузка начинается, подождите ...'\n  } //endregion\n\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (locale);\n\n//# sourceURL=webpack:///../Core/lib/Core/localization/Ru.js?")},"../Grid/examples/_shared/locales/shared.locale.Ru.js":
/*!************************************************************!*\
  !*** ../Grid/examples/_shared/locales/shared.locale.Ru.js ***!
  \************************************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  \"extends\": 'Ru',\n  Button: {\n    'Display hints': 'Показать подсказки',\n    Apply: 'Применить'\n  },\n  Checkbox: {\n    'Auto apply': 'Применять сразу',\n    Automatically: 'Автоматически'\n  },\n  CodeEditor: {\n    'Code editor': 'Редактор кода',\n    'Download code': 'Скачать код'\n  },\n  Combo: {\n    Theme: 'Выбрать тему',\n    Language: 'Выбрать язык',\n    Size: 'Выбрать размер'\n  },\n  Shared: {\n    'Locale changed': 'Язык изменен',\n    'Full size': 'Полный размер',\n    'Phone size': 'Экран смартфона'\n  },\n  Tooltip: {\n    infoButton: 'Показать редактор кода',\n    codeButton: 'Показать информацию, переключить тему или язык',\n    hintCheck: 'Автоматически показывать подсказки при загрузке примера',\n    fullscreenButton: 'На весь экран'\n  }\n});\n\n//# sourceURL=webpack:///../Grid/examples/_shared/locales/shared.locale.Ru.js?")},"../Grid/lib/Grid/localization/Ru.js":
/*!*******************************************!*\
  !*** ../Grid/lib/Grid/localization/Ru.js ***!
  \*******************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Core_localization_Ru_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Core/localization/Ru.js */ \"../Core/lib/Core/localization/Ru.js\");\n/* harmony import */ var _Core_localization_LocaleHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Core/localization/LocaleHelper.js */ \"../Core/lib/Core/localization/LocaleHelper.js\");\n\n\nvar // This will be a truthy empty string so it can be used as a localized result.\nemptyString = new String(),\n    // eslint-disable-line no-new-wrappers\nlocale = _Core_localization_LocaleHelper_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mergeLocales(_Core_localization_Ru_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n  //region Features\n  ColumnPicker: {\n    column: 'Колонка',\n    columnsMenu: 'Колонки',\n    hideColumn: 'Спрятать колонку',\n    hideColumnShort: 'Спрятать',\n    newColumns: 'Новые столбцы'\n  },\n  Filter: {\n    applyFilter: 'Применить фильтр',\n    filter: 'Фильтр',\n    editFilter: 'Изменить фильтр',\n    on: 'В этот день',\n    before: 'До',\n    after: 'После',\n    equals: 'Равно',\n    lessThan: 'Меньше, чем',\n    moreThan: 'Больше, чем',\n    removeFilter: 'Убрать фильтр'\n  },\n  FilterBar: {\n    enableFilterBar: 'Показать панель фильтров',\n    disableFilterBar: 'Спрятать панель фильтров'\n  },\n  Group: {\n    group: 'Группа',\n    groupAscending: 'Группа по возрастанию',\n    groupDescending: 'Группа по убыванию',\n    groupAscendingShort: 'Возрастание',\n    groupDescendingShort: 'Убывание',\n    stopGrouping: 'Убрать группу',\n    stopGroupingShort: 'Убрать'\n  },\n  MergeCells: {\n    mergeCells: 'Объединить ячейки',\n    menuTooltip: 'Объединить ячейки с одинаковыми значениями при сортировке по этому столбцу'\n  },\n  HeaderMenu: {\n    moveBefore: function moveBefore(text) {\n      return \"\\u0420\\u0430\\u0441\\u043F\\u043E\\u043B\\u043E\\u0436\\u0438\\u0442\\u044C \\u043F\\u0435\\u0440\\u0435\\u0434 \\\"\".concat(text, \"\\\"\");\n    },\n    moveAfter: function moveAfter(text) {\n      return \"\\u0420\\u0430\\u0441\\u043F\\u043E\\u043B\\u043E\\u0436\\u0438\\u0442\\u044C \\u043F\\u043E\\u0441\\u043B\\u0435 \\\"\".concat(text, \"\\\"\");\n    }\n  },\n  Search: {\n    searchForValue: 'Найти значение'\n  },\n  Sort: {\n    sort: 'Сортировка',\n    sortAscending: 'Сортировать по возрастанию',\n    sortDescending: 'Сортировать по убыванию',\n    multiSort: 'Сложная сортировка',\n    removeSorter: 'Убрать сортировку',\n    addSortAscending: 'Добавить сортировку по возрастанию',\n    addSortDescending: 'Добавить сортировку по убыванию',\n    toggleSortAscending: 'Сортировать по возрастанию',\n    toggleSortDescending: 'Сортировать по убыванию',\n    sortAscendingShort: 'Возрастание',\n    sortDescendingShort: 'Убывание',\n    removeSorterShort: 'Убрать',\n    addSortAscendingShort: '+ Возраст...',\n    addSortDescendingShort: '+ Убыв...'\n  },\n  //endregion\n  //region Grid\n  Column: {\n    columnLabel: function columnLabel(column) {\n      return \"\".concat(column.text ? \"\".concat(column.text, \" \\u0441\\u0442\\u043E\\u043B\\u0431\\u0435\\u0446. \") : '', \"\\u041F\\u0420\\u041E\\u0411\\u0415\\u041B \\u0434\\u043B\\u044F \\u043A\\u043E\\u043D\\u0442\\u0435\\u043A\\u0441\\u0442\\u043D\\u043E\\u0433\\u043E \\u043C\\u0435\\u043D\\u044E\").concat(column.sortable ? ', ENTER для сортировки' : '');\n    },\n    cellLabel: emptyString\n  },\n  Checkbox: {\n    toggleRowSelect: 'Переключить выделение строки',\n    toggleSelection: 'Переключить выбор всего набора данных'\n  },\n  RatingColumn: {\n    cellLabel: function cellLabel(column) {\n      var _column$location;\n\n      return \"\".concat(column.text ? column.text : '', \" \").concat((_column$location = column.location) !== null && _column$location !== void 0 && _column$location.record ? \"rating : \".concat(column.location.record[column.field]) : '');\n    }\n  },\n  GridBase: {\n    loadFailedMessage: 'Не удалось загрузить!',\n    syncFailedMessage: 'Не удалось синхронизировать!',\n    unspecifiedFailure: 'Неуказанная ошибка',\n    networkFailure: 'Ошибка сети',\n    parseFailure: 'Не удалось разобрать ответ сервера',\n    // moved to Core for LoadMaskable:\n    // loadMask           : 'Загрузка...',\n    // syncMask           : 'Сохраняю данные, пожалуйста подождите...',\n    noRows: 'Нет записей для отображения',\n    moveColumnLeft: 'Передвинуть в левую секцию',\n    moveColumnRight: 'Передвинуть в правую секцию',\n    moveColumnTo: function moveColumnTo(region) {\n      return \"\\u041F\\u0435\\u0440\\u0435\\u043C\\u0435\\u0441\\u0442\\u0438\\u0442\\u044C \\u043A\\u043E\\u043B\\u043E\\u043D\\u043A\\u0443 \\u0432 \\u0441\\u0435\\u043A\\u0446\\u0438\\u044E \".concat(region);\n    }\n  },\n  CellMenu: {\n    removeRow: 'Удалить'\n  },\n  RowCopyPaste: {\n    copyRecord: 'Копировать',\n    cutRecord: 'Вырезать',\n    pasteRecord: 'Вставить'\n  },\n  //endregion\n  //region Export\n  PdfExport: {\n    'Waiting for response from server': 'Ожидание ответа от сервера...',\n    'Export failed': 'Не удалось экспортировать',\n    'Server error': 'На сервере произошла ошибка',\n    'Generating pages': 'Генерация страниц...'\n  },\n  ExportDialog: {\n    width: '40em',\n    labelWidth: '13em',\n    exportSettings: 'Настройки',\n    \"export\": 'Экспорт',\n    exporterType: 'Разбивка на страницы',\n    cancel: 'Отмена',\n    fileFormat: 'Формат файла',\n    rows: 'Строки',\n    alignRows: 'Выровнять строки',\n    columns: 'Колонки',\n    paperFormat: 'Размер листа',\n    orientation: 'Ориентация',\n    repeatHeader: 'Повторять заголовок'\n  },\n  ExportRowsCombo: {\n    all: 'Все строки',\n    visible: 'Видимые строки'\n  },\n  ExportOrientationCombo: {\n    portrait: 'Портретная',\n    landscape: 'Ландшафтная'\n  },\n  SinglePageExporter: {\n    singlepage: 'Одна страница'\n  },\n  MultiPageExporter: {\n    multipage: 'Многостраничный',\n    exportingPage: function exportingPage(_ref) {\n      var currentPage = _ref.currentPage,\n          totalPages = _ref.totalPages;\n      return \"\\u042D\\u043A\\u0441\\u043F\\u043E\\u0440\\u0442 \\u0441\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u044B \".concat(currentPage, \"/\").concat(totalPages);\n    }\n  },\n  MultiPageVerticalExporter: {\n    multipagevertical: 'Многостраничный (по вертикали)',\n    exportingPage: function exportingPage(_ref2) {\n      var currentPage = _ref2.currentPage,\n          totalPages = _ref2.totalPages;\n      return \"\\u042D\\u043A\\u0441\\u043F\\u043E\\u0440\\u0442 \\u0441\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u044B \".concat(currentPage, \"/\").concat(totalPages);\n    }\n  } //endregion\n\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (locale);\n\n//# sourceURL=webpack:///../Grid/lib/Grid/localization/Ru.js?")},"../Scheduler/lib/Scheduler/localization/Ru.js":
/*!*****************************************************!*\
  !*** ../Scheduler/lib/Scheduler/localization/Ru.js ***!
  \*****************************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Grid_localization_Ru_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Grid/localization/Ru.js */ \"../Grid/lib/Grid/localization/Ru.js\");\n/* harmony import */ var _Core_localization_LocaleHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Core/localization/LocaleHelper.js */ \"../Core/lib/Core/localization/LocaleHelper.js\");\n\n\nvar locale = _Core_localization_LocaleHelper_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mergeLocales(_Grid_localization_Ru_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n  Object: {\n    newEvent: 'Новое событие'\n  },\n  ResourceInfoColumn: {\n    eventCountText: function eventCountText(data) {\n      return data + ' ' + (data >= 2 && data <= 4 ? 'события' : data !== 1 ? 'событий' : 'событие');\n    }\n  },\n  Dependencies: {\n    from: 'От',\n    to: 'К',\n    valid: 'Верная',\n    invalid: 'Неверная'\n  },\n  DependencyType: {\n    SS: 'НН',\n    SF: 'НО',\n    FS: 'ОН',\n    FF: 'ОО',\n    StartToStart: 'Начало-Начало',\n    StartToEnd: 'Начало-Окончание',\n    EndToStart: 'Окончание-Начало',\n    EndToEnd: 'Окончание-Окончание',\n    \"short\": ['НН', 'НО', 'ОН', 'ОО'],\n    \"long\": ['Начало-Начало', 'Начало-Окончание', 'Окончание-Начало', 'Окончание-Окончание']\n  },\n  EventEdit: {\n    Name: 'Название',\n    Resource: 'Ресурс',\n    Start: 'Начало',\n    End: 'Конец',\n    Save: 'Сохранить',\n    Delete: 'Удалить',\n    Cancel: 'Отмена',\n    'Edit event': 'Изменить событие',\n    Repeat: 'Повтор'\n  },\n  DependencyEdit: {\n    From: 'От',\n    To: 'К',\n    Type: 'Тип',\n    Lag: 'Запаздывание',\n    'Edit dependency': 'Редактировать зависимость',\n    Save: 'Сохранить',\n    Delete: 'Удалить',\n    Cancel: 'Отменить',\n    StartToStart: 'Начало к Началу',\n    StartToEnd: 'Начало к Окончанию',\n    EndToStart: 'Окончание к Началу',\n    EndToEnd: 'Окончание к Окончанию'\n  },\n  EventDrag: {\n    eventOverlapsExisting: 'Событие перекрывает существующее событие для этого ресурса',\n    noDropOutsideTimeline: 'Событие не может быть отброшено полностью за пределами графика'\n  },\n  SchedulerBase: {\n    'Add event': 'Добавить событие',\n    'Delete event': 'Удалить событие',\n    'Unassign event': 'Убрать назначение с события'\n  },\n  TimeAxisHeaderMenu: {\n    pickZoomLevel: 'Выберите масштаб',\n    activeDateRange: 'Диапазон дат',\n    startText: 'Начало',\n    endText: 'Конец',\n    todayText: 'Сегодня'\n  },\n  EventCopyPaste: {\n    copyEvent: 'Копировать событие',\n    cutEvent: 'Вырезать событие',\n    pasteEvent: 'Вставить событие'\n  },\n  EventFilter: {\n    filterEvents: 'Фильтровать задачи',\n    byName: 'По имени'\n  },\n  TimeRanges: {\n    showCurrentTimeLine: 'Показать линию текущего времени'\n  },\n  PresetManager: {\n    minuteAndHour: {\n      topDateFormat: 'ddd DD.MM, HH:mm'\n    },\n    hourAndDay: {\n      topDateFormat: 'ddd DD.MM'\n    },\n    weekAndDay: {\n      displayDateFormat: 'HH:mm'\n    }\n  },\n  RecurrenceConfirmationPopup: {\n    'delete-title': 'Вы удаляете повторяющееся событие',\n    'delete-all-message': 'Хотите удалить все повторения этого события?',\n    'delete-further-message': 'Хотите удалить это и все последующие повторения этого события или только выбранное?',\n    'delete-further-btn-text': 'Удалить все будущие повторения',\n    'delete-only-this-btn-text': 'Удалить только это событие',\n    'update-title': 'Вы изменяете повторяющееся событие',\n    'update-all-message': 'Изменить все повторения события?',\n    'update-further-message': 'Изменить только это повторение или это и все последующие повторения события?',\n    'update-further-btn-text': 'Все будущие повторения',\n    'update-only-this-btn-text': 'Только это событие',\n    Yes: 'Да',\n    Cancel: 'Отменить',\n    width: 600\n  },\n  RecurrenceLegend: {\n    ' and ': ' и ',\n    // frequency patterns\n    Daily: 'Ежедневно',\n    'Weekly on {1}': function WeeklyOn1(_ref) {\n      var days = _ref.days;\n      return \"\\u0415\\u0436\\u0435\\u043D\\u0435\\u0434\\u0435\\u043B\\u044C\\u043D\\u043E (\".concat(days, \")\");\n    },\n    'Monthly on {1}': function MonthlyOn1(_ref2) {\n      var days = _ref2.days;\n      return \"\\u0415\\u0436\\u0435\\u043C\\u0435\\u0441\\u044F\\u0447\\u043D\\u043E (\\u0434\\u0435\\u043D\\u044C: \".concat(days, \")\");\n    },\n    'Yearly on {1} of {2}': function YearlyOn1Of2(_ref3) {\n      var days = _ref3.days,\n          months = _ref3.months;\n      return \"\\u0415\\u0436\\u0435\\u0433\\u043E\\u0434\\u043D\\u043E (\\u0434\\u0435\\u043D\\u044C: \".concat(days, \", \\u043C\\u0435\\u0441\\u044F\\u0446: \").concat(months, \")\");\n    },\n    'Every {0} days': function Every0Days(_ref4) {\n      var interval = _ref4.interval;\n      return \"\\u041A\\u0430\\u0436\\u0434\\u044B\\u0439 \".concat(interval, \" \\u0434\\u0435\\u043D\\u044C\");\n    },\n    'Every {0} weeks on {1}': function Every0WeeksOn1(_ref5) {\n      var interval = _ref5.interval,\n          days = _ref5.days;\n      return \"\\u041A\\u0430\\u0436\\u0434\\u0443\\u044E \".concat(interval, \" \\u043D\\u0435\\u0434\\u0435\\u043B\\u044E, \\u0434\\u0435\\u043D\\u044C: \").concat(days);\n    },\n    'Every {0} months on {1}': function Every0MonthsOn1(_ref6) {\n      var interval = _ref6.interval,\n          days = _ref6.days;\n      return \"\\u041A\\u0430\\u0436\\u0434\\u044B\\u0439 \".concat(interval, \" \\u043C\\u0435\\u0441\\u044F\\u0446, \\u0434\\u0435\\u043D\\u044C: \").concat(days);\n    },\n    'Every {0} years on {1} of {2}': function Every0YearsOn1Of2(_ref7) {\n      var interval = _ref7.interval,\n          days = _ref7.days,\n          months = _ref7.months;\n      return \"\\u041A\\u0430\\u0436\\u0434\\u044B\\u0439 \".concat(interval, \" \\u0433\\u043E\\u0434, \\u0434\\u0435\\u043D\\u044C: \").concat(days, \" \\u043C\\u0435\\u0441\\u044F\\u0446: \").concat(months);\n    },\n    // day position translations\n    position1: 'первый',\n    position2: 'второй',\n    position3: 'третий',\n    position4: 'четвертый',\n    position5: 'пятый',\n    'position-1': 'последний',\n    // day options\n    day: 'день',\n    weekday: 'будний день',\n    'weekend day': 'выходной день',\n    // {0} - day position info (\"the last\"/\"the first\"/...)\n    // {1} - day info (\"Sunday\"/\"Monday\"/.../\"day\"/\"weekday\"/\"weekend day\")\n    // For example:\n    //  \"the last Sunday\"\n    //  \"the first weekday\"\n    //  \"the second weekend day\"\n    daysFormat: function daysFormat(_ref8) {\n      var position = _ref8.position,\n          days = _ref8.days;\n      return \"\".concat(position, \" \").concat(days);\n    }\n  },\n  RecurrenceEditor: {\n    'Repeat event': 'Повторять событие',\n    Cancel: 'Отменить',\n    Save: 'Сохранить',\n    Frequency: 'Как часто',\n    Every: 'Каждый(ую)',\n    DAILYintervalUnit: 'день',\n    WEEKLYintervalUnit: 'неделю',\n    MONTHLYintervalUnit: 'месяц',\n    YEARLYintervalUnit: 'год/лет',\n    Each: 'Какого числа',\n    'On the': 'В следующие дни',\n    'End repeat': 'Прекратить',\n    'time(s)': 'раз(а)'\n  },\n  RecurrenceDaysCombo: {\n    day: 'день',\n    weekday: 'будний день',\n    'weekend day': 'выходной день'\n  },\n  RecurrencePositionsCombo: {\n    position1: 'первый',\n    position2: 'второй',\n    position3: 'третий',\n    position4: 'четвертый',\n    position5: 'пятый',\n    'position-1': 'последний'\n  },\n  RecurrenceStopConditionCombo: {\n    Never: 'Никогда',\n    After: 'После',\n    'On date': 'В дату'\n  },\n  RecurrenceFrequencyCombo: {\n    Daily: 'Каждый день',\n    Weekly: 'Каждую неделю',\n    Monthly: 'Каждый месяц',\n    Yearly: 'Каждый год'\n  },\n  RecurrenceCombo: {\n    None: 'Не выбрано',\n    Custom: 'Настроить...'\n  },\n  //region Features\n  Summary: {\n    'Summary for': function SummaryFor(date) {\n      return \"\\u0421\\u0432\\u043E\\u0434\\u043A\\u0430 \\u043D\\u0430 \".concat(date);\n    }\n  },\n  //endregion\n  //region Export\n  ScheduleRangeCombo: {\n    completeview: 'Полное расписание',\n    currentview: 'Текущая видимая область',\n    daterange: 'Диапазон дат',\n    completedata: 'Полное расписание (по всем событиям)'\n  },\n  SchedulerExportDialog: {\n    'Schedule range': 'Диапазон расписания',\n    'Export from': 'С',\n    'Export to': 'По'\n  },\n  ExcelExporter: {\n    'No resource assigned': 'Ресурс не назначен'\n  },\n  //endregion\n  CrudManagerView: {\n    serverResponseLabel: 'Ответ сервера:'\n  },\n  DurationColumn: {\n    Duration: 'Длительность'\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (locale);\n\n//# sourceURL=webpack:///../Scheduler/lib/Scheduler/localization/Ru.js?")},"./examples/_shared/locales/examples.locale.Ru.js":
/*!********************************************************!*\
  !*** ./examples/_shared/locales/examples.locale.Ru.js ***!
  \********************************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_Core_localization_LocaleHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/Core/localization/LocaleHelper.js */ "../Core/lib/Core/localization/LocaleHelper.js");\n/* harmony import */ var _lib_Calendar_localization_Ru_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/Calendar/localization/Ru.js */ "./lib/Calendar/localization/Ru.js");\n/* harmony import */ var _shared_locale_Ru_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared.locale.Ru.js */ "../Grid/examples/_shared/locales/shared.locale.Ru.js");\n\n\n\nvar examplesRuLocale = _lib_Core_localization_LocaleHelper_js__WEBPACK_IMPORTED_MODULE_0__["default"].mergeLocales(_shared_locale_Ru_js__WEBPACK_IMPORTED_MODULE_2__["default"], {\n  "extends": \'Ru\'\n});\n_lib_Core_localization_LocaleHelper_js__WEBPACK_IMPORTED_MODULE_0__["default"].publishLocale(\'Ru\', _lib_Calendar_localization_Ru_js__WEBPACK_IMPORTED_MODULE_1__["default"]);\n_lib_Core_localization_LocaleHelper_js__WEBPACK_IMPORTED_MODULE_0__["default"].publishLocale(\'RuExamples\', examplesRuLocale);\n/* harmony default export */ __webpack_exports__["default"] = (examplesRuLocale);\n\n//# sourceURL=webpack:///./examples/_shared/locales/examples.locale.Ru.js?')},"./lib/Calendar/localization/Ru.js":
/*!*****************************************!*\
  !*** ./lib/Calendar/localization/Ru.js ***!
  \*****************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Scheduler_localization_Ru_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Scheduler/localization/Ru.js */ \"../Scheduler/lib/Scheduler/localization/Ru.js\");\n/* harmony import */ var _Core_localization_LocaleHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Core/localization/LocaleHelper.js */ \"../Core/lib/Core/localization/LocaleHelper.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\nvar locale = _Core_localization_LocaleHelper_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mergeLocales(_Scheduler_localization_Ru_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n  EventEdit: {\n    Calendar: 'Календарь',\n    'All day': 'На весь день',\n    day: 'День',\n    week: 'Неделя',\n    month: 'Месяц',\n    year: 'Год',\n    decade: 'Десятилетие'\n  },\n  EventMenu: {\n    duplicateEvent: 'копировать событие',\n    copy: 'копия'\n  },\n  Calendar: {\n    Today: 'Сегодня',\n    next: function next(range) {\n      var next = range.includes('неделя') ? 'следующая' : 'следующий';\n      return \"\".concat(next, \" \").concat(range);\n    },\n    previous: function previous(range) {\n      var previous = range.includes('неделя') ? 'предыдущая' : 'предыдущий';\n      return \"\".concat(previous, \" \").concat(range);\n    },\n    plusMore: function plusMore(value) {\n      return \"\\u0415\\u0449\\u0435 +\".concat(value);\n    },\n    allDay: 'На весь день',\n    endsOn: function endsOn(d) {\n      return \"\\u0417\\u0430\\u043A\\u0430\\u043D\\u0447\\u0438\\u0432\\u0430\\u0435\\u0442\\u0441\\u044F \".concat(d);\n    },\n    weekOfYear: function weekOfYear(_ref) {\n      var _ref2 = _slicedToArray(_ref, 2),\n          y = _ref2[0],\n          w = _ref2[1];\n\n      return \"\\u041D\\u0435\\u0434\\u0435\\u043B\\u044F \".concat(w, \", \").concat(y);\n    }\n  },\n  CalendarDrag: {\n    holdCtrlForRecurrence: 'Удерживайте CTRL для повторяющегося события'\n  },\n  CalendarMixin: {\n    eventCount: function eventCount(count) {\n      return \"\".concat(count || 'Нет', \" \").concat(count === 1 ? 'событие' : 'событий');\n    }\n  },\n  EventTip: {\n    'Edit event': 'Редактировать событие',\n    timeFormat: 'LT'\n  },\n  AgendaView: {\n    Agenda: 'Повестка дня'\n  },\n  MonthView: {\n    Month: 'Месяц',\n    monthUnit: 'месяц'\n  },\n  WeekView: {\n    Week: 'Неделя',\n    weekUnit: 'неделя'\n  },\n  YearView: {\n    Year: 'Год',\n    yearUnit: 'год'\n  },\n  EventList: {\n    List: 'Список',\n    Start: 'Начало',\n    Finish: 'Конец'\n  },\n  DayView: {\n    Day: 'День',\n    dayUnit: 'день',\n    daysUnit: 'дни',\n    expandAllDayRow: 'Развернуть группу событий на весь день',\n    collapseAllDayRow: 'Свернуть группу событий на весь день',\n    timeFormat: 'LT'\n  },\n  Sidebar: {\n    'Filter events': 'Фильтровать события'\n  },\n  WeekExpander: {\n    expandTip: 'Нажмите, чтобы развернуть строку',\n    collapseTip: 'Нажмите, чтобы свернуть строку'\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (locale);\n\n//# sourceURL=webpack:///./lib/Calendar/localization/Ru.js?")}})}));