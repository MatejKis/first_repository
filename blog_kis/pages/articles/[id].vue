<script setup>
  const id = useRoute().params.id;
  const article = useArticles().list.articles[id-1]
  let editMode = ref(false)
  let height = ref(5)

  if (article.category == "New") editMode.value = true

  const startEditMode = () => {
    editMode.value = true
  }

  const endEditMode = () => {
    editMode.value = false
    useArticles().save(article)
  }

  const updateRows = () => {
    height.value = article.text.split("\n").length
    console.log("asfgag");
  }

</script>

<template>
  <myHeader/>
  <main v-if="!editMode" class="read">
    
    <h1>{{article.title}}</h1>
    <div class="edit btn" @click="startEditMode">edit</div>
    <div class="text">
      {{article.text}}
    </div>

  </main>

  <main v-else class="write">
    <input type="radio" v-model="article.category" value="Current"> Current<br>
    <input type="radio" v-model="article.category" value="Cars"> Cars<br>
    <input type="radio" v-model="article.category" value="Drivers"> Drivers<br>
    <br>

    <h1><input class="title" v-model="article.title"></h1>

    <div class="text"  >
      <textarea ref="textarea" v-model="article.text" v-bind:rows="height" @input="updateRows" />
    </div>

    <div class="btns">
      <div class="save btn" @click="endEditMode">save</div>
      <NuxtLink class="del btn" to="/articles" @click="useArticles().del(article.id)">delete</NuxtLink>
    </div>
  </main>
  <myFooter/>
</template>

<style>

  main {
    padding: 15px;
  }

  .btns {
    display: inline-flex;
    gap: 15px;
  }

  .text textarea {
    width: 98vw;

    
    border: none;
    outline: none;
    resize: none;
    overflow: hidden;

    
  }

</style>
