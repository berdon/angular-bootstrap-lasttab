(function(window, angular, undefined) {'use strict';

angular.module('angular-bootstrap-lasttab', [ ]).
	provider('$lastTab', function $lastTab() {
		function setupTabs() {
			// 'shown.bs.tab' for Bootstrap 3, 'shown' for Bootstrap 2
		    $('a[data-toggle="tab"]').on('shown.bs.tab shown', function() {
				// save the latest tab; use cookies if you like 'em better:
		        localStorage.setItem('lastTab', $(this).attr('data-target'));
			});

		    // go to the latest tab, if it exists:
		    var lastTab = localStorage.getItem('lastTab');
		    if (lastTab) {
		        $('[data-target="' + lastTab + '"]').tab('show');
		    }
		}

		this.$get = function($rootScope) {
			$rootScope.$on('$viewContentLoaded', setupTabs);

			return {
				init: setupTabs
			};
		};
	});
})(window, window.angular);