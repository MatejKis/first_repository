<template>
  <main>
    <h1>{{title.text}}</h1>
    <section class="list">
      <section v-for="person of persons" v-bind:key="person" v-bind:class="card-container">
        <PersonalCard v-bind:person="person" v-bind:shouldBeEdited="false" @removeClicked = "removePerson" @editClicked = "editPerson"></PersonalCard>                      
      </section>
    </section>
    <span class="btn remove" @click="deleteAll" v-show="showDelete">Delete all</span>
    <PersonalCard v-if="editMode" v-bind:shouldBeEdited="true" v-bind:person="personToEdit" @cancelClicked="cancelEditing" @saveClicked="saveEdit"></PersonalCard>
  </main>
</template>

<script setup>                                                                        
let showDelete = ref(true);
let editMode = false;
let personToEdit;
let personThatIsBeingEdited;
let name = ref("");                                                                   
let title = reactive({text : "List of people"})                                       
setTimeout(() => { console.log(title.text); title.text="Zoznam ludi";}, 5000)         

let initialPersons = [
    {
        fname: "Magdalena",
        lname: "Mikulova",
        birthday: new Date (2000, 0, 5)
    },
    {
        fname: "Mirka",
        lname: "Makovicova",
        birthday: new Date (1992, 2, 30)
    },
    {
        fname: "Hugo",
        lname: "Hugovic",
        birthday: new Date (2007, 4, 11)
    },
    {
        fname: "Miki",
        lname: "Hric",
        birthday: new Date (2004, 11, 24)
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
    },]

let persons = ref(initialPersons);

const deleteAll = () => {                                                             
    persons.value = [];
    showDelete.value = false;
    name.value = "";
}

const removePerson = (personThatShouldBeRemoved) => {                                                          
    persons.value = persons.value.filter(person => person != personThatShouldBeRemoved)
}

const editPerson = (personThatShouldBeEdited) => {                                          
    personThatIsBeingEdited = personThatShouldBeEdited;
    personToEdit = personThatShouldBeEdited;
    persons.value = persons.value.map(person => person)                                 
    editMode = true;
    console.log("Edit was clicked\nPerson that is being edited: " + personThatIsBeingEdited.fname + "\nPerson to edit: " + personToEdit.fname)
}

const cancelEditing = () => {
    editMode = false;
    personToEdit = null;
    personThatIsBeingEdited = null;
    persons.value = persons.value.map(person => person)
}

const saveEdit = (editedPerson) => {
    persons.value = persons.value.map(person => {if (person == personThatIsBeingEdited) person = editedPerson; return person})
    cancelEditing();
    
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
</style>