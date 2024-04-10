<template>
  <div class="bg-gray-300" style="height:100vh">
    <h1 class="text-center pt-4" style="font-size:1.5em">Edit Student</h1>
    <div class="container mx-auto">
      <div class="py-10">
        <form @submit.prevent="editStudent">
          <div class="mb-4">
            <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Name:</label>
            <input type="text" id="name" v-model="student.name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          </div>
          <div class="mb-4">
            <label for="course" class="block text-gray-700 text-sm font-bold mb-2">Course:</label>
            <input type="text" id="course" v-model="student.course" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          </div>
          <div class="mb-4">
            <label for="age" class="block text-gray-700 text-sm font-bold mb-2">Age:</label>
            <input type="number" id="age" v-model.number="student.age" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          </div>
          <div class="mb-4">
            <label for="address" class="block text-gray-700 text-sm font-bold mb-2">Address:</label>
            <textarea id="address" v-model="student.address" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
          </div>
          <div class="flex items-center justify-between">
            <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add Student</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
        student: {
            name: "",
            course: "",
            age: "",
            address: ""
        }
    }
  },
  methods: {
    async editStudent() {
        try {
            await axios.put(`https://students-5fc25-default-rtdb.firebaseio.com/st_list/${this.$route.params.id}.json`, this.student).then((res) => {
                console.log('response: ', res);
                this.$router.replace('/')
            });
        } catch(error) {
            console.log(error);
        }
    },
    async getStudent() {
        try {
            axios.get(`https://students-5fc25-default-rtdb.firebaseio.com/st_list/${this.$route.params.id}.json`).then((res) => {
                console.log('response: ', res);
                this.student = res.data;
            });
        } catch(error) {
            console.log(error);
        }
    }
  },
  mounted () {
    console.log('route: ', this.$route);
    this.getStudent();
  }
}
</script>