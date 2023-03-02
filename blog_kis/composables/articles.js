// Categories: Cars, Drivers, Current

const list = reactive({
  articles: [
    {
      id: 1,
      category: "Cars",
      title: "Lancia should race again",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, quae quis magni ab culpa ipsum officia aperiam, voluptatem explicabo eveniet, aliquid voluptas esse id. Sit nihil distinctio ipsam dicta dolor eius minus molestiae assumenda doloribus, totam consequatur? Quia est fugit deserunt asperiores corporis numquam id labore repudiandae. Dignissimos, sint debitis."
    },{
      id: 2,
      category: "Current",
      title: "Subaru may return to WRC next year",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, quae quis magni ab culpa ipsum officia aperiam, voluptatem explicabo eveniet, aliquid voluptas esse id. Sit nihil distinctio ipsam dicta dolor eius minus molestiae assumenda doloribus, totam consequatur? Quia est fugit deserunt asperiores corporis numquam id labore repudiandae. Dignissimos, sint debitis."
    },{
      id: 3,
      category: "Current",
      title: "New stage in sweden",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, quae quis magni ab culpa ipsum officia aperiam, voluptatem explicabo eveniet, aliquid voluptas esse id. Sit nihil distinctio ipsam dicta dolor eius minus molestiae assumenda doloribus, totam consequatur? Quia est fugit deserunt asperiores corporis numquam id labore repudiandae. Dignissimos, sint debitis."
    },{
      id: 4,
      category: "Current",
      title: "Rally in sweden was outstanding",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, quae quis magni ab culpa ipsum officia aperiam, voluptatem explicabo eveniet, aliquid voluptas esse id. Sit nihil distinctio ipsam dicta dolor eius minus molestiae assumenda doloribus, totam consequatur? Quia est fugit deserunt asperiores corporis numquam id labore repudiandae. Dignissimos, sint debitis."
    },{
      id: 5,
      category: "Drivers",
      title: "Live of Hannu Mikola",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, quae quis magni ab culpa ipsum officia aperiam, voluptatem explicabo eveniet, aliquid voluptas esse id. Sit nihil distinctio ipsam dicta dolor eius minus molestiae assumenda doloribus, totam consequatur? Quia est fugit deserunt asperiores corporis numquam id labore repudiandae. Dignissimos, sint debitis."
    },{
      id: 6,
      category: "Cars",
      title: "These are 10 most underrated rally cars in history",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, quae quis magni ab culpa ipsum officia aperiam, voluptatem explicabo eveniet, aliquid voluptas esse id. Sit nihil distinctio ipsam dicta dolor eius minus molestiae assumenda doloribus, totam consequatur? Quia est fugit deserunt asperiores corporis numquam id labore repudiandae. Dignissimos, sint debitis."
    },{
      id: 7,
      category: "Cars",
      title: "These are 10 most overrated rally cars in history",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, quae quis magni ab culpa ipsum officia aperiam, voluptatem explicabo eveniet, aliquid voluptas esse id. Sit nihil distinctio ipsam dicta dolor eius minus molestiae assumenda doloribus, totam consequatur? Quia est fugit deserunt asperiores corporis numquam id labore repudiandae. Dignissimos, sint debitis."
    },{
      id: 8,
      category: "Cars",
      title: "Subaru's new concept car turns heads",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, quae quis magni ab culpa ipsum officia aperiam, voluptatem explicabo eveniet, aliquid voluptas esse id. Sit nihil distinctio ipsam dicta dolor eius minus molestiae assumenda doloribus, totam consequatur? Quia est fugit deserunt asperiores corporis numquam id labore repudiandae. Dignissimos, sint debitis."
    },{
      id: 9,
      category: "Cars",
      title: "This car shot into the Stratos-phere",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, quae quis magni ab culpa ipsum officia aperiam, voluptatem explicabo eveniet, aliquid voluptas esse id. Sit nihil distinctio ipsam dicta dolor eius minus molestiae assumenda doloribus, totam consequatur? Quia est fugit deserunt asperiores corporis numquam id labore repudiandae. Dignissimos, sint debitis."
    }
  ]})

const save = (article) => {
  list.articles[article.id-1] = article
}

const del = (id) => {
  list.articles = list.articles.filter(article => article.id != id)
  updateID();
}

const updateID = () => {
  list.articles.map(article => {
    article.id = list.articles.indexOf(article)+1
    return article
  })
}

const add = () => {
  let article = {
    id: list.articles.length+1,
    category: "New",
    title: "New article",
    text: "Open to edit"
  }
  list.articles.push(article)
  updateID();
}


export const useArticles = () => {
  return {list, save, del, add}
}
