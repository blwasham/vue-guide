Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
});

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js! You loaded page on ' + new Date().toLocaleString()
  }
});

var app2 = new Vue({
  el: '#app-2',
  data: {
    seen: true
  }
});

var app4 = new Vue({
  el: '#myTodoList',
  data: {
    todos: [{ text: 'Get AWS Certification' }, { text: 'Learn Vue' }, { text: 'take ultimate angular course' }]
  }
});

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message
        .split('')
        .reverse()
        .join('');
    }
  }
});

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vueski!'
  }
});

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [{ id: 0, text: 'Veggies' }, { id: 1, text: 'Cheese' }, { id: 2, text: 'Beer' }]
  }
});

var watchExampleVM = new Vue({
  el: '#watch-example',
  data: {
    question: '',
    answer: 'Waiting on a question yo'
  },
  watch: {
    // whenever question changes, this function runs
    question: function(newQuestion) {
      this.answer = 'Waiting for you to stop tryping....';
      this.getAnswer();
    }
  },
  methods: {
    getAnswer: _.debounce(
      function() {
        if (this.question.indexOf('?') === -1) {
          this.answer = 'Questions usually contain a question mark. ;-)';
          return;
        }
        this.answer = 'Thinking...';
        var vm = this;
        axios
          .get('https://yesno.wtf/api')
          .then(function(response) {
            vm.answer = _.capitalize(response.data.answer);
          })
          .catch(function(error) {
            vm.answer = 'Error! Could not reach the API. ' + error;
          });
      },
      // This is the number of milliseconds we wait for the
      // user to stop typing.
      500
    )
  }
});

var app8 = new Vue({
  el: '#app-8',
  data: {
    infoText: true
  }
});

var app9 = new Vue({
  el: '#app-9',
  data: {
    myUrl: 'http://www.google.com',
    rawHtml: '<b>electric <mark>boogaboo</mark></b>',
    classObject: {
      'bg-success': true,
      'text-danger': true
    }
  },
  methods: {
    callThis: function() {
      this.rawHtml = "<em class='text-danger'>Take'n it to tha streets</em>";
    }
  }
});
