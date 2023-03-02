<script setup>
const props = defineProps(["category"])

// filters articles with coresponding category
const articles = useArticles().list.articles.filter(item => item.category == props.category)


if (articles.length > 3) articles.length = 3;

</script>

<template>
  <div class="category">
    <h1>{{category}}</h1>
    <div class="articleBox">
      <div v-for="article in articles" :key="article">
        <preview :article="article"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

.category {
  padding: 5px;
  margin-left: 5px;
}

</style>