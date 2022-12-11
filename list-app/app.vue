<template>
  <main>
    <h1>Zoznam osôb</h1>
    <section class="list">
      <section v-for="person of persons" v-bind:key="person" v-bind:class="{'card-container':true,'card':true,'adult':getAge(person.birthday)>=18 }">
        <article class="info">
          <div class="name">{{person.fname}} {{person.lname}}</div>
          <div class="birthday">{{person.birthday.getDate()}}.{{person.birthday.getMonth()}}.{{person.birthday.getFullYear()}} | 
            <span class="age">{{getAge(person.birthday)}} rokov</span></div>
        </article>
        <footer class="footer-card">
          <span class="btn edit">Edit</span>
          <span class="btn remove">Remove</span>
        </footer>
      </section>
    </section>
  </main>
</template>

<script setup>
let persons = [
    {
        fname: "Magdalena",
        lname: "Mikulova",
        birthday: new Date (2000, 1, 5)
    },
    {
        fname: "Mirka",
        lname: "Makovicova",
        birthday: new Date (1992, 30, 2)
    },
    {
        fname: "Hugo",
        lname: "Hugovic",
        birthday: new Date (2007, 4, 11)
    },
    {
        fname: "Miki",
        lname: "Hric",
        birthday: new Date (2004, 12, 24)
    },
    {
        fname: "Andrea",
        lname: "Veresova",
        birthday: new Date (1982, 5, 10)
    },
    {
        fname: "Nora",
        lname: "Mojsejova",
        birthday: new Date (2009, 6, 2)
    },
]

const getAge = (birth) => {
    let currentDate = new Date();
    let difference = currentDate.getFullYear() - birth.getFullYear();

    if (birth.getDate >= currentDate.getDate() && birth.getMonth() >= currentDate.getMonth()) return difference--;
    else return difference;

}

</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;500;600;700&display=swap');
    body {
        font-size: 10px;    
        font-family: 'Oswald', sans-serif;
        padding: 1rem;
    }
    main {
        display: flex;
        flex-direction: column;
        gap: .75rem;
    }
    .list {
        display: flex;
        gap: 20px;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: stretch;
        font-size: 1.2rem;
    }
    .card-container {
        flex-grow: 1;
    }
    .card {
        background: rgba(255,255,255, 1);
        border: 1px solid #bbb;
        color: #444;
        box-shadow: 0 3px 5px rgba(0,0,0,.2);
        border-top-width: 5px;
        border-top-color: dodgerblue;
    }
    .card.adult {
        border-top-color: orange;
    }
    .card:hover {}
    .info {
        padding: 1rem;
        text-align: center;
        font-size: 1.3rem;
    }
    .name {}
    .age {
        font-weight: 300;
        font-size: 1rem;
    }
    .year-title {
        color: #bbbbbb;
    }
    .footer-card {
        display: flex;
    }
    .btn {
        padding: .75rem 2rem;
        color: white;
        width: 50px;
        flex-grow: 1;
        text-align: center;
        transition: .5s;
        font-size: 1rem;
    }
    .btn.edit {
        background: rgb(91, 236, 91);
    }
    .btn.remove {
        background: red;
    }
    .btn:hover {
        opacity: .3;
        cursor: pointer;;
    }
</style>