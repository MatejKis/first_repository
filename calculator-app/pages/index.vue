<script setup>
  let keys = [['7', '8', '9'], ['4', '5', '6'], ['1', '2', '3']]
  const numbers = reactive({
    nums: ['', ''],
    result: null,
    operation: ''
  });

  let operations = ['+','-','*', '/']
  let numToWrite = 0;

  const processInput = (key) => {

    if (operations.includes(key)){
      numToWrite = 1;
      numbers.operation = key;
    }

    if (key == '=') 
      switch (numbers.operation) {
        case '+': numbers.result = parseInt(numbers.nums[0]) + parseInt(numbers.nums[1]); break;
        case '-': numbers.result = parseInt(numbers.nums[0]) - parseInt(numbers.nums[1]); break;
        case '*': numbers.result = parseInt(numbers.nums[0]) * parseInt(numbers.nums[1]); break;
        case '/': numbers.result = parseInt(numbers.nums[0]) / parseInt(numbers.nums[1]); break;
      }

    for (var i = 0; i < 3; i++)
      if (keys[i].includes(key))
        numbers.nums[numToWrite] += key;

  }

</script>

<template>
  <div class="calculator">
    <div class="display">
      <div class="number1">{{numbers.nums[0]}} </div>
      <div class="operator"> {{numbers.operation}} </div>
      <div class="number2">{{numbers.nums[1]}} </div>
      <div class="result" v-if="numbers.result != null">= {{numbers.result}}</div>
    </div>
    <table class="keyBox" >
      <tr>
        <th class="operatorKey"><key content="+" @keyClicked="processInput"/></th>
        <th class="operatorKey"><key content="-" @keyClicked="processInput"/></th>
        <th class="operatorKey"><key content="=" @keyClicked="processInput"/></th>
      </tr>
      <tr v-for="i in 3" v-bind:key="i">
        <th v-for="j in 3" v-bind:key="j"><key :content="keys[i-1][j-1]" @keyClicked="processInput"/></th>
      </tr>
      <tr>
        <th class="operatorKey"><key content="*" @keyClicked="processInput"/></th>
        <th class="operatorKey"><key content="0" @keyClicked="processInput"/></th>
        <th class="operatorKey"><key content="/" @keyClicked="processInput"/></th>
      </tr>
    </table>

  </div>


</template>

<style>

  .calculator {
    width: fit-content;
    height: auto;
    padding: 5px;
    background: gainsboro;
  }

  .display {
    display: inline-flex;
    height: 25px;
    width: fit-content;
    min-width: 95%;
    background: whitesmoke;
    padding: 3px;
  }
</style>