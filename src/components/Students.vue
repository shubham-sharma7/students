<template>
  <div class="bg-gray-300" style="height:100vh">
    <h1 class="text-center pt-4" style="font-size:1.5em">Student MIS</h1>
    <div class="container mx-auto">
      <div class="py-10">
        <router-link to="/add-student" class="bg-green-500 text-sm p-2 text-white">Add Student</router-link>
        <div class="flex items-center px-5 py-2">
          <span class="w-1/4">
            <span class="text-xs uppercase text-gray-600 font-bold">Name</span>
          </span>
          <span class="w-1/4">
            <span class="text-xs uppercase text-gray-600 font-bold">Course</span>
          </span>
          <span class="w-1/4">
            <span class="text-xs uppercase text-gray-600 font-bold">Age</span>
          </span>
          <span class="w-1/4">
            <span class="text-xs uppercase text-gray-600 font-bold">Address</span>
          </span>
          <span class="w-1/4">
            <span class="text-xs uppercase text-gray-600 font-bold">Action</span>
          </span>
        </div>

        <div
          v-for="(data, key) in students"
          :key="key"
          class="hover:bg-gray-200 cursor-pointer bg-white shadow flex p-5 items-center mb-5 rounded-lg"
        >
          <div class="w-1/4">
            <span class="capitalize text-gray-600 text-sm">{{ data.name }}</span>
          </div>
          <div class="w-1/4">
            <span class="capitalize text-gray-600 text-sm">{{ data.course }}</span>
          </div>
          <div class="w-1/4">
            <span class="text-gray-600 text-sm">{{ data.age }}</span>
          </div>
          <div class="w-1/4">
            <span class="text-gray-600 text-sm">{{ data.address }}</span>
          </div>
          <div class="w-1/4">
            <router-link :to="'/edit-student/'+key" class="bg-slate-500 text-sm p-2 text-white me-2">Edit</router-link>
            <button @click="deleteRecord(key)" class="bg-red-500 text-sm p-2 text-white">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      students: []
    }
  },
  methods: {
    getStudent() {
        axios.get('https://students-5fc25-default-rtdb.firebaseio.com/st_list.json').then((res) => {
      console.log('response: ', res)
      this.students = res.data;
    })
    },
   deleteRecord(key) {
    axios.delete(`https://students-5fc25-default-rtdb.firebaseio.com/st_list/${key}.json`).then((res) => {
        console.log('deleted successfully!');
        this.getStudent();
    })
   }
  },
  mounted () {
    this.getStudent();
  }
}
</script>