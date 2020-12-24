<template>
  <div class="container-fluid">
    <br />
    <div>
      <div class="card" style="width: 118em;">
        <div class="card-header">
          <h2>FM-Progress</h2>
        </div>
        <div class="card-body">
          <table class="table table-hover">
            <thead>
              <tr>
                <th style="width:0px">No.</th>
                <th style="width:0px">BuildingName</th>
                <th style="width:0px">Project/Name</th>
                <th style="width:0px">LastName</th>
                <th style="width:0px">Tel</th>
                <th style="width:0px">Floor</th>
                <th style="width:0px">Room</th>
                <th style="width:0px">ISP</th>
                <th style="width:0px">Confirming</th>
                <th style="width:0px">Team</th>
                <th style="width:0px"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(food, index) in $store.getters.foods" :key="index">
                <td>{{ index + 1 }}</td>
                <td v-if="index !== editIndex">{{ food.building }}</td>
                <td v-if="index !== editIndex">{{ food.name }}</td>
                <td v-if="index !== editIndex">{{ food.lastname }}</td>
                <td v-if="index !== editIndex">{{ food.tel }}</td>
                <td v-if="index !== editIndex">{{ food.Floor }}</td>
                <td v-if="index !== editIndex">{{ food.Room }}</td>
                <td v-if="index !== editIndex">{{ food.isp }}</td>
                <td v-if="index !== editIndex">{{ food.Confirming }}</td>
                <td v-if="index !== editIndex">{{ food.team }}</td>

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
                    style="width:200px"
                    type="text"
                    :value="food.name"
                    class="form-control"
                    v-on:change="name = $event.target.value"
                  />
                </td>
                <td v-if="index === editIndex">
                  <input
                    style="width:200px"
                    type="text"
                    :value="food.lastname"
                    class="form-control"
                    v-on:change="lastname = $event.target.value"
                  />
                </td>
                <td v-if="index === editIndex">
                  <input
                    style="width:120px"
                    type="tel"
                    :value="food.tel"
                    class="form-control"
                    v-on:change="tel = $event.target.value"
                  />
                </td>
                <td v-if="index === editIndex">
                  <input
                    style="width:75px"
                    type="number"
                    :value="food.Floor"
                    class="form-control"
                    v-on:change="Floor = $event.target.value"
                  />
                </td>
                <td v-if="index === editIndex">
                  <input
                    style="width:75px"
                    type="number"
                    :value="food.Room"
                    class="form-control"
                    v-on:change="Room = $event.target.value"
                  />
                </td>

                <td v-if="index === editIndex">
                  <select
                    style="width:85px"
                    type="text"
                    :value="food.isp"
                    class="form-control"
                    v-on:change="isp = $event.target.value"
                    ><option value="true">TRUE</option>
                    <option value="AIS">AIS</option>
                    <option value="3BB">3BB</option>
                    <option value="FiberNet">FiberNet</option>
                    <option value="TXRX">TXRX</option>
                    <option value="TOT">TOT</option>
                  </select>
                </td>
                <td v-if="index === editIndex">
                  <select
                    style="width:85px"
                    type="text"
                    :value="food.Confirming"
                    class="form-control"
                    v-on:change="Confirming = $event.target.value"
                    ><option value="ยืนยัน">ยืนยัน</option>
                    <option value="ลูกค้าขอเลื่อน">ลูกค้าขอเลื่อน</option>
                    <option value="ติดต่อไม่ได้">ติดต่อไม่ได้</option>
                  </select>
                </td>
                <td v-if="index === editIndex">
                  <select
                    style="width:105px"
                    type="text"
                    :value="food.team"
                    class="form-control"
                    v-on:change="team = $event.target.value"
                  >
                    <option value="L-นรินทร์">L-นรินทร์</option>
                    <option value="L-ยงยุทธ">L-ยงยุทธ</option>
                    <option value="L-ยุ">L-ยุ</option>
                    <option value="L-วา">L-วา</option>
                    <option value="PK-ช้าง">PK-ช้าง</option>
                    <option value="PK-ดุง">PK-ดุง</option>
                    <option value="PK-ตี๋">PK-ตี๋</option>
                    <option value="PK-บาส">PK-บาส</option>
                    <option value="PK-ประทวน">PK-ประทวน</option>
                    <option value="PK-มิว">PK-มิว</option>
                    <option value="PK-เลน">PK-เลน</option>
                    <option value="PK-เสรี">PK-เสรี</option>
                    <option value="DC-NNฟู">DC-NNฟู</option></select
                  >
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
      building: "",
      name: "",
      lastname: "",
      tel: "",
      Floor: "",
      Room: "",
      isp: "",
      team: "",
      Confirming: "",
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
  },
};
</script>
