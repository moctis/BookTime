'use strict';

(function() {
	// Testcruds Controller Spec
	describe('Testcruds Controller Tests', function() {
		// Initialize global variables
		var TestcrudsController,
		scope,
		$httpBackend,
		$stateParams,
		$location;

		// The $resource service augments the response object with methods for updating and deleting the resource.
		// If we were to use the standard toEqual matcher, our tests would fail because the test values would not match
		// the responses exactly. To solve the problem, we define a new toEqualData Jasmine matcher.
		// When the toEqualData matcher compares two objects, it takes only object properties into
		// account and ignores methods.
		beforeEach(function() {
			jasmine.addMatchers({
				toEqualData: function(util, customEqualityTesters) {
					return {
						compare: function(actual, expected) {
							return {
								pass: angular.equals(actual, expected)
							};
						}
					};
				}
			});
		});

		// Then we can start by loading the main application module
		beforeEach(module(ApplicationConfiguration.applicationModuleName));

		// The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
		// This allows us to inject a service but then attach it to a variable
		// with the same name as the service.
		beforeEach(inject(function($controller, $rootScope, _$location_, _$stateParams_, _$httpBackend_) {
			// Set a new global scope
			scope = $rootScope.$new();

			// Point global variables to injected services
			$stateParams = _$stateParams_;
			$httpBackend = _$httpBackend_;
			$location = _$location_;

			// Initialize the Testcruds controller.
			TestcrudsController = $controller('TestcrudsController', {
				$scope: scope
			});
		}));

		it('$scope.find() should create an array with at least one Testcrud object fetched from XHR', inject(function(Testcruds) {
			// Create sample Testcrud using the Testcruds service
			var sampleTestcrud = new Testcruds({
				name: 'New Testcrud'
			});

			// Create a sample Testcruds array that includes the new Testcrud
			var sampleTestcruds = [sampleTestcrud];

			// Set GET response
			$httpBackend.expectGET('testcruds').respond(sampleTestcruds);

			// Run controller functionality
			scope.find();
			$httpBackend.flush();

			// Test scope value
			expect(scope.testcruds).toEqualData(sampleTestcruds);
		}));

		it('$scope.findOne() should create an array with one Testcrud object fetched from XHR using a testcrudId URL parameter', inject(function(Testcruds) {
			// Define a sample Testcrud object
			var sampleTestcrud = new Testcruds({
				name: 'New Testcrud'
			});

			// Set the URL parameter
			$stateParams.testcrudId = '525a8422f6d0f87f0e407a33';

			// Set GET response
			$httpBackend.expectGET(/testcruds\/([0-9a-fA-F]{24})$/).respond(sampleTestcrud);

			// Run controller functionality
			scope.findOne();
			$httpBackend.flush();

			// Test scope value
			expect(scope.testcrud).toEqualData(sampleTestcrud);
		}));

		it('$scope.create() with valid form data should send a POST request with the form input values and then locate to new object URL', inject(function(Testcruds) {
			// Create a sample Testcrud object
			var sampleTestcrudPostData = new Testcruds({
				name: 'New Testcrud'
			});

			// Create a sample Testcrud response
			var sampleTestcrudResponse = new Testcruds({
				_id: '525cf20451979dea2c000001',
				name: 'New Testcrud'
			});

			// Fixture mock form input values
			scope.name = 'New Testcrud';

			// Set POST response
			$httpBackend.expectPOST('testcruds', sampleTestcrudPostData).respond(sampleTestcrudResponse);

			// Run controller functionality
			scope.create();
			$httpBackend.flush();

			// Test form inputs are reset
			expect(scope.name).toEqual('');

			// Test URL redirection after the Testcrud was created
			expect($location.path()).toBe('/testcruds/' + sampleTestcrudResponse._id);
		}));

		it('$scope.update() should update a valid Testcrud', inject(function(Testcruds) {
			// Define a sample Testcrud put data
			var sampleTestcrudPutData = new Testcruds({
				_id: '525cf20451979dea2c000001',
				name: 'New Testcrud'
			});

			// Mock Testcrud in scope
			scope.testcrud = sampleTestcrudPutData;

			// Set PUT response
			$httpBackend.expectPUT(/testcruds\/([0-9a-fA-F]{24})$/).respond();

			// Run controller functionality
			scope.update();
			$httpBackend.flush();

			// Test URL location to new object
			expect($location.path()).toBe('/testcruds/' + sampleTestcrudPutData._id);
		}));

		it('$scope.remove() should send a DELETE request with a valid testcrudId and remove the Testcrud from the scope', inject(function(Testcruds) {
			// Create new Testcrud object
			var sampleTestcrud = new Testcruds({
				_id: '525a8422f6d0f87f0e407a33'
			});

			// Create new Testcruds array and include the Testcrud
			scope.testcruds = [sampleTestcrud];

			// Set expected DELETE response
			$httpBackend.expectDELETE(/testcruds\/([0-9a-fA-F]{24})$/).respond(204);

			// Run controller functionality
			scope.remove(sampleTestcrud);
			$httpBackend.flush();

			// Test array after successful delete
			expect(scope.testcruds.length).toBe(0);
		}));
	});
}());