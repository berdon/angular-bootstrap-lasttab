# angular-bootstrap-lasttab
Abstracts persisting and reselecting the last active tab with Bootstrap tabs.

## Getting Started
### Install with bower
```
bower install angular-bootstrap-lasttab

### Add as angular dependency
```
angular.module('myApp', [
  'angular-bootstrap-lasttab'
  /* ... */
]);
```

### Add as injected provider to controller
```
angular.module('myApp').controller('MyCtrl', function ($lastTab) {
	/* ... */
});
```

## Advanced Usage
If your tabs are loaded asynchronously than you'll need to force initialization after they're loaded.
```
// Load data
Data.query(function(data) {
	// Do something with the data that results in tabs
	data.forEach(function(datum) {
		// ...
	});

	// Force initialize
	$lastTab.init();
});
```