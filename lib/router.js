Router.configure({layoutTemplate:'layout'});
Router.route('/new',{name:'newForm'});
Router.go(`/${firstName}`);
Router.route('/:name',{name:"bCard"});