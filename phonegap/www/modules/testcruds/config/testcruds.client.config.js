'use strict';

// Configuring the Articles module
angular.module('testcruds').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Testcruds', 'testcruds', 'dropdown', '/testcruds(/create)?');
		Menus.addSubMenuItem('topbar', 'testcruds', 'List Testcruds', 'testcruds');
		Menus.addSubMenuItem('topbar', 'testcruds', 'New Testcrud', 'testcruds/create');
	}
]);