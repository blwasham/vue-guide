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

var app14 = new Vue({
  el: '#app-14',
  data: {
    blabla: undefined
  }
});
