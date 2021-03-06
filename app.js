Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
});

Vue.component('super-awesome-comp', {
  props: ['myMessageTwo'],
  template: '<strong class="text-success">Super Awesome Message: {{ myMessageTwo }}</strong>'
});

Vue.component('super-awesome-obj', {
  props: ['keyUpper1', 'two'],
  template: '<div>Lookout! {{ keyUpper1 }} - {{ two }}</div>'
});

Vue.component('comp', {
  props: ['firstNum', 'secondNum'],
  template: '<div>{{firstNum + secondNum}}</div>'
});

Vue.component('count-by', {
  props: ['countBy'],
  data: function() {
    return {
      counter: this.countBy,
      totalCount: undefined
    };
  },
  methods: {
    incrementCounter: function() {
      alert(this.counter);
      this.totalCount += this.counter;
      alert(this.totalCount);
    }
  },
  template:
    '<div>Count By:  {{ counter }}<br>Total Count: {{ totalCount }}<br><button v-on:click="incrementCounter">Increment Count</button></div>'
});

Vue.component('times-by', {
  props: ['timesBy'],
  computed: {
    timesByAnswer: function() {
      return this.timesBy * this.timesBy;
    }
  },
  template: '<div>{{timesBy}} * {{timesBy}} = {{timesByAnswer}}</div>'
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

var app10 = new Vue({
  el: '#app-10',
  data: {
    parentMsg: 'bla bla bla'
  }
});

var app11 = new Vue({
  el: '#app-11',
  data: {
    parentObj: {
      keyUpper1: 'key 1 val',
      two: 'key 2 val',
      three: 'key 3 val'
    }
  }
});

var app12 = new Vue({
  el: '#app-12'
});

var app13 = new Vue({
  el: '#app-13',
  data: {
    countBy: '1',
    timesBy: '10'
  }
});

var app14 = new Vue({
  el: '#app-14',
  data: {
    blabla: undefined
  }
});

var app15 = new Vue({
  el: '#app-15',
  data: {
    season: '1995',
    hornets: [
      {
        name: 'Muggsy Bogues',
        numb: '1',
        height: '5ft3in'
      },
      {
        name: 'Larry Johnson',
        numb: '2',
        height: '6ft7in'
      },
      {
        name: 'Dell Curry',
        numb: '33',
        height: '6ft5in'
      }
    ]
  }
});

var app16 = new Vue({
  el: '#app-16',
  data: {
    albums: {
      release1: 'Beauty In The Broken'
    }
  },
  methods: {
    addOneProp: function() {
      Vue.set(this.albums, 'release2', 'Scorpion & The Dove');
    },
    addBunchProps: function() {
      this.albums = Object.assign({}, this.albums, {
        release3: 'Live in NYC vol1',
        release4: 'Afterlens'
      });
    }
  }
});
