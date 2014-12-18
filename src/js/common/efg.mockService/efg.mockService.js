angular.module('efg.mockService', [
	'ng'
])

.factory('mock', function($q, $log, $window) {
	var mock = {
		'/api/v1/group': [
			{id: 'family', title: 'Kinderbetreuung', subtitle: '0 bis 6 Jahre', img: '//lorempixel.com/200/200/cats/1'},
			{id: 'kids', title: 'Kindergottesdienst', subtitle: '7 bis 12 Jahre', img: '//lorempixel.com/200/200/cats/2'},
			{id: 'teens', title: 'Gemeindeunterricht', subtitle: '13 bis 16 Jahre', img: '//lorempixel.com/200/200/cats/3'},
			{id: 'youth-cellgroups', title: 'Teenie-Hauskreise', subtitle: '17 bis 21 Jahre', img: '//lorempixel.com/200/200/cats/4'},
			{id: 'unlimited', title: 'unlimited', subtitle: '22 bis 35 Jahre', img: '//lorempixel.com/200/200/cats/5'},
			{id: 'women', title: 'Café Life', subtitle: 'Frauen', img: '//lorempixel.com/200/200/cats/6'},
			{id: 'seniors', title: 'Seniorenkreis', subtitle: 'über 60 Jahre', img: '//lorempixel.com/200/200/cats/7'}
		],
		'/api/v1/group/family?fields=name,poster': {
			id: 'family',
			name: '',
			poster: '//lorempixel.com/1920/1080/cats/1'
		},
		'/api/v1/group/kids?fields=name,poster': {
			id: 'kids',
			name: '',
			poster: '//lorempixel.com/1920/1080/cats/2'
		},
		'/api/v1/group/teens?fields=name,poster': {
			id: 'teens',
			name: '',
			poster: '//lorempixel.com/1920/1080/cats/3'
		},
		'/api/v1/group/youth-cellgroups?fields=name,poster': {
			id: 'youth-cellgroups',
			name: '',
			poster: '//lorempixel.com/1920/1080/cats/4'
		},
		'/api/v1/group/unlimited?fields=name,poster': {
			id: 'unlimited',
			name: '',
			poster: '//lorempixel.com/1920/1080/cats/5'
		},
		'/api/v1/group/women?fields=name,poster': {
			id: 'women',
			name: '',
			poster: '//lorempixel.com/1920/1080/cats/6'
		},
		'/api/v1/group/seniors?fields=name,poster': {
			id: 'seniors',
			name: '',
			poster: '//lorempixel.com/1920/1080/cats/7'
		},
		'/api/v1/member?fields=name,duties,img':  [
			{
				id: 'wilfried',
				name: {
					givenname: 'Wilfried',
					familyname: 'Schmitt'
				},
				duties: ['Gemeindeleiter', 'Ältester'],
				img: '//lorempixel.com/500/500/people/7'
			}, {
				id: 'thomas',
				name: {
					givenname: 'Thomas',
					familyname: 'Weber'
				},
				duties: ['Ältester'],
				img: '//lorempixel.com/500/500/people/8'
			}, {
				id: 'denise',
				name: {
					givenname: 'Denise',
					familyname: 'Schmutz'
				},
				duties: ['Raumbuchung', 'Kranke'],
				img: '//lorempixel.com/500/500/people/3'
			}, {
				id: 'andreas',
				name: {
					givenname: 'Andreas',
					familyname: 'Petry'
				},
				duties: ['Lehre', 'Gebet'],
				img: '//lorempixel.com/500/500/people/9'
			}, {
				id: 'daniel',
				name: {
					givenname: 'Daniel',
					familyname: 'Mertins'
				},
				duties: ['Gottesdienst'],
				img: '//lorempixel.com/500/500/people/10'
			}, {
				id: 'jonas',
				name: {
					givenname: 'Jonas',
					familyname: 'Weber'
				},
				duties: ['Jugendarbeit', 'Hauskreise'],
				img: '//lorempixel.com/500/500/people/6'
			}
		],
		'/api/v1/member/wilfried?fields=name,duties,description,poster': {
			id: 'wilfried',
			name: {
				givenname: 'Wilfried',
				familyname: 'Schmitt'
			},
			duties: ['Gemeindeleiter', 'Ältester'],
			description: 'Seit der Gemeindegründung dabei. Der Hirte.',
			poster: '//lorempixel.com/1920/1080/people/7'
		},
		'/api/v1/member/thomas?fields=name,duties,description,poster': {
			id: 'thomas',
			name: {
				givenname: 'Thomas',
				familyname: 'Weber'
			},
			duties: ['Ältester'],
			description: 'Seit 2 Jahren Ältester. Der Macher.',
			poster: '//lorempixel.com/1920/1080/people/8'
		},
		'/api/v1/member/denise?fields=name,duties,description,poster': {
			id: 'denise',
			name: {
				givenname: 'Denise',
				familyname: 'Schmutz'
			},
			duties: ['Raumbuchung', 'Kranke'],
			description: 'lorem ipsum dolor sit amet',
			poster: '//lorempixel.com/1920/1080/people/3'
		},
		'/api/v1/member/andreas?fields=name,duties,description,poster': {
			id: 'andreas',
			name: {
				givenname: 'Andreas',
				familyname: 'Petry'
			},
			duties: ['Lehre', 'Gebet'],
			description: 'lorem ipsum dolor sit amet',
			poster: '//lorempixel.com/1920/1080/people/9'
		},
		'/api/v1/member/daniel?fields=name,duties,description,poster': {
			id: 'daniel',
			name: {
				givenname: 'Daniel',
				familyname: 'Mertins'
			},
			duties: ['Gottesdienst'],
			description: 'lorem ipsum dolor sit amet',
			poster: '//lorempixel.com/1920/1080/people/10'
		},
		'/api/v1/member/jonas?fields=name,duties,description,poster': {
			id: 'jonas',
			name: {
				givenname: 'Jonas',
				familyname: 'Weber'
			},
			duties: ['Jugendarbeit', 'Hauskreise'],
			description: 'lorem ipsum dolor sit amet',
			poster: '//lorempixel.com/1920/1080/people/6'
		},
		'/api/v1/event?limit=3&fields=name,date,img': [
			{
				id: 'weihnachtsgottesdienst',
				name: 'Weihnachtsgottesdienst',
				date: [
					(new Date('2014/12/24 16:00')).getTime()
				],
				img: '//lorempixel.com/500/400/abstract/1'
			}, {
				id: 'allianzgebetswoche',
				name: 'Allianz Gebetswoche',
				date: [
					(new Date('2015/01/11 20:00')).getTime(),
					(new Date('2015/01/12 20:00')).getTime(),
					(new Date('2015/01/13 20:00')).getTime(),
					(new Date('2015/01/14 20:00')).getTime(),
					(new Date('2015/01/15 20:00')).getTime(),
					(new Date('2015/01/16 20:00')).getTime(),
					(new Date('2015/01/17 20:00')).getTime(),
					(new Date('2015/01/18 20:00')).getTime()
				],
				img: '//lorempixel.com/500/400/abstract/2'
			}, {
				id: 'endzeitbibelabende',
				name: 'Endzeit-Bibelabende',
				date: [
					(new Date('2015/01/27 20:00')).getTime(),
					(new Date('2015/02/03 20:00')).getTime(),
					(new Date('2015/02/10 20:00')).getTime()
				],
				img: '//lorempixel.com/500/400/abstract/3'
			}
		],
		'/api/v1/next': [
			{id: 'service', title: 'Gottesdienst', subtitle: 'Komm zu einem'},
			{id: 'cellgroup', title: 'Hauskreis', subtitle: 'Besuch einen'},
			{id: 'help', title: 'Hilfe', subtitle: 'Erhalte'},
			{id: 'talents', title: 'Gaben', subtitle: 'Entdecke Deine'},
			{id: 'baptism', title: 'Getauft', subtitle: 'Werde'},
			{id: 'participate', title: 'mit', subtitle: 'Arbeite'}
		],
		'/api/v1/info': [
			{id: 'creed', title: 'Glaubensbekenntnis', subtitle: 'Was wir glauben', img: 'glyphicon glyphicon-fire'},
			{id: 'faq', title: 'Häufige Fragen', subtitle: undefined, img: 'glyphicon glyphicon-comment'}
		],
		'/api/v1/contact?fields=name,action,img': [
			{id: 'phone', name: '+49 1577 8394600', action: 'tel:+4915778394600', img: 'glyphicon glyphicon-earphone'},
			{id: 'location', name: 'Böhlstraße 5, Ludwigshafen', action: '#!/findus', img: 'glyphicon glyphicon-map-marker'},
			{id: 'email', name: 'info@efg-ludwigshafen.de', action: 'mailto:info@efg-ludwigshafen.de', img: 'glyphicon glyphicon-envelope'}
		],
		'/api/v1/service': [
			{id: 'sunday', title: 'Jeden Sonntag', subtitle: '10:00 Uhr'},
			{id: 'worship', title: 'Am 2. Sonntag im Monat', subtitle: '19:00 Uhr'}
		],
		'/api/v1/service/sunday': {
			id: 'sunday',
			title: 'Sonntagmorgen-Gottesdienst',
			subtitle: 'Jung und Alt, Groß und Klein. Gemeinsam vor Gott'
		},
		'/api/v1/service/worship': {
			id: 'worship',
			title: 'Lobpreis-Gottesdienst',
			subtitle: 'Musik. Gebet. Anbetung.'
		}
	};
	
	$log.debug('consider implementing a backend, then replace mock with $http -- that should be it');
	return {
		get: function(url) {
			var deferred = $q.defer();
			
			if (mock.hasOwnProperty(url)) {
				deferred.resolve(mock[url]);
			} else {
				deferred.reject(url + ' not found in ' + Object.keys(mock));
			}
			
			return deferred.promise;
		}
	};
});