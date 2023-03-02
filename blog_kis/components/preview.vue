<script setup>
  defineProps(["article"])
</script>

<template>
    <NuxtLink class="articleLink" :to="{path: `/articles/${article.id}`, params: {id: article.id}}">
      <h1 class="title">{{article.title}}</h1>{{article.category}}

      <div v-if="article.text.length >= 300" class="text">
        {{article.text.substring(0, 300)}}...
      </div>
      
      <div v-else class="text">
        {{article.text}}
      </div>
    </NuxtLink>
</template>

<style scoped>
	* {
		text-decoration: none;

	}	

  .articleLink {
    background: rgba(255, 255, 255, 0.5);
    padding: 20px;
    border-radius: 10px;
    margin: 15px;
    display: block;
  }

  .articleLink:hover {
    filter: brightness(0.9);
  }
</style>