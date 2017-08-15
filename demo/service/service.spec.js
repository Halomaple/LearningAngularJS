/*describe('service test', function() {

	var mock, notify;
	beforeEach(function() {
		module('myServiceModule');

		mock = {
			alert: jasmine.createSpy()
		};

		module(function($provide) {
			$provide.value('$window', mock);
		});

		inject(function($injector) {
			notify = $injector.get('notify');
		});
	});

	it('should not alert first two notifications', function() {
		notify('one');
		notify('two');

		expect(mock.alert).not.toHaveBeenCalled();
	});

	it('should alert all after third notification', function() {
		notify('one');
		notify('two');
		notify('three');

		expect(mock.alert).toHaveBeenCalledWith("one\ntwo\nthree");
	});
});
*/