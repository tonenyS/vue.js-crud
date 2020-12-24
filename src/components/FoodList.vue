<template>
  <div class="container fluid">
    <br />
    <div>
      <div class="card">
        <div class="card-header">
          <h2>FM-Progress</h2>
        </div>
        <div class="card-body">
          <table class="table table-hover">
            <thead>
              <tr>
                <th style="width: 5px">No.</th>
                <th style="width: 5px">BuildingName</th>
                <th style="width: 5px">Project</th>
                <th style="width: 5px">LastName</th>
                <th style="width: 5px">Tel</th>
                <th style="width: 5px"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(food,index) in $store.getters.foods" :key="index">
                <td>{{ index + 1 }}</td>
                <td v-if="index !== editIndex">{{ food.building }}</td>
                <td v-if="index !== editIndex">{{ food.name }}</td>
                <td v-if="index !== editIndex">{{ food.lastname }}</td>
                <td v-if="index !== editIndex">{{ food.tel }}</td>
                <td v-if="index !== editIndex">
                  <button
                    type="button"
                    class="btn btn-danger mr-2"
                    v-on:click="deleteFood(index,food._id)"
                  >ลบ</button>
                  <button
                    type="button"
                    class="btn btn-warning"
                    v-on:click="openEdit(index,food)"
                  >แก้ไข</button>
                </td>
                 
                 <td v-if="index === editIndex">
                  <input
                    type="text"
                    :value="food.building"
                    class="form-control"
                    v-on:change="building = $event.target.value"
                  />
                </td>

                <td v-if="index === editIndex">
                  <input
                    type="text"
                    :value="food.name"
                    class="form-control"
                    v-on:change="name = $event.target.value"
                  />
                </td>
                <td v-if="index === editIndex">
                  <input
                    type="text"
                    :value="food.lastname"
                    class="form-control"
                    v-on:change="lastname = $event.target.value"
                  />
                </td>
                <td v-if="index === editIndex">
                  <input
                    type="tel"
                    :value="food.tel"
                    class="form-control"
                    v-on:change="tel = $event.target.value"
                  />
                </td>
                <td v-if="index === editIndex">
                  <button
                    type="button"
                    class="btn btn-success mr-2"
                    v-on:click="editFood(food._id)"
                  >ยืนยัน</button>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    v-on:click="closeEdit(index)"
                  >ยกเลิก</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editIndex: -1,
      building:"",
      name: "",
      lastname: "",
      tel:""
    };
  },
  created() {
    this.fetchFood();
  },
  methods: {
    fetchFood() {
      this.$store.dispatch("fetchFood");
    },
    deleteFood(index, _id) {
      let payload = { index: index, _id: _id };
      this.$store.dispatch("deleteFood", payload);
    },
    openEdit(index, food) {
      this.editIndex = index;
      this.building = food.building;
      this.name = food.name;
      this.lastname = food.lastname;
      this.tel = food.tel;
      
    },
    closeEdit() {
      this.editIndex = -1;
      this.building = "";
      this.name = "";
      this.lastname = "";
      this.tel = "";
   
    },
    editFood(_id) {
      let payload = {
        index: this.editIndex,
        _id: _id,
        building: this.building,
        name: this.name,
        lastname: this.lastname,
        tel: this.tel
      };
      this.$store.dispatch("editFood", payload).then(this.closeEdit());
    }
  }
};
</script>