<template>
  <div class="container fluid">
    <br />
    <div>
      <div class="card">
        <div class="card-header">
          <h2>เพิ่มรายการอาหาร</h2>
        </div>
        <div class="card-body">
          <form v-on:submit.prevent="addFood()">
            <div class="form-group">
              <label>ชื่ออาหาร</label>
              <input type="text" class="form-control" placeholder="ระบุรายการอาหาร" v-model="name" />
            </div>
            <div class="form-group">
              <label>ราคาอาหาร</label>
              <input type="number" class="form-control" placeholder="ระบุราคาอาหาร" v-model="price" />
            </div>
            <button type="submit" class="btn btn-primary">เพิ่มรายการอาหาร</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      price: 0
    };
  },
  methods: {
    addFood() {
      if (this.name) {
        let payload = { name: this.name, price: this.price };
        this.$store.dispatch("addFood", payload);
      }
    }
  }
};
</script>