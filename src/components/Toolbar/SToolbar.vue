<template>
  <div>
    <q-toolbar color="white" text-color="faded">
      <div class="secondaryToolbar">
        <ul class="sLinks">
          <li class="lists"><q-icon name="person_outline" size="1.5rem"/>DashBoard</li>
          <li class="lists">Add Invoive </li>
          <li class="lists">Clients </li>
          <li class="lists"><q-icon name="library_books" size="1.5rem"/>Reports</li>
        </ul>
      </div>
    </q-toolbar>
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style>
.secondaryToolbar {
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
}
.sLinks {
  display: flex;
  list-style-type: none;
}
.sLinks .lists {
  padding: 0 20px;
  font-size: 1.2rem;
}
.sLinks .lists:first-child {
  padding-left: 0;
}
</style>
