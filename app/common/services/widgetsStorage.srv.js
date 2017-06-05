/**
 * Created by roee on 6/5/2017.
 */
angular.module('app.common.services')
    .service('widgetStorage', function (localStorageService) {

        var widgets = localStorageService.get('widgets');

        widgets = JSON.parse(widgets) || [];

        function generateId() {
            var topId = 0;
            widgets.forEach(function (widget) {
                if (widget.id > topId) topId = widget.id
            });

            return topId + 1;
        };

        function saveWidgets() {
            localStorageService.set('widgets', JSON.stringify(widgets));
        }

        function getWidgetIndexById(id) {
            var foundIdx = null;

            widgets.forEach(function (widget, idx) {

                if (widget.id == id) {
                    foundIdx = idx;
                }
            });

            return foundIdx;
        }
        
        return {
            getWidget: function (id) {
                var widgetFound = null;
                widgets.forEach(function (widget) {

                    if (widget.id == id) widgetFound = widget;
                });

                return widgetFound;
            },

            getWidgets: function () {
                return widgets;
            },

            editWidget: function (id, widget) {
                var idx = getWidgetIndexById(id);

                widgets.splice(idx, 1);
                widgets.push(widget);
                saveWidgets();
            },

            addWidget: function (data) {
                data.id = generateId();
                widgets.push(data);
                saveWidgets();

                return data.id;
            },

            deleteWidget: function (id) {
                var idx = getWidgetIndexById(id);
                widgets.splice(idx, 1);
                saveWidgets();
            }
        }
    });