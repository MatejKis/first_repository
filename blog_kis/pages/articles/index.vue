<script setup>
  const articles = useArticles().list.articles
  const categories = [
    {title: "Cars", show: true},
    {title: "Drivers", show: true},
    {title: "Current", show: true},
    {title: "New", show: true}
  ]
  
  // lists through all categories and returns true, if the category of the article is enabled, false if it does not
  const filterFunction = (article) => {
    for (const category of categories) {
      if (category.title == article.category)
        if (category.show)
          return true
        else return false
    }
  }

  let showFilter = false

  let articlesToShow = reactive({articles})
  articlesToShow.articles = articles.filter(filterFunction)

  const update = () => {
    articlesToShow.articles = articles.filter(filterFunction)
  }

  const addArticle = () => {
    useArticles().add()
  }

  const filterWasClicked = () => {
    showFilter = !showFilter

  }

</script>

<template>
  <myHeader/>
  <main @click="update">

    <div class="filter" @click="filterWasClicked"><img src="../../images/filterIcon.png"></div>

    <div class="filter" v-if="showFilter">
      <div v-for="category in categories" :key="category">
        <input type="checkbox" v-model="category.show" @change="update"> {{category.title}}
      </div>
    </div>

    <div class="articleBox">
      <div v-for="item in articlesToShow.articles" v-bind:key="item.id">
        <preview :article="item"/>
      </div>
    </div>

    <div class="add btn" @click="addArticle">Add</div>

  </main>
  <myFooter/>
</template>

<style>
  * {
    color: #FD841F;
    margin: 0;
    padding: 0;
  }

  main {
    background: #5089C6;
    min-height: 500px;
  }

  .articleBox {
    padding: 5px;
  }

  .filter {
    padding: 5px;
    padding-left: 10px;
  }

  .btn {
    border-radius: 25px;
    
    width: fit-content;
    padding: 5px;
    padding-left: 15px;
    padding-right: 15px;

    background: #E14D2A;
    color: #001253;

    
  }

  .btn:hover {
    cursor: pointer;
    filter: brightness(0.8);
  }

  .filter img {
    width: 40px;
    height: auto;
  }

  .filter img:hover {
    cursor: pointer;
  }

</style>
