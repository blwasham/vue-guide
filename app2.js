Vue.component('todo-item', {
  template: '<li>{{ title }}<button v-on:click="$emit(\'remove\')">X</button></li>',
  props: ['title']
});

var app17 = new Vue({
  el: '#app-17',
  data: {
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  computed: {
    evenNumbers: function() {
      return this.numbers.filter(function(number) {
        return number % 2 === 0;
      });
    }
  }
});

var app18 = new Vue({
  el: '#app-18',
  data: {
    items: [
      {
        msg: 'blablablabla'
      },
      {
        msg: 'boo boo chickens'
      }
    ]
  }
});

var app19 = new Vue({
  el: '#app-19',
  data: {
    todos: [
      {
        msg: 'clean my room',
        isComplete: true
      },
      {
        msg: 'do dishes',
        isComplete: true
      },
      {
        msg: 'order presents',
        isComplete: false
      }
    ]
  }
});

var app20 = new Vue({
  el: '#app-20',
  data: {
    todos: [
      {
        id: 1,
        msg: 'clean my room',
        isComplete: true
      },
      {
        id: 2,
        msg: 'do dishes',
        isComplete: true
      },
      {
        id: 3,
        msg: 'order presents',
        isComplete: false
      }
    ]
  }
});

var app21 = new Vue({
  el: '#todo-list-example',
  data: {
    newTodoText: '',
    todos: [
      {
        id: 1,
        title: 'Do the dishes'
      },
      {
        id: 2,
        title: 'Take out the trash'
      },
      {
        id: 3,
        title: 'Mow the lawn'
      }
    ],
    nextTodoId: 4
  },
  methods: {
    addNewTodo: function() {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      });
      this.newTodoText = '';
    }
  }
});

var app22 = new Vue({
  el: '#app-22',
  data: {
    counter: 0
  }
});

var app23 = new Vue({
  el: '#app-23',
  data: { name: 'Vue.js' },
  methods: {
    greet: function(event) {
      alert('whats up ' + this.name + '!');

      if (event) {
        alert(event.target.tagName);
      }
    }
  }
});

var app24 = new Vue({
  el: '#app-24',
  data: {
    checkedNames: [],
    picked: [],
    selected: [],
    selected2: [],
    myOptions: [{ text: 'Hornets', value: 'A' }, { text: 'Panthers', value: 'B' }, { text: 'Davidson', value: 'C' }]
  }
});

// app23.greet();
// component examples
// Vue.component('comp', {
//   props: ['firstNum', 'secondNum'],
//   template: '<div>{{firstNum + secondNum}}</div>'
// });
//
// Vue.component('count-by', {
//   props: ['countBy'],
//   data: function() {
//     return {
//       counter: this.countBy,
//       totalCount: undefined
//     };
//   },
//   methods: {
//     incrementCounter: function() {
//       alert(this.counter);
//       this.totalCount += this.counter;
//       alert(this.totalCount);
//     }
//   },
//   template:
//     '<div>Count By:  {{ counter }}<br>Total Count: {{ totalCount }}<br><button v-on:click="incrementCounter">Increment Count</button></div>'
// });
