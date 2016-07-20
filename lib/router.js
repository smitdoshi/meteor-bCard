Router.configure({layoutTemplate:'layout'});

Router.route('/new',{name:'newForm'});
Router.route('/:firstName',{name:'bCard'});