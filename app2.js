Vue.component('todo-item', {
  template: '<li>{{ title }}<button v-on:click="$emit(\'remove\')">X</button></li>',
  props: ['title']
});

Vue.component('prop-validation', {
  props: {
    propA: {
      type: String,
      required: true
    }
  },
  template: '<h1 class="text-warning">{{ propA }}</h1>'
});

Vue.component('button-counter', {
  template: '<button v-on:click="incrementCounter">{{ counter }}</button>',
  data: function() {
    return {
      counter: 0
    };
  },
  methods: {
    incrementCounter: function() {
      this.counter += 1;
      this.$emit('increment');
    }
  }
});

Vue.component('currency-input', {
  template: '<span>$<input ref="input" v-bind:value="value" v-on:input="updateValue($event.target.value)">',
  props: ['value'],
  updateValue: function(value) {
    var formattedValue = value.trim().slice(0, value.indexOf('.') === -1 ? value.length : value.indexOf('.') + 3);

    // if value was not already normalized
    // manually override it to conform
    if (formattedValue !== value) {
      this.$refs.input.value = formattedValue;
    }

    // emit the number value through the input event
    this.$emit('input', Number(formattedValue));
  }
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

var app25 = new Vue({
  el: '#app-25'
});

var app26 = new Vue({
  el: '#app-26',
  data: {
    total: 0
  },
  methods: {
    incrementTotal: function() {
      this.total += 1;
    }
  }
});

var app27 = new Vue({
  el: '#app-27'
});
