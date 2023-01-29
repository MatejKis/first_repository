<script setup> 
    const props = defineProps(["person", "shouldBeEdited"])

    let editMode = false;
    let editablePerson = props.person;

    const getAge = (birth) => {
        let currentDate = new Date();
        let difference = currentDate.getFullYear() - birth.getFullYear();
        if (birth.getDate() >= currentDate.getDate() && birth.getMonth() >= currentDate.getMonth()) return difference-1;
        else return difference;
    }
</script>

<template>
   <section v-if="!shouldBeEdited" v-bind:class="getAge(person.birthday) >= 18 ? 'adult card':'card'">
        <article class="info">
          <div class="name">{{person.fname}} {{person.lname}}</div>
          <div class="birthday">{{person.birthday.getDate()}}.{{person.birthday.getMonth()+1}}.{{person.birthday.getFullYear()}} | 
            <span class="age">{{getAge(person.birthday)}} rokov</span></div>
        </article>
        <footer class="footer-card" >
          <span class="btn edit" v-on:click="$emit('editClicked', person)">Edit</span>
          <span class="btn remove" v-on:click="$emit('removeClicked', person)" >Remove</span>
        </footer>
    </section>
    <section v-else v-bind:class="getAge(person.birthday) >= 18 ? 'adult card':'card'">
        <article class="info">
          <div class="name"><input v-model="person.fname" class="inputName"><input v-model="person.lname" class="inputName"></div>
          <div class="birthday">{{person.birthday.getDate()}}.{{person.birthday.getMonth()+1}}.{{person.birthday.getFullYear()}} | 
            <span class="age">{{getAge(person.birthday)}} rokov</span></div>
        </article>
        <footer class="footer-card">
          <span class="btn edit" v-on:click="$emit('saveClicked', person)">Save</span>
          <span class="btn remove" v-on:click="$emit('cancelClicked', person)">Cancel</span>
        </footer>
    </section>
</template>

<style scoped>
    .card {
        background: rgb(232, 232, 232);
        border: 1px solid rgb(218, 218, 218);
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
        border-width: 3px;
        border-right-style: inset;
        border-bottom-style: inset;
    }
    .btn.edit {
        background: rgb(91, 236, 91);
        border-color: rgb(39, 187, 39);
    }
    .btn.remove {
        background: red;
        border-color: rgb(184, 19, 19);
    }
    .btn:hover {
        filter: brightness(.6);
        cursor: pointer;;
    }
    .inputName {
        border: none;
        text-align: center;
        font-size: 1.3rem;
        font-family: 'Oswald', sans-serif;
        background: none;
    }

</style>