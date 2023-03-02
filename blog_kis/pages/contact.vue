<script setup>
// Ready for future communication with server

let formular = {
  name: "",
  surname: "",
  mail: "",
  phone: "+421",
  text: ""
}

const send = () => {
  let formularJS = JSON.stringify(formular)

}

</script>

<template>
  <myHeader/>
  <main>

    <div class="formular">

      <input v-model="formular.name" placeholder="Name">
      <input v-model="formular.surname" placeholder="Surname">
      <input v-model="formular.mail"  type="email" placeholder="E-mail">
      <input v-model="formular.phone"  type="num" placeholder="Phone number">

      <div class="text">
        <textarea v-model="formular.text" placeholder="Message"/>
      </div>
      <div class="send btn" @click="send">
        Send
      </div>

    </div>


  </main>
  <myFooter/>
</template>

<style></style>
