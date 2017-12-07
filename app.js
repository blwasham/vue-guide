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
