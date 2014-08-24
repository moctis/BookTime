'use strict';

(function() {
	describe('TemplateController', function() {
		//Initialize global variables
		var scope,
			TemplateController;

		// Load the main application module
		beforeEach(module(ApplicationConfiguration.applicationModuleName));

		beforeEach(inject(function($controller, $rootScope) {
			scope = $rootScope.$new();

			TemplateController = $controller('TemplateController', {
				$scope: scope
			});
		}));

		it('should expose the Hello message', function() {
			expect(scope.helloMessage).toBeTruthy();
		});
	});
})();
